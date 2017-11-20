
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, Form, Input, Item } from 'native-base';

import styles from './style';


export default class PersonalInfo extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{ backgroundColor:'#f0f0f0', padding:10 }}>
            <Card>
              <CardItem>
                <View style={{ flex:1, flexDirection:'column' }}>
                  <Form>
                    <Item floatingLabel>
                      <Label style={styles.textLabel}>Question 1</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel>
                      <Label style={styles.textLabel}>Question 2</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel>
                      <Label style={styles.textLabel}>Question 3</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel>
                      <Label style={styles.textLabel}>Question 4</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                    <Item floatingLabel>
                      <Label style={styles.textLabel}>Question 5</Label>
                      <Input style={styles.inputLabel}/>
                    </Item>
                  </Form>
                </View>
              </CardItem>
            </Card> 
          </View>
        </Content>
      </Container>
    );
  }
}
