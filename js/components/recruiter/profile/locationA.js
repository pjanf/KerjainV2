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
      y:"ab",
      w:"cd",
      coords:[],
      x: null,
      cordLatitude: -6.270565,
      cordLongitude: 106.759550,
      markers: [{
        title: 'Office Location',
        coordinates: {
          latitude: -6.270565,
          longitude: 106.759550
        },
        description: 'Bintaro, Tangerang Selatan'
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
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );

   }

  mergeLot(){
     if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = "'"+this.state.latitude +","+this.state.longitude+"'"
       this.getDirections(concatLot, "-6.270565,106.759550")
     }
   }

   async getDirections(startLoc, destinationLoc) {

         try {
             let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
             let respJson = await resp.json();
             let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
             let coords = points.map((point, index) => {
                 return  {
                     latitude : point[0],
                     longitude : point[1]
                 }
             })
             this.setState({coords: coords})
             this.setState({x: "true"})
             return coords
         } catch(error) {
             alert(error)
             return error
         }
     }
  render() {
    return (

      <MapView style={styles.map} initialRegion={{
       latitude:-6.270565,
       longitude:106.759550,
       latitudeDelta: 1,
       longitudeDelta: 1
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

      {!!this.state.latitude && !!this.state.longitude && <MapView.Polyline
          coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude}, // optional
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude}, // optional
          ]}
          strokeWidth={4}
      />}

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
