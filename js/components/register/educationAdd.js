import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity  } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card } from "native-base";

import styles from "./styles";

import DatePicker from 'react-native-datepicker'

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

class Register extends Component {
	// eslint-disable-line

	constructor(props) {
        super(props);
        this.state = {
            graduation:'',
            school: '',
            degree: '',
            major: ''
        };
	}

	  _updateSchool (school) {
        this.setState({ school })
      }
      _updateDegree (degree) {
        this.setState({ degree })
      }
      _updateMajor (major) {
        this.setState({ major })
      }

     _addItem () {
         if (this.state.school === '') return
           realm.write(() => {
           realm.create('Education1', { school: this.state.school, degree: this.state.degree,
             major: this.state.major})
         })
         this.setState({ school: '', degree: '', major: ''})
         this.props.navigation.navigate("Education")
     }

	render() {
        const {goBack} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor:'#189DAE' }}>
                    <Button
                        transparent
                        onPress={() => goBack()}
                        >
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title style={{marginTop : 15, marginLeft : 10}}> Education</Title>
                    <Right>
                        <Title style={{marginLeft : 10}}> STEP 3 of 3</Title>
                    </Right>

                </Header>
                <Content style={styles.content}>
                    <StatusBar barStyle="light-content" backgroundColor='#189DAE' />
                    <Card bordered style={{paddingRight : 20, paddingBottom : 10}}>
                        <Form>
                            <Item>
                              <Input placeholder = "School" style={{fontSize:16}}
                                value={this.state.school}
                                onChangeText={(text) => this._updateSchool(text)}
                               />
                            </Item>
                            <Item>
                              <Input placeholder = "Degree" style={{fontSize:16}}
                                value={this.state.degree}
                                onChangeText={(text) => this._updateDegree(text)}
                               />
                            </Item>
                            <Item>
                              <Input placeholder = "Major" style={{fontSize:16}}
                                value={this.state.major}
                                onChangeText={(text) => this._updateMajor(text)}
                               />
                            </Item>
                            <DatePicker
                                style={{width: 300, marginTop : 25, marginLeft : 20}}
                                date={this.state.graduation}
                                mode="date"
                                placeholder="Graduation"
                                format="YYYY-MM-DD"
                                minDate="2010-05-01"
                                maxDate="2030-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {this.setState({graduation: date})}}
                              />
                        </Form>
                    </Card>

                    <Button rounded info style={{marginTop : 20, alignSelf : 'center', height : 50}}
                        onPress={() => this._addItem()}>
                        <Text>             Save             </Text>
                    </Button>
                </Content>
            </Container>
        );
	}
}

export default Register;
