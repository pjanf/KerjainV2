
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity, ScrollView, TextInput, TouchableHighlight } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, Form, Input, Item } from 'native-base';

import DatePicker from 'react-native-datepicker'

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
        requirement: ''
    };
  }

  _updateTitle (title) {
    this.setState({ title })
  }
  _updateSalary (salary) {
    this.setState({ salary })
  }
  _updateLocation (location) {
    this.setState({ location })
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
      realm.create('JobsPosting7', { title: this.state.title, salary: this.state.salary, location: this.state.location,
        description: this.state.description, requirement:this.state.requirement})
    })
    this.setState({ title: '', salary: '', location: '', description: '', requirement: ''}),
    this.props.navigation.navigate("JobsPosting")
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
                      <Input placeholder = "Location" style={{fontSize:13}} 
                        value={this.state.location}
                        onChangeText={(text) => this._updateLocation(text)}
                       />
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
              <Button rounded style={{alignSelf: 'center', 
                marginTop:20, marginBottom:20, backgroundColor:'#d35400' }} onPress={() => this.props.navigation.navigate("JobsPosting")}>
                <Text>Save Jobs</Text>
              </Button>
              <Button rounded style={{alignSelf: 'center', 
                marginTop:20, marginBottom:20, backgroundColor:'#d35400' }}  onPress={() => this._addItem()}>
                <Text>Submit</Text>
              </Button>
              <Button rounded style={{alignSelf: 'center', 
                marginTop:20, marginBottom:20, backgroundColor:'#d35400' }} onPress={() => this.props.navigation.navigate("Tes")}>
                <Text>CUMAN NGETES</Text>
              </Button>
            </Card>
          </View>
        </Content>
      </Container>
    )
  }
}
