import { StyleSheet } from 'react-native';

// custom modules
import { responsiveHeight, responsiveWidth, dynamicSize } from '../../constants/dimensions';
import { Colors } from '../../constants'

// intreface style for no data found components


const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: responsiveHeight(1.5),
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    subContainer: {
        flex: 2,
        paddingVertical: responsiveHeight(1.5)
    },
    detailContainer: {
        flex: 3,
        paddingVertical: responsiveHeight(1.5),
        paddingLeft: responsiveWidth(5),
        paddingRight:responsiveWidth(2)
    },
    image: {
        width: responsiveWidth(45),
        height: responsiveHeight(15)
    },
    luggageText: {
        fontSize: dynamicSize(16),
        color: '#000',
        fontWeight: '600'
    },
    mileContainer:{
        marginTop:responsiveHeight(0.8)
    },
    mileText:{
        marginTop:responsiveHeight(0.2),
        color:Colors.steel_grey,
        fontSize:dynamicSize(14)
    },
    distanceText:{
        color:Colors.steel_grey,
        fontSize:dynamicSize(14)
    },
    bookContainerButton:{
        backgroundColor: '#2a93e5',
        borderRadius:responsiveHeight(3), 
        width:responsiveWidth(27),
        height:responsiveHeight(5), 
        justifyContent: 'center',
        alignItems: 'center',
        padding:responsiveWidth(1),
        alignSelf:'flex-end'
    },
    bookText:{
        color:'#fff', 
        fontSize:dynamicSize(16)
    }

})

export default styles;
