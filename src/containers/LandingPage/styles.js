import { StyleSheet } from 'react-native';

// custom modules
import { responsiveHeight, responsiveWidth, dynamicSize } from '../../constants/dimensions';
import { Colors } from '../../constants'
import { Platform } from 'react-native';
// intreface style for no data found components


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  searchInput: {

  },
  searchContainer: {
    borderWidth: 2,
    paddingVertical: responsiveHeight(1),
    marginHorizontal: responsiveHeight(1.5),
    width: responsiveWidth(95),
    height: Platform.OS === 'ios' ? responsiveHeight(6) : responsiveHeight(9),
    marginTop: responsiveHeight(0.5),
    borderRadius: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(2),
  },
  mapContainer: {
    height: responsiveHeight(68),
   
  },
  itemContainer:{
    width: responsiveWidth(95),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
    marginHorizontal: responsiveHeight(1.5),
    borderWidth: 1,
    borderColor: Colors.steel_grey,
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(0.5),
    flexDirection:'row',
    justifyContent:'space-between'
  },
  timeDateContainer: {
    width: responsiveWidth(95),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
    marginHorizontal: responsiveHeight(1.5),
    borderWidth: 1,
    borderColor: Colors.steel_grey,
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(0.5)
  },
  minusText:{
    fontSize: dynamicSize(19),
    color:Colors.steel_grey
  },
timeText:{
  fontSize: dynamicSize(19),
  color:Colors.steel_grey
}
});

export default styles;
