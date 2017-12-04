import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Thumbnail, List, ListItem } from "native-base";

import styles from "./styles";

const cover = require('../../../img/contacts/sankhadeep.png');

const Realm = require ('realm');

const WorkExperience= {
    name: 'WorkExperience',
    properties: {
    companyName: 'string',
    position: 'string',
    description: 'string'
    }
};

const Education1= {
    name: 'Education1',
    properties: {
    school: 'string',
    degree: 'string',
    major: 'string'
    }
};

const JobsPosting8 = {
  name: 'JobsPosting8',
  properties: {
    title:     'string',
    salary: 'string',
    location: 'string',
    latitude: 'double',
    longitude:'double',
    description: 'string',
    requirement: 'string'
  }
};
let realm = new Realm({schema: [WorkExperience, JobsPosting8, Education1]});

let favs = realm.objects('JobsPosting8');

class MyProfile extends Component {
	// eslint-disable-line

	render() {
		const {goBack} = this.props.navigation;
		let item = favs.filtered('title = $0', this.props.navigation.state.params.title)[0];
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#189DAE' }}>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button
								transparent
								onPress={() => goBack()}
								>
								<Icon name="ios-arrow-back" />
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Job Detail</Title>
						</View>
					</Left>
				</Header>
				<Content style={styles.container}>
					<View style={{flexDirection: 'column', paddingTop : 10, marginBottom : 20, paddingLeft : 10, paddingRight : 10}}>
			            <Text style={{fontSize : 20, color : '#189DAE', marginTop : 10}}> Software Developer </Text>
			            <ListItem noBorder>
				            <View style={{flexDirection: 'row'}}>
				              	<Icon active name="briefcase"/>
				              	<Body>
				              	<View style={{flexDirection: 'column', marginLeft : 10}}>
				              		<Text style={{fontSize : 13, color : 'grey'}}>Job Position</Text>
						            <Text>{item.title}</Text>
				              	</View>
				              	</Body>
				            </View>
				        </ListItem>
				        <ListItem noBorder>
				            <View style={{flexDirection: 'row'}}>
				              	<Icon active name="home"/>
				              	<Body>
				              	<View style={{flexDirection: 'column', marginLeft : 10}}>
												<Text style={{fontSize : 13, color : 'grey'}}>Location</Text>
												<TouchableOpacity onPress={() => this.props.navigation.navigate("LocationA", { title: item.title } )}>
												<Text style={{marginTop : 5}}>
															{item.location}
												</Text>
												</TouchableOpacity>

				              	</View>
				              	</Body>
				            </View>
				        </ListItem>
				        <ListItem noBorder>
				            <View style={{flexDirection: 'row'}}>
				              	<Icon active name="cash"/>
				              	<Body>
				              	<View style={{flexDirection: 'column', marginLeft : 10}}>
				              		<Text style={{fontSize : 13, color : 'grey'}}>Salary</Text>
						            <Text>{item.salary}</Text>
				              	</View>
				              	</Body>
				            </View>
				        </ListItem>
				        <ListItem noBorder>
				            <View style={{flexDirection: 'row'}}>
				              	<Icon active name="paper"/>
				              	<Body>
				              	<View style={{flexDirection: 'column', marginLeft : 10}}>
				              		<Text style={{fontSize : 13, color : 'grey'}}>Experience Required</Text>
						            <Text>Min 1 Year Staff</Text>
				              	</View>
				              	</Body>
				            </View>
				        </ListItem>
				    </View>
		            <View style={{ marginBottom : 20, paddingLeft : 10, paddingRight : 10}}>
			            <View style={{flexDirection: 'column', backgroundColor: 'white'}}>
			                <ListItem itemDivider style={{marginTop : 5}}>
			                  <Text style={{color : '#189DAE', fontSize : 20}}>Job Description</Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                   {item.description}
			                  </Text>
			                </ListItem>


			                <ListItem itemDivider>
			                  <Text style={{color : '#189DAE', fontSize : 20}}>Requirement</Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                   {item.requirement}
			                  </Text>
			                </ListItem>

			            </View>
		        	</View>
			        <Button rounded info style={{marginTop : 15, marginBottom : 20, alignSelf : 'center', height : 50}}
			        	onPress={() => this.props.navigation.navigate("Home")} >
			        	<Text>             Apply             </Text>
			        </Button>
				</Content>
			</Container>
		);
	}
}

export default MyProfile;
