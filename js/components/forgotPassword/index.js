import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, Card } from "native-base";

import styles from "./styles";

class Register extends Component {
	// eslint-disable-line

	render() {
		const {goBack} = this.props.navigation;
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
						<Title> Kerja.In Talent</Title>
					</Body>
				</Header>
				<Content style={styles.content}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<Card bordered style={{paddingRight : 10, paddingBottom : 10}}>
						<View style={{alignItems : 'center'}}>
							<Text style={{fontSize : 20, marginTop : 10}}>Forgot Your Password? </Text>
						</View>
						<View style={{marginRight : 10, marginLeft : 20}}>
							<Text style={{marginTop : 20, marginBottom : 10, fontSize : 14}}>Enter your email address and we'll send you a link so you can reset your password </Text>
					    	<Item rounded>
					        	<Input placeholder='Email address'/>
					        </Item>
					    </View>
				    	<Button rounded info style={{marginTop : 40, alignSelf : 'center', height : 50}}
		        		onPress={() => goBack()}
			        	>
			        		<Text>             Submit             </Text>
			        	</Button>
				    </Card>

				</Content>
			</Container>
		);
	}
}

export default Register;
