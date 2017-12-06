import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { TabNavigator } from "react-navigation";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Tabs, Tab, TabHeading, List, ListItem, DeckSwiper, Card, CardItem, Thumbnail, Badge } from "native-base";

import styles from "./styles";

import JobAlert from './jobAlert';
import Notification from './notification';

const dataon = require('../../../img/companyLogo/dataon.jpg');

const Realm = require ('realm');

const WorkExperience= {
    name: 'WorkExperience',
    properties: {
    companyName: 'string',
    position: 'string',
    description: 'string'
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

let realm = new Realm({schema: [WorkExperience, JobsPosting8, Education4]});

let favs = realm.objects('JobsPosting8');


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
            <View style={{height : 500}}>
                <View style={{flexDirection : 'row', marginBottom : 20, marginTop : 20}}>
                  <Text style={{color : '#189DAE', fontSize : 18}}> Trending Jobs </Text>
                  <Right>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("JobSearch")}>
                      <Icon name="search" style={{marginRight : 30, color : '#189DAE'}}/>
                    </TouchableOpacity>
                  </Right>
                </View>
                <View>
                <DeckSwiper
                    ref={(c) => this._deckSwiper = c}
                    dataSource={favs}
                    renderEmpty={() =>
                      <View style={{ alignSelf: "center" }}>
                        <Text>Over</Text>
                      </View>
                    }
                    renderItem={f =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('JobDetail', { title:f.title } )}>
                      <Card style={{ elevation: 3, marginBottom : 20, marginRight : 20, marginLeft : 20}}>
                        <View style={{alignItems : 'center'}}>
                          <CardItem>

                                <Thumbnail large source={dataon} style={{height : 60, width : 100}} />

                          </CardItem>
                          <CardItem>
                            <View style={{alignItems : 'center'}}>
                                <Text style={{fontSize : 20, color : '#189DAE'}}>PT DataOn Corporation</Text>
                                <View style={{flexDirection : 'row', marginTop: 20}}>
                                  <Icon name="briefcase"/>
                                  <Text>  {f.title}</Text>
                                </View>
                                <View style={{flexDirection : 'row'}}>
                                  <Icon name="cash"/>
                                  <Text>  {f.salary}</Text>
                                </View>
                                <View style={{flexDirection : 'row', marginTop: 20}}>
                                  <Icon name="pin"/>
                                  <Text>  {f.location}</Text>
                                </View>
                            </View>
                          </CardItem>
                          <CardItem style={{backgroundColor : '#ecf0f1'}}>
                            <View style={{flexDirection : 'row', flex : 2, alignItems : 'center'}}>
                              <Button info style={{flex : 1, marginRight : 5, marginLeft : 5}} onPress={() => this._deckSwiper._root.swipeRight()}>
                                <Text style={{fontSize : 12}}> Not Interested</Text>
                              </Button>
                              <Button info style={{flex : 1, marginRight : 5, marginLeft : 5}}>
                                <Text style={{fontSize : 12}}>           Apply</Text>
                              </Button>
                            </View>
                          </CardItem>
                        </View>
                      </Card>
                      </TouchableOpacity>
                    }
                />
                </View>
            </View>
        </Container>
      )
    }
  }

export default Home;
