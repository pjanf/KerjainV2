import React, { Component } from "react";
import { Image, View, StatusBar, TextInput, TouchableOpacity, Platform} from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card, Picker } from "native-base";

import styles from "./styles";

import DatePicker from 'react-native-datepicker'

class Register extends Component {
	// eslint-disable-line

	constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: [],
      },
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value,
    });
  }


	render() {
		const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#189DAE' }}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<Left>
						<Button
							transparent
							onPress={() => goBack()}
							>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title style={{marginTop : 15, marginLeft : 10}}> Job Search</Title>
					</Body>
				</Header>
				<Content style={styles.content}>
					<Form>
			            <Item>
			              <Input placeholder="Job Title" />
			            </Item>
			            <Item>
			              <Input placeholder="Expected Salary" />
			            </Item>
			            <ListItem icon style={{marginTop : 20}}>
			              <Left>
			                <Button light>
			                  <Icon name="search" />
			                </Button>
			              </Left>
			              <Body>
			                <Text>Select Location</Text>
			              </Body>
			              <Right>
			                <Picker
			                  iosHeader="Select one"
			                  mode="dropdown"
			                  style={{ width:(Platform.OS === 'ios') ? undefined : 120}}
			                  selectedValue={this.state.selected1}
			                  onValueChange={this.onValueChange.bind(this)}>
			                  <Item label="Jakarta" value="key0" />
			                  <Item label="Tangerang" value="key1" />
			                  <Item label="Bandung" value="key2" />
			                  <Item label="Yogyakarta" value="key3" />
			                  <Item label="Surabaya" value="key4" />
			                </Picker>
			              </Right>
			          </ListItem>
		          </Form>
		          <Button block  info style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.navigate("Home")}>
		            <Text>Search</Text>
		          </Button>
				</Content>
			</Container>
		);
	}
}

export default Register;
