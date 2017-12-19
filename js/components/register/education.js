import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity, Alert } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, List, Card, CardItem } from "native-base";

import styles from "./styles";

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

let favs = realm.objects('Education4')

class Register extends Component {
	// eslint-disable-line

    _deleteItem (school) {
        let itemToDelete = favs.filtered('school = $0', school)
        realm.write(() => {
          realm.delete(itemToDelete)
        })
        this.forceUpdate()
    }

	render() {
		const {goBack} = this.props.navigation;
		let favorites = _.map(favs, (f, i) => {
            return (
                <Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10, paddingBottom : 10}}>
                    <CardItem key={i} style={{marginTop : 5, marginBottom : 5, paddingTop : 10}}>
                        <Body>
                            <View style={{flexDirection : 'row', flex : 6}}>
                                <TouchableOpacity transparent style={{flex : 5}}>
                                  <Text style={{fontSize: 18, color : 'blue'}}>{f.school}</Text>
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
                                <Text style={{marginTop : 5}}>{f.graduation}</Text>

                                <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Degree</Text>
                                <Text style={{marginTop : 5}}>{f.degree}</Text>

                                <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Major</Text>
                                <Text style={{marginTop : 5}}>{f.major}</Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            )
		})
		return (
            <Container style={styles.container}>
            <Header style={{ backgroundColor:'#189DAE' }}>
                <Button
                    transparent
                    onPress={() => goBack()}
                    >
                    <Icon name="ios-arrow-back" />
                </Button>
                <Title style={{marginTop : 15, marginLeft : 10}}>Education</Title>
                <Right>
                    <Title style={{marginLeft : 10}}> STEP 3 of 3</Title>
                </Right>
            </Header>
            <Content style={{ backgroundColor:'#f0f0f0', padding:10 }}>
            <View>
                <Right>
                    <Button iconLeft info onPress={() => this.props.navigation.navigate("EducationAdd")} style={{marginLeft : 220}}>
                        <Icon active name="add" style={{color : 'white'}}/>
                        <Text>Add</Text>
                    </Button>
                </Right>
            </View>
            <View>
              {favorites}
            </View>
            <Button rounded info style={{marginTop : 10, marginBottom : 20, alignSelf : 'center', height : 50}}
                onPress={() => this.props.navigation.navigate("Home")}>
                <Text>Finish</Text>
            </Button>
            </Content>
            </Container>
        );
	}
}
export default Register;
