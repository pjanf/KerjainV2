
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label } from 'native-base';

import styles from './style';


export default class PersonalInfo extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
            <Icon name="people"/>
            <Text style={{marginLeft : 10, marginTop : 5, color : '#d35400', fontSize : 17}}>Company Detail</Text>
            <Right>
              <TouchableOpacity>
                <Icon name="create" style={{color : '#d35400', marginRight : 10}}/>
              </TouchableOpacity>
            </Right>
          </View>
          <Card bordered>
            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Name of Company</Text>
                <Text style={{marginTop : 5}}>DataOn</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Website</Text>
                <Text style={{marginTop : 5}}>dataon.com</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>

                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Location</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("LocationA")}>
                <Text style={{marginTop : 5}}>
                      Bintaro, Tangerang Selatan
                </Text>
    						</TouchableOpacity>

              </Body>
            </ListItem>


            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Telephone</Text>
                <Text style={{marginTop : 5}}>089637793222</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Office Hours</Text>
                <Text style={{marginTop : 5}}>09:00 - 17:00</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Company Size</Text>
                <Text style={{marginTop : 5}}>200 - 500</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Language</Text>
                <Text style={{marginTop : 5}}>English</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Industry</Text>
                <Text style={{marginTop : 5}}>IT</Text>
              </Body>
            </ListItem>

          </Card>
        </Content>
      </Container>
    );
  }
}
