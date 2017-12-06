import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity, Alert } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, List, Card, CardItem } from "native-base";

import styles from "./styles";

const datas = [
  {
    jobTitle: 'Software Developer',
    location: 'PT Traveloka',
    time: '24 Jan 2014 - 24 Jan 2017',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    jobTitle: 'Software Developer',
    location: 'PT AnaBatik',
    time: '24 Jan 2010 - 24 Jan 2014',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const Realm = require ('realm');

const WorkExperience= {
    name: 'WorkExperience',
    properties: {
    companyName: 'string',
    position: 'string',
    description: 'string',
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

class Register extends Component {
	// eslint-disable-line

    _deleteItem (companyName) {
        let itemToDelete = favs.filtered('companyName = $0', companyName)
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
                                  <Text style={{fontSize: 18, color : 'blue'}}>{f.companyName}</Text>
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
                                <Text style={{marginTop : 5}}>24 Jan 2017 - 26 November 2017</Text>

                                <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Position</Text>
                                <Text style={{marginTop : 5}}>{f.position}</Text>

                                <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Job Description</Text>
                                <Text style={{marginTop : 5}}>{f.description}</Text>
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
                <Title style={{marginTop : 15, marginLeft : 10}}> Work Experience</Title>
                <Right>
                    <Title style={{marginLeft : 10}}> STEP 2 of 3</Title>
                </Right>

            </Header>
            <Content style={{ backgroundColor:'#f0f0f0', padding:10 }}>
            <View>
                <Right>
                    <Button iconLeft info onPress={() => this.props.navigation.navigate("WorkExperienceAdd")} style={{marginLeft : 220}}>
                        <Icon active name="add" style={{color : 'white'}}/>
                        <Text>Add</Text>
                    </Button>
                </Right>
            </View>
            <View>
              {favorites}
            </View>
            <Button rounded info style={{marginTop : 10, marginBottom : 20, alignSelf : 'center', height : 50}}
                onPress={() => this.props.navigation.navigate("Education")}>
                <Text>Next</Text>
            </Button>
            </Content>
            </Container>
        );
	}
}
export default Register;
