import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Form, Header, Item, Label, Input, Icon, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenLogo = require("../../../../img/logopanjang.png");

class Login extends Component {
	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<StatusBar backgroundColor="#d35400" barStyle="light-content" />

					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
						<Text style={styles.titleContainer}>Promote - Engage - Recruit</Text>
					</View>
					<View style={{flexDirection : 'row', flex : 4, alignItems : 'center'}}>
					<Button transparent info style={{flex : 0.5}} />
						<Button transparent info style={{flex : 1.5, marginTop: 5, marginRight : 5, marginLeft : 5, marginBottom:5}} onPress={() => this.props.navigation.navigate("Login")} >
							<Text style={{fontSize : 14, color : 'white'}}> Talent</Text>
						</Button>
						<Button transparent info style={{flex : 1.5, marginTop: 5, marginBottom:5, marginRight : 5, marginLeft : 5}} onPress={() => this.props.navigation.navigate("LoginRecruiter")}>
							<Text style={{fontSize : 14, color : 'white', borderBottomColor: 'white', borderBottomWidth:1}}> Recruiter</Text>
						</Button>
						<Button transparent info style={{flex : 0.5}} />
					</View>
					<View style={styles.contentForm}>
						<Form>
							<Item style={{ borderColor: "#FFF" }}>
								<Icon active name='person' style={{ color:'#FFF', fontSize: 20}}/>
								<Input placeholder='Username or email' style={{ color: '#FFF', fontSize: 15 }} placeholderTextColor="#FFF" />
							</Item>
							<Item style={{ borderColor: "#FFF" }}>
								<Icon active name='unlock' style={{color:'#FFF', fontSize: 20 }} />
								<Input placeholder='Password' secureTextEntry  style={{ color: '#FFF', fontSize: 15 }} placeholderTextColor="#FFF" />
							</Item>
						</Form>

						<TouchableOpacity onPress={()=> {
							alert('Forgot Password')
						}}>
							<Text
								style={{ textAlign: 'right',
									marginTop:10,
									color:'#FFF',
									fontSize: 12,
									paddingLeft:5 }}>Forgot your password?</Text>
						</TouchableOpacity>

						<Button full rounded style={{
							marginTop: 30,
							marginBottom:25,
							backgroundColor:'#d35400' }}
						onPress={() => this.props.navigation.navigate("Home")}
						>
							<Text>Sign In</Text>
						</Button>
					</View>
					<View style={styles.footer}>
							<Text style={{ textAlign: 'center', color:'#FFF', fontSize: 13  }}>
								Don't have a Kerja.In Talent account?
							</Text>
							<TouchableOpacity onPress={()=> {
								alert('Company Registration')
							}}>
								<Text
									style={{ textAlign: 'center',
										color:'#FFF',
										fontSize: 13,
										paddingLeft:5 }}>Sign Up</Text>
							</TouchableOpacity>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Login;
