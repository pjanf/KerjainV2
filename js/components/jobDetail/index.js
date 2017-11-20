import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Thumbnail, List, ListItem } from "native-base";

import styles from "./styles";

const cover = require('../../../img/contacts/sankhadeep.png');

class MyProfile extends Component {
	// eslint-disable-line

	render() {
		const {goBack} = this.props.navigation;
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
						            <Text>Software Developer</Text>
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
						            <Text>Tangerang Selatan - Bintaro</Text>
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
						            <Text>Above Expected Salary</Text>
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
			                    1. Confirms project requirements by reviewing program objective, input data, and output 
			                    requirements with analyst, supervisor, and client.
			                  </Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                    2. Program the computer by entering coded information.
			                  </Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                    3. Confirms program operation by conducting tests; modifying program sequences and/or codes
			                  </Text>
			                </ListItem>

			                <ListItem itemDivider>
			                  <Text style={{color : '#189DAE', fontSize : 20}}>Skill Requirement</Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                    1. Have programming skill in Java.
			                  </Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                    2. Have knowledge in object-oriented programming.
			                  </Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                    3. Have knowledge in databases such as MYSQL, SQL Server, Oracle, PostgreSQL.
			                  </Text>
			                </ListItem>
			                <ListItem noBorder>
			                  <Text>
			                    4. Have knowledge in HTML, JavaScript, CSS.
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
