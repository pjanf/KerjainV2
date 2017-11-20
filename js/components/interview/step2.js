import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon } from "native-base";
import Orientation from 'react-native-orientation';
import styles from "./styles";

const imageQuestion = require("../../../img/success.png");

class InterviewStep2 extends Component {
	render() {
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#189DAE' }}>
					<Left>
						<Button
						transparent
						onPress={() => this.props.navigation.navigate("History")}
						>
						<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Finish</Title>
					</Body>
				</Header>
				<Content style={styles.content}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<View style={styles.viewContainer}>
						<Image source={imageQuestion} />
						<Text>Congrotulation!!</Text>
						<Text>Intermezo Words</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

export default InterviewStep2;
