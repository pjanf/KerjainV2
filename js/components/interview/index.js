import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon } from "native-base";
import Orientation from 'react-native-orientation';
import styles from "./styles";

class Interview extends Component {
	render() {
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#189DAE' }}>
					<Left>
						<Button
						transparent
						onPress={() => this.props.navigation.goBack()}
						>
						<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Announcement</Title>
					</Body>
				</Header>
				<Content style={styles.content}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<View style={styles.viewContainer}>
						<Text>Prepare your word</Text>
						<Text>Click record to finish the video</Text>
						<Text>Intermezo Words</Text>
						<Button rounded iconLeft style={styles.buttonContainer} danger 
							onPress={() => {
								Orientation.lockToLandscape()
								this.props.navigation.navigate("InterviewStep1")
							}}>
							<Icon name='play' />
							<Text>Start Interview</Text>
					    </Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Interview;
