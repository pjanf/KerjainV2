import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
import { TabNavigator } from "react-navigation";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Tabs, Tab, TabHeading, List, ListItem, DeckSwiper, Card, CardItem, Thumbnail, Badge } from "native-base";

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import RNGooglePlaces from 'react-native-google-places';


class LocationB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      address:null,
  };
  }

  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal({

	  latitude: -6.363613,
	  longitude: 106.828136,
	  radius: 0.01
    })
    .then((place) => {

  		this.setState({
        latitude: place.latitude,
        longitude: place.longitude,
        address: place.address
      })
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }


  render() {

    return (
      <View style={styles.container}>
      <Text> {this.state.longitude} </Text>
      <Text> {this.state.latitude} </Text>
      <Text> {this.state.address} </Text>
             <TouchableOpacity
               style={styles.button}
               onPress={() => this.openSearchModal()}
             >
               <Text>Pick a Placee</Text>
             </TouchableOpacity>

           </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LocationB;
