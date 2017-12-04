import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { TabNavigator } from "react-navigation";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Tabs, Tab, TabHeading, List, ListItem, DeckSwiper, Card, CardItem, Thumbnail, Badge } from "native-base";

import styles from "./styles";

import JobAlert from './jobAlert';
import Notification from './notification';


const Realm = require ('realm');

const WorkExperience= {
    name: 'WorkExperience',
    properties: {
    companyName: 'string',
    position: 'string',
    description: 'string'
    }
};

const Education1= {
    name: 'Education1',
    properties: {
    school: 'string',
    degree: 'string',
    major: 'string'
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
    requirement: 'string'
  }
};
let realm = new Realm({schema: [WorkExperience, JobsPosting8, Education1]});

let favs = realm.objects('JobsPosting8');

const dataon = require('../../../img/companyLogo/dataon.jpg');


class Home extends Component {
	// eslint-disable-line
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
            <Card>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('JobDetail', { title:f.title } )}>
                <CardItem key={i}>

                  <View style={{ flex:1, flexDirection:'column' }}>
                      <View style={{ flex:2, flexDirection:'row', marginBottom:10 }}>
                          <Text style={{ flex:1, fontSize:16, fontFamily:'Roboto', color:'#d35400' }}>{f.title}</Text>
                      </View>
                  </View>

              </CardItem>
              </TouchableOpacity>
           </Card>
          )
        })

      return (
        <Container style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor='#189DAE' />
      <Header style={{ backgroundColor:'#189DAE' }} hasTabs>
        <Left>
          <Button
          transparent
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
          <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Kerja.In Talent</Title>
        </Body>
        <Right>
                <Button transparent active badge horizontal onPress={() => this.props.navigation.navigate("Notification")}>
                  <Icon active name="notifications" />
                  <Badge info style = {{height : 20}}><Text style={{fontSize : 12, lineHeight : 14}}>3</Text></Badge>
                </Button>
        </Right>
      </Header>

      <Content style={{backgroundColor : '#E0E0E0'}}>
          <View style={{height : 500}}>
            <View style={{flexDirection : 'row', marginBottom : 20, marginTop : 20}}>
              <Text style={{color : '#189DAE', fontSize : 18}}> Trending Jobs </Text>
              <Right>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("JobSearch")}>
                  <Icon name="search" style={{marginRight : 30, color : '#189DAE'}}/>
                </TouchableOpacity>
              </Right>
            </View>
          </View>
      </Content>
      <Content>
        <View>
          {favorites}
        </View>
      </Content>
    </Container>

      )
    }
  }

export default Home;
