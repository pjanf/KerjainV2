import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity  } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card } from "native-base";

import styles from "./styles";

import DatePicker from 'react-native-datepicker'

class Register extends Component {
	// eslint-disable-line

	constructor(props) {
	    super(props);
	    this.state = {    
	      	graduation:'',
	    };
	  }

	render() {
		const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#189DAE' }}>
					<Button
						transparent
						onPress={() => goBack()}
						>
						<Icon name="ios-arrow-back" />
					</Button>
					<Title style={{marginTop : 15, marginLeft : 10}}> Education</Title>
					<Right>
						<Title style={{marginLeft : 10}}> STEP 3 of 3</Title>
					</Right>
					
				</Header>
				<Content style={styles.content}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<Card bordered style={{ paddingRight : 20, paddingBottom : 10, paddingBottom : 20}}>
						<Form>
				            <Item floatingLabel>
				              <Label>School </Label>
				              <Input />
				            </Item>
				            <Item floatingLabel style={{marginTop : 50}}>
				              <Label>Degree</Label>
				              <Input />
				            </Item>
				            <Item floatingLabel style={{marginTop : 50}}>
				              <Label>Major</Label>
				              <Input />
				            </Item>
				            <DatePicker
					            style={{width: 300, marginTop : 50, marginLeft : 20}}
					            date={this.state.graduation}
					            mode="date"
					            placeholder="Graduation"
					            format="YYYY-MM-DD"
					            minDate="2010-05-01"
					            maxDate="2030-06-01"
					            confirmBtnText="Confirm"
					            cancelBtnText="Cancel"
					            onDateChange={(date) => {this.setState({graduation: date})}}
					          />
				        </Form>
				    </Card>
		        	<Button rounded info style={{marginTop : 40, alignSelf : 'center', height : 50}}
		        		onPress={() => this.props.navigation.navigate("Education")}>
		        		<Text>             Save             </Text>
		        	</Button>
				</Content>
			</Container>
		);
	}
}

export default Register;
