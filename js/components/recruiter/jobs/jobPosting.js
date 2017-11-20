
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, Form, Input, Item } from 'native-base';

import DatePicker from 'react-native-datepicker'

import styles from './style';


export default class PersonalInfo extends Component { // eslint-disable-line

  constructor(props) {
    super(props);
    this.state = {    
        postjobs:'',
    };
    } 

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{ backgroundColor:'#f0f0f0', padding:10 }}>
              <Card>
                <CardItem>
                  <Form>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Position Title</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Salary</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Location</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Job Desciption</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel style={{marginRight : 30}}>
                      <Label style={styles.textLabel}>Requirement</Label>
                      <Input style={styles.inputLabel}/>
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
                  marginTop:20, marginBottom:20, backgroundColor:'#d35400' }} onPress={() => this.props.navigation.navigate("Jobs")}>
                    <Text>Save Jobs</Text>
                  </Button>
              </Card> 
            </View>
        </Content>
      </Container>
    );
  }
}
