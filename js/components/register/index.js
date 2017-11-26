import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card } from "native-base";

import styles from "./styles";

class Register extends Component {
	// eslint-disable-line

	render() {
		//const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#189DAE' }}>
					<Title style={{marginTop : 15, marginLeft : 10}}> Personal Info</Title>
					<Right>
						<Title style={{marginLeft : 10}}> STEP 1 of 3</Title>
					</Right>
					
				</Header>
				<Content style={styles.content}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<Card bordered style={{paddingRight : 10, paddingBottom : 10}}>
						<Form>
				            <Item floatingLabel>
				              <Label>Name </Label>
				              <Input />
				            </Item>
				            <Item floatingLabel>
				              <Label>Email</Label>
				              <Input />
				            </Item>
				            <Item floatingLabel>
				              <Label>Phone</Label>
				              <Input />
				            </Item>
				            <ListItem>
				            	<Body>
						            <Label style={{fontSize : 15}}>Upload Photo</Label>
						            <Text style={{marginTop : 10}}>myPhoto.jpg</Text>
					            </Body>
					            <Right>
					              <TouchableOpacity>
					                <Icon active name="cloud-upload" style={{color : 'blue'}}/>
					              </TouchableOpacity>
					            </Right>
					         </ListItem>
				            <ListItem noBorder style={{marginBottom : 20}}>
				            	<Body>
						            <Label style={{fontSize : 15}}>Upload CV</Label>
						            <Text style={{marginTop : 10}}>myCV.pdf</Text>
					            </Body>
					            <Right>
					              <TouchableOpacity>
					                <Icon active name="cloud-upload" style={{color : 'blue'}}/>
					              </TouchableOpacity>
					            </Right>
					         </ListItem>
				        </Form>
				    </Card>
		        	<Button rounded info style={{marginTop : 40, alignSelf : 'center', height : 50}}
		        		onPress={() => this.props.navigation.navigate("WorkExperience")}
		        	>
		        		<Text>             Next             </Text>
		        	</Button>
				</Content>
			</Container>
		);
	}
}

export default Register;
