import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, List, Card, CardItem } from "native-base";

import styles from "./styles";

const datas = [
  {
    jobTitle: 'Software Developer',
    location: 'PT Traveloka',
    time: '24 Jan 2014 - 24 Jan 2017',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    jobTitle: 'Software Developer',
    location: 'PT AnaBatik',
    time: '24 Jan 2010 - 24 Jan 2014',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

class Register extends Component {
	// eslint-disable-line

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
					<Right>
						<Button iconLeft info onPress={() => this.props.navigation.navigate("WorkExperienceAdd")} style={{marginLeft : 220}}>
							<Icon active name="add" style={{color : 'white'}}/>
							<Text>Add</Text>
						</Button>
					</Right>
					<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10, paddingBottom : 10}}>
			         	<List dataArray={datas} renderRow={data =>
				          	<CardItem style={{marginTop : 5, marginBottom : 5, paddingTop : 10}}>
				           	 	<Body>
				           	 		<View style={{flexDirection : 'row', flex : 6}}>
						           	  	<TouchableOpacity transparent style={{flex : 5}}>	
							              <Text style={{fontSize: 18, color : 'blue'}}>{data.location}</Text>
							            </TouchableOpacity>
								        <Right>
								        	<TouchableOpacity>
								        		 <Icon active name="remove-circle" style={{flex : 1, color : 'blue'}} />
								        	</TouchableOpacity>
								        </Right>
						            </View>
						            <View>
							            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Working Periode</Text>
							            <Text style={{marginTop : 5}}>{data.time}</Text>

							            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Position</Text>
							            <Text style={{marginTop : 5}}>{data.jobTitle}</Text>

							            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Job Description</Text>
							            <Text style={{marginTop : 5}}>{data.jobdesc}</Text>
							        </View>
				           		</Body>
				          	</CardItem>
				          }
				        />
				    </Card>
			        <Button rounded info style={{marginTop : 10, marginBottom : 20, alignSelf : 'center', height : 50}}
			        		onPress={() => this.props.navigation.navigate("Education")}
			        	>
			        		<Text>             Next             </Text>
			        	</Button>
				</Content>
			</Container>
		);
	}
}

export default Register;
