import React, { Component } from "react";
import { Image, View, StatusBar, TextInput, TouchableOpacity, ListView} from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card, List } from "native-base";

import styles from "./styles";

import DatePicker from 'react-native-datepicker'

const datas = [
  'You are rejected from PT BukaLapak',
  'You are invited to do interview with PT DataOn',
  'Your job application request in PT DataOn still in progress',
];

class Register extends Component {
  // eslint-disable-line

   constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    const {goBack} = this.props.navigation;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container style={styles.container}>      
        <Header style={{ backgroundColor:'#189DAE' }}>
          <Left>
            <Button
              transparent
              onPress={() => goBack()}
              >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Notification</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
          <StatusBar barStyle="light-content" backgroundColor='#189DAE' />
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data)}>
                    <Icon active name="information-circle" />
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}

export default Register;
