/**
 * Sample React Native Quiz App
 *  Landing Page
**/

import React, { Component, } from 'react';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { connect } from "react-redux";
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Images, i18n, Colors } from '../../constants'
import MapView from 'react-native-maps';
import { getLocations, bookLocations } from '../../reducers/user'
import { Card } from "../../components/cardcomponent/Card"


const KEYS_TO_FILTERS = ['locationName'];
class LandingScreen extends Component {
  constructor(props) {
    super(props)
    this.props.getLocations()
    this.state = {
      data: false,
      searchTerm: '',
      name: '',
      marker: null,
      item: 1
    }
  }

  shouldComponentUpdate() {
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.user.lacationsDetail !== this.props.user.lacationsDetail) {
      this.setState({
        data: true,
        filteredDetails: nextProps.user.lacationsDetail,
        name: nextProps.user.lacationsDetail[0].locationName,
        marker: nextProps.user.lacationsDetail[0]
      })
    }

  }

  // function on entering data
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
 
  // function on Booking
  onBooking = () => {
    let data = {
      locationId: this.state.marker.locationId,
      noOfItems: this.state.marker.locationId,
      checkInDate: "29/08/2019",
      checkOutDate: "29/08/2019"
    }
    this.props.bookLocations(data, this.props.navigation)
  }

  // function on decrement
  onDecrement = () => {
    if (this.state.item > 1) {
      this.setState({ item: this.state.item - 1 })
    }
  }

  // function on increment
  onIncrement = () => {
    this.setState({ item: this.state.item + 1 })
  }
  render() {
    const filteredDetails = this.props.user.lacationsDetail && this.props.user.lacationsDetail.length > 0 && this.props.user.lacationsDetail[0].latitude && this.props.user.lacationsDetail.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <SafeAreaView>
        <TouchableOpacity activeOpacity={0.9}>
          <View style={styles.searchContainer}>
            <SearchInput
              onChangeText={(term) => { this.searchUpdated(term) }}
              style={styles.searchInput}
              placeholder={i18n.label.searchLocation}
            />

          </View>
          {this.state.searchTerm !== '' && filteredDetails.length > 0 &&
            <View>
              <View style={styles.timeDateContainer}><Text style={styles.timeText}>{'From 26 april 2019 to 19 Aug 2019'}</Text></View>
              <View style={styles.itemContainer}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.onDecrement()}><Text style={styles.minusText}>-</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}><Text style={styles.timeText}>{this.state.item}</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => this.onIncrement()}><Text style={styles.minusText}>+</Text></TouchableOpacity>
              </View>
            </View>
          }
          {this.props.user.lacationsDetail && this.props.user.lacationsDetail.length > 0 && this.props.user.lacationsDetail[0].latitude &&
            <View style={[styles.mapContainer, this.state.searchTerm!==''&&{height:'100%'}]}>
              <MapView
                ref={map => (this.map = map)}
                loadingEnabled={false}
                zoomEnabled={true}
                showsUserLocation={false}
                showsMyLocationButton={false}
                pitchEnabled={false}
                initialRegion={{
                  latitude: this.props.user.lacationsDetail[0].latitude,
                  longitude: this.props.user.lacationsDetail[0].longitude,
                  latitudeDelta: 1,
                  longitudeDelta: 1,
                }}
                rotateEnabled={false}
                showsPointsOfInterest={false}
                moveOnMarkerPress={false}
                style={{ flex: 1 }}
                minZoomLevel={2}
                maxZoomLevel={18}
              >
                {this.props.user.lacationsDetail && this.props.user.lacationsDetail.length > 0 && filteredDetails.map(marker => (
                  <TouchableOpacity>
                    <MapView.Marker
                      coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude
                      }}
                      onPress={() => this.setState({ name: marker.locationName, marker: marker, searchTerm:'' })}
                    />
                  </TouchableOpacity>
                ))}
              </MapView>
            </View>
          }
        </TouchableOpacity>
        {this.state.searchTerm===''&&
        <View style={styles.cardContainer}>
          <Card locationName={this.state.name} onBookPress={() => this.onBooking()} />
        </View>
        }
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = {
  getLocations,
  bookLocations
};

const mapStateToProps = state => ({
  user: state.user
});

// used to connect loginscreen with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingScreen);

