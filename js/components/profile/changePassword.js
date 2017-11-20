
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, Item, Input } from 'native-base';

import styles from './styles';

export default class PersonalInfo extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
            <Icon name="lock"/>
            <Text style={{marginLeft : 10, marginTop : 5, color : '#189DAE', fontSize : 17}}>Change Your Password</Text>
          </View>
          <Card bordered>
            <Body>
              <Item floatingLabel style={{marginLeft : 20, marginRight : 20, marginTop : 5}}>
                <Label>Current Password</Label>
                <Input />
              </Item>
            </Body>

            <Body>
              <Item floatingLabel style={{marginLeft : 20, marginRight : 20, marginTop : 5}}>
                <Label>New Password</Label>
                <Input />
              </Item>
            </Body>

            <Body>
              <Item floatingLabel style={{marginLeft : 20, marginRight : 20, marginTop : 5}}>
                <Label>Confirm New Password</Label>
                <Input />
              </Item>
            </Body>
          
            <Button rounded info style={{marginTop : 10, marginBottom : 10,  alignSelf : 'center', height : 40}}
                onPress={() => goBack()}
                >
                <Text>             Submit             </Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}
