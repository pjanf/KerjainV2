
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity, ScrollView, TextInput, TouchableHighlight } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, Form, Input, Item } from 'native-base';

import DatePicker from 'react-native-datepicker'

import styles from './style';

const Realm = require ('realm');

let realm = new Realm({
  schema: [{name: 'JobsPosting5', properties: {title: 'string', salary: 'string'}}]
})

let favs = realm.objects('JobsPosting5')

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
  /*_updateLocation (location) {
    this.setState({ location })
  }
  _updateDescription (description) {
    this.setState({ description })
  }
  _updateRequirement (requirement) {
    this.setState({ requirement })
  }*/

  _addItem () {
    if (this.state.title === '') return
      realm.write(() => {
      realm.create('JobsPosting5', { title: this.state.title, salary: this.state.salary})
    })
    this.setState({ title: '', salary: ''})
  }

  render () {
    let favorites = _.map(favs, (f, i) => {
      return (
      <View key={i}>
          <Text>{f.title}</Text>
          <Text>{f.salary}</Text>  
      </View>)
    })
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
                        onChangeText={(text) => this._updateTitle(text)}  
                       />
                    </Item>
                    <Item>
                      <Input placeholder = "Location" style={{fontSize:13}} 
                        value={this.state.location}
                        onChangeText={(text) => this._updateTitle(text)}  
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
          <View>
            <Text>FAVORITES</Text>
            {favorites}
          </View>
        </Content>
      </Container>
    ) 
    /*return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{ backgroundColor:'#f0f0f0', padding:10 }}>
              <Card>
                <CardItem>
                  <Form>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Position Title</Label>
                      <TextInput 
                        value={this.state.title}
                        onChangeText={(text) => this._updateTitle(text)}
                       style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Salary</Label>
                      <TextInput 
                        value={this.state.salary}
                        onChangeText={(text) => this._updateSalary(text)}
                       style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Location</Label>
                      <TextInput 
                        value={this.state.location}
                        onChangeText={(text) => this._updateLocation(text)}
                       style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Job Description</Label>
                      <TextInput 
                        value={this.state.description}
                        onChangeText={(text) => this._updateDescription(text)}
                       style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Requirement</Label>
                      <TextInput 
                        value={this.state.requirement}
                        onChangeText={(text) => this._updateRequirement(text)}
                       style={styles.inputLabel}/>
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
                    <Text>LIHAT TTGAN</Text>
                  </Button>
              </Card> 
            </View>
            <View>
              <Text>FAVORITES</Text>
              {favorites}
            </View>
        </Content>
      </Container>
    ) */
  }
}
