import React, { Component } from 'react';
import { Image, StatusBar, TouchableOpacity } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Button,
  View,
  StyleProvider,
  getTheme,
  variables,
  Thumbnail,
  cover,
  Header,
  Body, Tabs, TabHeading,ScrollableTab, Title
} from "native-base";

import styles from "./style";

const Realm = require ('realm');

let realm = new Realm({
    schema: [{name: 'JobsPosting6', properties: {title: 'string', salary: 'string', title: 'string', location: 'string', description: 'string', requirement: 'string'}}]
  })

let favs = realm.objects('JobsPosting6')

const drawerImage = require("../../../../img/companyLogo/dataon.jpg");
const companyImage = require("../../../../img/company/dataon/112116_NBC_1.jpg");

export default class Tes extends Component {
  constructor(props) {
    super(props);
    this.state = {    
        postjobs:'',
        realm: null,
        title: '',
        salary: '',
        location: '',
        description: '',
        requirement: ''
    };
  }
  render() {
    let favorites = _.map(favs, (f, i) => {
      return (
      <View key={i}>  
          <Text>{f.title}</Text> 
          <Text>{f.salary}</Text> 
          <Text>&times;</Text>
      </View>)
    }) 
    return ( 
    <View>
      {favorites}
    </View>)
  }
}