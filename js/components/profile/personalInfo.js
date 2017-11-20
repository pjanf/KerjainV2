
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label } from 'native-base';

import styles from './styles';

const datas = [
  {
    name: 'Joana Alexander',
    email: 'ariohardi96@gmail.com',
    phone: '087888197099',
    cv: 'myCV.pdf',
  },
];


export default class PersonalInfo extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
            <Icon name="person"/>
            <Text style={{marginLeft : 10, marginTop : 5, color : '#189DAE', fontSize : 17}}>Personal Info</Text>
            <Right>
              <TouchableOpacity>
                <Icon name="create" style={{color : '#189DAE', marginRight : 10}}/>
              </TouchableOpacity>
            </Right>
          </View>
          <Card bordered>
            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#189DAE', paddingRight : 10}}>Name</Text>
                <Text style={{marginTop : 5}}>Ario Hardi Wibowo</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#189DAE', paddingRight : 10}}>Email</Text>
                <Text style={{marginTop : 5}}>ariohardi96@gmail.com</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#189DAE', paddingRight : 10}}>Phone</Text>
                <Text style={{marginTop : 5}}>087888197099</Text>
              </Body>
            </ListItem>

            <CardItem>
              <Body>
                <Text style={{fontSize : 15, color : '#189DAE', marginLeft : 15, paddingRight : 10}}>CV</Text>
                <View style={{flexDirection : 'row'}}>
                  <Text style={{marginTop : 5, marginLeft : 15}}>myCV.pdf</Text>
                  <Right>
                    <Icon name="cloud-download" style={{color : 'blue'}}/>
                  </Right>
                </View>
              </Body>
            </CardItem>

            
          </Card>
        </Content>
      </Container>
    );
  }
}
