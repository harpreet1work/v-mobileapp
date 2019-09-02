import { StyleSheet } from 'react-native';

// custom modules
import { responsiveHeight, responsiveWidth, dynamicSize } from '../../constants/dimensions';
import { Colors } from '../../constants'
// intreface style for no data found components


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    navigationHeader: {
        height: responsiveHeight(8),
        width: responsiveWidth(100),
        justifyContent: 'center',
        alignContent: 'center',
    },
    direction: {
        height: responsiveHeight(2.5),
        width: responsiveHeight(4),
    },
    servicePicture: {
        height: responsiveHeight(25),
        width: responsiveWidth(94),
        borderRadius: responsiveWidth(3),
        marginHorizontal: responsiveWidth(3),
        marginTop: responsiveHeight(3)
    },
    signalContainer: {
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(3),
        marginTop: responsiveHeight(2)
    },
    specialIndstructionText: {
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(3),
    },
    descriptionContainer: {
        flexDirection: 'row',
        marginHorizontal: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(1),
        paddingVertical: responsiveHeight(1),
        // borderWidth:1,
        marginTop: responsiveHeight(0.5),
        borderRadius: responsiveHeight(2),
        justifyContent: 'space-between',
    },
    flatlistContainer: {
        marginTop: responsiveHeight(2)
    },
    buttonContainer: {
        height: responsiveHeight(5),
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(3),
        borderRadius: responsiveHeight(4),
        width: responsiveWidth(94),
        backgroundColor: '#2a93e5',
        justifyContent: 'center',
        alignContent: 'center'
    },
    checkinText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: dynamicSize(16),
        fontWeight: '500',
    },
    getDirectionContainer: {
        justifyContent: 'center',
        marginTop: responsiveHeight(2),
    },
    getDirectionText: {
        color: '#2a93e5',
        textAlign: 'center',
        fontSize: dynamicSize(16),
        fontWeight: '500',
    },
    nameText: {
        fontSize: dynamicSize(14),
        fontWeight: '500',
        color: Colors.steel_grey
    },
    dataInfoText: {
        fontSize: dynamicSize(14),
        fontWeight: '500',
        color: Colors.steel_grey
    },
    checkText: {
        textAlign: 'center',
        fontSize: dynamicSize(20),
        fontWeight: '500',
        color: Colors.steel_grey,
        marginLeft:responsiveWidth(19),
    },
    storeContainer: {
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(4),
        alignContent: 'center',
        paddingBottom:  responsiveWidth(3),
    },
  addressContainer:{ 
      flexDirection: 'row', 
      paddingHorizontal: responsiveWidth(4),
      alignContent: 'center' 
    },
    storeText:{
        textAlign: 'center',
        fontSize: dynamicSize(14),
        fontWeight: '500',
        color: Colors.steel_grey
    },
    addressText:{
        textAlign: 'center',
        fontSize: dynamicSize(14),
        fontWeight: '500',
        color: '#2a93e5',
    },
    arrowText:{
        fontSize:dynamicSize(28),
        fontWeight:'600',
        marginLeft:responsiveWidth(4),
        color:'black',
       bottom:responsiveWidth(2)
    }
}); 

export default styles;
