
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity, ScrollView, TextInput, TouchableHighlight } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, Form, Input, Item } from 'native-base';

import DatePicker from 'react-native-datepicker'
import RNGooglePlaces from 'react-native-google-places';

import styles from './style';

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

let favs = realm.objects('JobsPosting8')

export default class PersonalInfo extends Component { // eslint-disable-line

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
        latitude:'',
        longitude:'',
    };
  }

  _updateTitle (title) {
    this.setState({ title })
  }
  _updateSalary (salary) {
    this.setState({ salary })
  }


  _updateDescription (description) {
    this.setState({ description })
  }
  _updateRequirement (requirement) {
    this.setState({ requirement })
  }

  _addItem () {
    if (this.state.title === '') return
      realm.write(() => {
      realm.create('JobsPosting8', { title: this.state.title, salary: this.state.salary, location: this.state.location,
        latitude: this.state.latitude, longitude: this.state.longitude, description: this.state.description, requirement:this.state.requirement})
    })
    this.setState({ title: '', salary: '', location: '', description: '', requirement: ''}),
    this.props.navigation.navigate("JobsPosting")
  }

  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal({

	  latitude: 53.544389,
	  longitude: -113.490927,
	  radius: 0.01
    })
    .then((place) => {
      console.log(place);
  		this.setState({
        latitude: place.latitude,
        longitude: place.longitude,
        location: place.address
      })
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }


  render () {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{ backgroundColor:'#f0f0f0', padding:10 }}>
            <Card>
              <CardItem>
                <Form>
                    <Item>
                      <Input placeholder = "Job's  Title" style={{fontSize:13}}
                        value={this.state.title}
                        onChangeText={(text) => this._updateTitle(text)}
                       />
                    </Item>
                    <Item>
                      <Input placeholder = "Salary" style={{fontSize:13}}
                        value={this.state.salary}
                        onChangeText={(text) => this._updateSalary(text)}
                       />
                    </Item>
                    <Item>

                    <TouchableOpacity
                      onPress={() => this.openSearchModal()}
                    >
                      <Text style={{ fontSize:12, marginTop:20, marginLeft : 6 }}>Location</Text>
                      <Text style={{ fontSize:14, marginTop:10, marginLeft : 10 }}> {this.state.location} </Text>
                    </TouchableOpacity>

                    </Item>
                    <Item>
                      <Input placeholder = "Description" style={{fontSize:13}}
                        value={this.state.description}
                        onChangeText={(text) => this._updateDescription(text)}
                       />
                    </Item>
                    <Item>
                      <Input placeholder = "Requirement" style={{fontSize:13}}
                        value={this.state.requirement}
                        onChangeText={(text) => this._updateRequirement(text)}
                       />
                    </Item>
                    <Text style={{ fontSize:12, marginTop:20, marginLeft : 20 }}>Date Closed</Text>
                    <DatePicker
                      style={{width: 300, marginTop : 5, marginLeft : 20, marginRight : 10}}
                      date={this.state.postjobs}
                      mode="date"
                      placeholder="Date Closed"
                      format="YYYY-MM-DD"
                      minDate="2010-05-01"
                      maxDate="2030-06-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      onDateChange={(date) => {this.setState({postjobs: date})}}
                    />
                  </Form>
              </CardItem>

            </Card>
            <Button rounded style={{alignSelf: 'center',
                marginTop:20, marginBottom:20, backgroundColor:'#d35400' }}  onPress={() => this._addItem()}>
                <Text>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}
