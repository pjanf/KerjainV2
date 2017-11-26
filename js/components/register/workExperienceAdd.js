import React, { Component } from "react";
import { Image, View, StatusBar, TextInput, TouchableOpacity} from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card } from "native-base";

import styles from "./styles";

import DatePicker from 'react-native-datepicker'

const Realm = require ('realm');

const WorkExperience= {
    name: 'WorkExperience',
    properties: {
    companyName: 'string',
    position: 'string',
    description: 'string'
    }
};

const JobsPosting7 = {
  name: 'JobsPosting7',
  properties: {
    title:     'string',
    salary: 'string',
    location: 'string',
    description: 'string',
    requirement: 'string'
  }
};

let realm = new Realm({schema: [WorkExperience, JobsPosting7]});

let favs = realm.objects('WorkExperience')

class Register extends Component {
	// eslint-disable-line

	 constructor(props) {
        super(props);
        this.state = {
            dateJoin:'',
            dateLeft:'',
            companyName: '',
            position: '',
            description: ''
        };
	 }

      _updateCompanyName (companyName) {
        this.setState({ companyName })
      }
      _updatePosition (position) {
        this.setState({ position })
      }
      _updateDescription (description) {
        this.setState({ description })
      }

      _addItem () {
        if (this.state.companyName === '') return
          realm.write(() => {
          realm.create('WorkExperience', { companyName: this.state.companyName, position: this.state.position,
            description: this.state.description})
        })
        this.setState({ companyName: '', position: '', description: ''})
        this.props.navigation.navigate("WorkExperience")
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
				            <Item>
                              <Input placeholder = "Company Name" style={{fontSize:17}}
                                value={this.state.companyName}
                                onChangeText={(text) => this._updateCompanyName(text)}
                               />
                            </Item>
				            <Item>
                              <Input placeholder = "Position" style={{fontSize:17}}
                                value={this.state.position}
                                onChangeText={(text) => this._updatePosition(text)}
                               />
                            </Item>
				            <Label style = {{fontSize:16, marginTop : 15, marginLeft : 15}}>Working Periode</Label>
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
                            <Item>
                              <Input placeholder = " Job Description" style={{fontSize:17}}
                                multiline = {true}
                                numberOfLines = {4}
                                value={this.state.description}
                                onChangeText={(text) => this._updateDescription(text)}
                               />
                            </Item>
				        </Form>
				    </Card>
		        	<Button rounded info style={{marginTop : 10, marginBottom : 20, alignSelf : 'center', height : 50}}
		        		onPress={() => this._addItem()} >
		        		<Text>Save</Text>
		        	</Button>
				</Content>
			</Container>
		);


	}
}

export default Register;
