import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
import { TabNavigator } from "react-navigation";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Tabs, Tab, TabHeading, List, ListItem, DeckSwiper, Card, CardItem, Thumbnail, Badge } from "native-base";

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';

const Realm = require ('realm');

const WorkExperience1= {
    name: 'WorkExperience1',
    properties: {
    companyName: 'string',
    position: 'string',
    description: 'string',
    dateJoin: 'string',
    dateLeft: 'string',
    }
};

const Education4= {
    name: 'Education4',
    properties: {
    school: 'string',
    degree: 'string',
    major: 'string',
    graduation: 'string',
    }
};

const JobsPosting8 = {
  name: 'JobsPosting8',
  properties: {
    title:     'string',
    salary: 'string',
    location: 'string',
    latitude: 'double',
    longitude:'double',
    description: 'string',
    requirement: 'string',
  }
};

let realm = new Realm({schema: [WorkExperience1, JobsPosting8, Education4]});
let favs = realm.objects('JobsPosting8');

class LocationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      concatDest: null,
      coords:[],
      x: 'false',
      cordLatitude:null,
      cordLongitude:null,
      address:null,
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

    this.mergeLot = this.mergeLot.bind(this);
    //::this.mergeLot;
  }

  componentDidMount() {
    let item = favs.filtered('title = $0', this.props.navigation.state.params.title)[0];
    console.log(item.latitude);
    this.setState({
      cordLatitude: item.latitude,
      cordLongitude: item.longitude,
      address: item.location,
    }, () => {console.log(this.state.cordLatitude + " woye ")});

    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

  mergeLot(){

    this.setState({x: "pos"});
    if (this.state.latitude != null && this.state.longitude!=null && this.state.cordLatitude!=null && this.state.cordLongitude !=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       let concatDest = this.state.cordLatitude +","+ this.state.cordLongitude
       this.setState({
         concat: concatLot,
         concatDest: concatDest
       }, () => {
         this.getDirections(concatLot, concatDest);
       });
     }
    else if (this.state.latitude != null && this.state.longitude!=null)
    {
      let concatLot = this.state.latitude +","+this.state.longitude
      this.setState({
        concat: concatLot
      }, () => {
        this.getDirections(concatLot, "-6.270565,106.759550");
      });
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
           console.log('masuk fungsi')
             this.setState({x: "error"})
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

        {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
                 coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
                 title={"Office Location"}
                 description = {this.state.address}
         />}



       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        }

        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
          coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude},
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
          ]}
          strokeWidth={2}
          strokeColor="red"/>
         }
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
