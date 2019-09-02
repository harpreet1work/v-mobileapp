
import {
  GETLOCATION,
  getlocation,
  SPECIFICDETAIL,
  specificdetail
} from '../actions/user-actions-types';
import axios from 'axios';
import {Connection}from '../config/connection'


const initialState = {
 lacationsDetail:null,
 specificdetails:null
};

export default function user(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case GETLOCATION:
   
      return {
        ...state,
        lacationsDetail:payload.data
      };
      case SPECIFICDETAIL:
    
        return {
          ...state,
          specificdetails:payload.data
        };
    default:
      return state;
  }
}

/********* API to signup user ************/
export const getLocations = () => {
  let url = Connection.concat('/api/location')
  return dispatch => {
    return axios
      .get(url)
      .then(res => {
        dispatch(getlocation(res.data));
      })
      .catch((error) => {
        dispatch(quiz(error));
      });
  };
};

/********* API to book location ************/
export const bookLocations = (data,navigation) => {
  let url = Connection.concat('/api/booking')
  return dispatch => {
    return axios
      .post(url, data)
      .then(res => {
        navigation.navigate('DetailScreen',{dataReq:data})
       
      })
      .catch((error) => {
       
      });
  };
};
/********* API to book location ************/
export const getSpecificBooking = (data) => {
  let url = Connection.concat('/api/booking/').concat(data)
  return dispatch => {  
  return axios
      .get(url)
      .then(res => {
       dispatch(specificdetail(res.data));
      })
      .catch((error) => {
       
      });
    }
};