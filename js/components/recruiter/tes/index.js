import React, { Component } from 'react';
import { Alert, Image, StatusBar, TouchableOpacity } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  View,
  StyleProvider,
  getTheme,
  variables,
  Thumbnail,
  cover,
  Header,
  Card,
  CardItem,
  Body, Tabs, TabHeading,ScrollableTab, Title, Button, Badge
} from "native-base";

import styles from "./style";

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

let favs = realm.objects('Education1')

const drawerImage = require("../../../../img/companyLogo/dataon.jpg");
const companyImage = require("../../../../img/company/dataon/112116_NBC_1.jpg");

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
            requirement: '',
            companyName: '',
            position: '',
            description: '',
            school: '',
            degree: '',
            major: ''
        };
    }

          _deleteItem (school) {
            let itemToDelete = favs.filtered('school = $0', school)
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
                          <Text style={{fontSize: 18, color : '#189DAE'}}>{f.school}</Text>
                        </TouchableOpacity>
                        <Right>
                            <TouchableOpacity
                                onPress={() => Alert.alert(
                                    'Confirmation',
                                    'Do you really want to delete?',
                                    [
                                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                    {text: 'OK', onPress: () => this._deleteItem(f.school)},
                                    ]
                                )}>
                                     <Icon active name="remove-circle" style={{flex : 1, color : 'blue'}} />
                            </TouchableOpacity>
                        </Right>
                    </View>
                    <View>
                        <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Graduation</Text>
                        <Text style={{marginTop : 5}}>10 Februari 2018</Text>

                        <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Degree</Text>
                        <Text style={{marginTop : 5}}>{f.degree}</Text>

                        <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Major</Text>
                        <Text style={{marginTop : 5}}>{f.major}</Text>
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
                    <Icon name="school"/>
                    <Text style={{marginLeft: 10, marginTop : 5, color : '#189DAE', fontSize : 17}}>Education</Text>
                    <Right>
                      <Button iconLeft info onPress={() => this.props.navigation.navigate("EducationAdd")} style={{marginLeft : 220}}>
                          <Icon active name="add" style={{color : 'white'}}/>
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
