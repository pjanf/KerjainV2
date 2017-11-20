import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Content, Button, Text, 
		 Header, Title, Body, Left, Right, Icon,
		 Tab, Tabs, TabHeading
		} from "native-base";

import styles from "./styles";
import TabOnProcess from './tabOnProcess';
import TabFailed from './tabFailed';

class MyHistory extends Component {
	render() {
		return (
			<Container style={styles.container}>
			<Header style={{ backgroundColor:'#189DAE' }} hasTabs>
			<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
				<Left>
					<Button
					transparent
					onPress={() => this.props.navigation.navigate("DrawerOpen")}
					>
					<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>My History</Title>
				</Body>
			</Header>
			<Tabs tabBarUnderlineStyle= {{ backgroundColor:'#189DAE' }}>
				<Tab heading="On Process"
					tabStyle={{ backgroundColor:'#FFF' }}
					activeTabStyle = {{ backgroundColor:'#FFF' }}
					textStyle = {{ color:'#bab8b6', fontSize:14, fontWeight:'normal', fontFamily:'Roboto' }}
					activeTextStyle = {{ color:'#189DAE', fontSize:14, fontWeight:'normal', fontFamily:'Roboto' }}
					>
					<TabOnProcess navigation={this.props.navigation} />
				</Tab>
				<Tab heading="Finished"
					tabStyle={{ backgroundColor:'#FFF' }}
					activeTabStyle = {{ backgroundColor:'#FFF' }}
					textStyle = {{ color:'#bab8b6', fontSize:14, fontWeight:'normal', fontFamily:'Arial' }}
					activeTextStyle = {{ color:'#189DAE', fontSize:14, fontWeight:'normal', fontFamily:'Roboto' }}
					>
					<TabFailed navigation={this.props.navigation} />
				</Tab>
			</Tabs>

		</Container>
		);
	}
}

export default MyHistory;
