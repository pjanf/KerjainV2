import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
import { TabNavigator } from "react-navigation";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Tabs, Tab, TabHeading, List, ListItem, DeckSwiper, Card, CardItem, Thumbnail, Badge } from "native-base";

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';


class LocationA extends Component {
	// eslint-disable-line
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      markers: [{
        title: 'Office Location',
        coordinates: {
          latitude: 3.149771,
          longitude: 101
        },
        description: 'Jalan Kuching Nomor 2'
      }
    ],
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        console.log(position);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <MapView style={styles.map} initialRegion={{
       latitude: 37,
       longitude: 6,
       latitudeDelta: 100,
       longitudeDelta: 100,
       }}>
       {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Your Location"}
       />}
       {this.state.markers.map(marker=>(
         <MapView.Marker
           coordinate={marker.coordinates}
           title = {marker.title}
           description = {marker.description}
         />

       ))}

      </MapView>

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

export default LocationA;
