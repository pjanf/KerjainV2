
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label } from 'native-base';

import styles from './styles';

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

let favs = realm.objects('WorkExperience')

const datas = [
  {
    instituteName: 'Binus University',
    graduation: '22 Sept 2013',
    degree: 'S1',
    major: 'Information Technology',
  },
  {
    instituteName: 'Gunadarma University',
    graduation: '17 Jun 2017',
    degree: 'S2',
    major: 'Information Technology',
  },
];



export default class Education extends Component { // eslint-disable-line

        _deleteItem (companyName) {
            let itemToDelete = favs.filtered('companyName = $0', companyName)
            realm.write(() => {
              realm.delete(itemToDelete)
            })
            this.forceUpdate()
          }

render() { // eslint-disable-line
      let favorites = _.map(favs, (f, i) => {
          return (
            <CardItem key={i} style={{marginTop : 5, marginBottom : 5, paddingBottom : 10}}>
                <Body>
                    <View style={{flexDirection : 'row', flex : 6}}>
                        <TouchableOpacity style={{flex : 5}}>
                          <Text style={{fontSize: 18, color : '#189DAE'}}>{f.companyName}</Text>
                        </TouchableOpacity>
                        <Right>
                            <TouchableOpacity
                                onPress={() => Alert.alert(
                                    'Confirmation',
                                    'Do you really want to delete?',
                                    [
                                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                    {text: 'OK', onPress: () => this._deleteItem(f.companyName)},
                                    ]
                                )}>
                                     <Icon active name="remove-circle" style={{flex : 1, color : 'blue'}} />
                            </TouchableOpacity>
                        </Right>
                    </View>
                    <View>
                        <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Working Periode</Text>
                        <Text style={{marginTop : 5}}>10 Februari 2010 - 10 Februari 2018</Text>

                        <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Position</Text>
                        <Text style={{marginTop : 5}}>{f.position}</Text>

                        <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Job Description</Text>
                        <Text style={{marginTop : 5}}>{f.description}</Text>
                    </View>
                </Body>
            </CardItem>
          )
      })

      return (
      <Container style={styles.container}>
            <Content style={styles.content}>
                <Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10}}>
                <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
                    <Icon name="briefcase"/>
                    <Text style={{marginLeft: 10, marginTop : 5, color : '#189DAE', fontSize : 17}}>Work Experience</Text>
                    <Right>
                      <Button iconLeft info onPress={() => this.props.navigation.navigate("WorkExperienceAdd")}>
                          <Icon name="add" style={{color : '#FFFFFF'}}/>
                      </Button>
                    </Right>
                  </View>
                  <View>
                      {favorites}
                  </View>
                </Card>

            </Content>
        </Container>
      )
    }
}
