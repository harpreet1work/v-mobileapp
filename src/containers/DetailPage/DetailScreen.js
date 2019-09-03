/**
 * Sample React Native Quiz App
 *  Landing Page
**/

import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Platform, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import { connect } from "react-redux";
import { Images, i18n, Colors } from '../../constants'
import { getSpecificBooking } from '../../reducers/user'

class DetailScreen extends Component {
    constructor(props) {
        super(props)
        props.getSpecificBooking(props.navigation.state.params.dataReq.locationId)
        this.state = {
            indexReq: null,
            dataSpecific: []
        }
    }

    shouldComponentUpdate() {
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            this.setState({ dataSpecific: nextProps.user.specificdetails })
        }
    }
    onSelect = (index) => {
        this.setState({ indexReq: index })
    }
    onBackPress = () => {
        this.props.navigation.navigate('LandingScreen')
    }
    renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity style={[styles.descriptionContainer, index === this.state.indexReq && { backgroundColor: '#f4f9fd' }]} onPress={() => this.onSelect(index)}>
                    <View ><Text style={[styles.nameText]}>{i18n.label.bookingId}</Text></View>
                    <View><Text style={styles.dataInfoText}>{item.bookingId}</Text></View>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.descriptionContainer, index === this.state.indexReq && { backgroundColor: '#f4f9fd' }]} onPress={() => this.onSelect(index)}>
                    <View><Text style={[styles.nameText]}>{i18n.label.checkIn}</Text></View>
                    <View><Text style={styles.dataInfoText}>{item.checkInDate}</Text></View>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.descriptionContainer, index === this.state.indexReq && { backgroundColor: '#f4f9fd' }]} onPress={() => this.onSelect(index)}>
                    <View><Text style={[styles.nameText]}>{i18n.label.checkOut}</Text></View>
                    <View><Text style={styles.dataInfoText}>{item.checkOutDate}</Text></View>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.descriptionContainer, index === this.state.indexReq && { backgroundColor: '#f4f9fd' }]} onPress={() => this.onSelect(index)}>

                    <View><Text style={[styles.nameText]}>{i18n.label.noOfItem}</Text></View>
                    <View><Text style={styles.dataInfoText}>{item.noOfItems}</Text></View>
                </TouchableOpacity>
            </View>


        )
    }

    render() {

        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.navigationHeader}>
                    <TouchableOpacity activeOpacity={0.9} style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.onBackPress()}>
                            <Text style={styles.arrowText}>{'<'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.checkText}>{i18n.label.checkinDetails}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.storeContainer}>
                    <View><Text style={styles.storeText}>{i18n.label.storeName}</Text></View>
                    <View><Text style={styles.storeText}>{'Tarader Joes Gift Shop & Apprael'}</Text></View>
                </View>
                <View style={styles.addressContainer}>
                    <View><Text style={styles.storeText}>{i18n.label.address}</Text></View>
                    <View><Text style={styles.addressText}>{'303 Spring St. New York, NY23923'}</Text></View>
                    <View><Image source={Images.direction} style={styles.direction} resizeMode={'contain'} /></View>
                </View>
                <View>
                    <Image source={Images.car} style={styles.servicePicture}  resizeMode={'contain'}/>
                </View>
                <View style={styles.signalContainer}>
                    <View><Image source={Images.gender} style={styles.direction} resizeMode={'contain'} /></View>
                    <View><Image source={Images.signal} style={styles.direction} resizeMode={'contain'} /></View>
                </View>
                <Text style={styles.specialIndstructionText}>{i18n.label.specialInstruction}</Text>
                <View style={styles.flatlistContainer}>
                    <FlatList
                        data={this.state.dataSpecific}
                        renderItem={(item) => this.renderItem(item)}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.checkinText}>{i18n.label.checkIn}</Text>
                </TouchableOpacity>
                <View style={styles.getDirectionContainer}>
                    <Text style={styles.getDirectionText}>{i18n.label.getDirection}</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = {
    getSpecificBooking
};

const mapStateToProps = state => ({
    user: state.user
});

// used to connect loginscreen with redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailScreen);

