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

const JobsPosting7 = {
  name: 'JobsPosting7',
  properties: {
    title:     'string',
    salary: 'string',
    location: 'string',
    description: 'string',
    requirement: 'string'
  }
};

let realm = new Realm({schema: [WorkExperience, JobsPosting7]});

let favs = realm.objects('JobsPosting7')

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

          _deleteItem (title) {
            let itemToDelete = favs.filtered('title = $0', title)
            realm.write(() => {
              realm.delete(itemToDelete)
            })
            this.forceUpdate()
          }

  render() {
    let favorites = _.map(favs, (f, i) => {
      return (
          <Card>
              <CardItem key={i}>
                <View style={{ flex:1, flexDirection:'column' }}>
                    <View style={{ flex:2, flexDirection:'row', marginBottom:10 }}>
                        <Text style={{ flex:1, fontSize:16, fontFamily:'Roboto', color:'#d35400' }}>{f.title}</Text>
                        <TouchableOpacity style={{flex:1, height:28, left:135}}
                          onPress={() => Alert.alert(
                                'Confirmation',
                                'Do you really want to delete?',
                                [
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                {text: 'OK', onPress: () => this._deleteItem(f.title)},
                                ]
                            )}
                          underlayColor='transparent'>
                           <Icon name='md-trash' />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize:12, fontFamily:'Roboto', color:'#a19c9c' }}>Posted: 11 Agustus 2017</Text>
                    <View style={{ flex:1, flexDirection:'row', margin:0, padding:0 }}>
                        <Button button small transparent style={{ height:35, paddingLeft:0 }} onPress={() => this.props.navigation.navigate("ScheduleI")}>
                            <Badge warning>
                                <Text style={{ fontSize:12 }}>1</Text>
                            </Badge>
                            <Text style={{ fontSize:10, paddingLeft:5, color:'#d35400' }}>Unproccesed</Text>
                        </Button>
                        <Button button small transparent style={{paddingLeft: 5, paddingRight:5, height:35 }} onPress={() => this.props.navigation.navigate("ScheduleS")}>
                            <Badge info>
                                <Text style={{ fontSize:12 }} >5</Text>
                            </Badge>
                            <Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Shortlist</Text>
                        </Button>
                        <Button small transparent style={{ height:35  }} onPress={() => this.props.navigation.navigate("Schedule")}>
                            <Badge success>
                                <Text style={{ fontSize:12 }} >6</Text>
                            </Badge>
                            <Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Interview</Text>
                        </Button>
                    </View>
                </View>
            </CardItem>
         </Card>
      )
    })
    return (
            <Container style={styles.container}>
            <Header style={{ backgroundColor:'#d35400' }}>
                <StatusBar barStyle="light-content" backgroundColor='#d35400' />
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate("MenuBarRecruiter")}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body><Title>Testing Page</Title></Body>
            </Header>
            <Content style={{ backgroundColor:'#f0f0f0', padding:10 }}>
            <View>
                <Right>
                    <Button transparent bordered danger style= {{marginLeft : 260, marginBottom : 10}} onPress={() => this.props.navigation.navigate("JobsPostingAdd")}>
                        <Icon name='add' />
                  </Button>
                </Right>
            </View>
            <View>
              {favorites}
            </View>
            </Content>
            </Container>

    )
  }
}