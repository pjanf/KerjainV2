import React, { Component } from "react";
import { Image, View, StatusBar, TextInput, TouchableOpacity} from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card } from "native-base";

import styles from "./styles";

import DatePicker from 'react-native-datepicker'

class Register extends Component {
	// eslint-disable-line

	 constructor(props) {
	    super(props);
	    this.state = {    
	      	description: '',
	      	dateJoin:'',
      	  	dateLeft:'',
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
					<Title style={{marginTop : 15, marginLeft : 10}}> Work Experience</Title>
					<Right>
						<Title style={{marginLeft : 10}}> STEP 2 of 3</Title>
					</Right>
					
				</Header>
				<Content style={styles.content}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<Card bordered style={{paddingRight : 20, paddingBottom : 10}}>
						<Form>
				            <Item floatingLabel>
				              <Label>Company Name </Label>
				              <Input />
				            </Item>
				            <Item floatingLabel>
				              <Label>Position</Label>
				              <Input />
				            </Item>
				            <Label style = {{marginTop : 15, marginLeft : 15}}>Working Periode</Label>	
				            <DatePicker
					            style={{width: 300, marginTop : 30, marginLeft : 20}}
					            date={this.state.dateJoin}
					            mode="date"
					            placeholder="Since"
					            format="YYYY-MM-DD"
					            minDate="2010-05-01"
					            maxDate="2030-06-01"
					            confirmBtnText="Confirm"
					            cancelBtnText="Cancel"
					            onDateChange={(date) => {this.setState({dateJoin: date})}}
					          />
					          <DatePicker
					            style={{width: 300, marginTop : 30, marginLeft : 20}}
					            date={this.state.dateLeft}
					            mode="date"
					            placeholder="Until"
					            format="YYYY-MM-DD"
					            minDate="2010-05-01"
					            maxDate="2030-06-01"
					            confirmBtnText="Confirm"
					            cancelBtnText="Cancel"
					            onDateChange={(date) => {this.setState({dateLeft: date})}}
					          />
				            <Label style = {{marginTop : 15, marginLeft : 15}}>Job Description</Label>
				            <TextInput
				            	style = {{marginLeft : 13}}
					            multiline = {true}
					            numberOfLines = {4}
					            onChangeText={(description) => this.setState({description})}
					            value={this.state.description}
					            editable = {true} 
					        />		            
				        </Form>
				    </Card>
		        	<Button rounded info style={{marginTop : 10, marginBottom : 20, alignSelf : 'center', height : 50}}
		        		onPress={() => this.props.navigation.navigate("WorkExperience")} >
		        		<Text>             Save             </Text>
		        	</Button>
				</Content>
			</Container>
		);
	}
}

export default Register;
