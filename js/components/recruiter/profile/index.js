import React, { Component } from "react";
import { Image, View, StatusBar, Platform } from "react-native";
import { Container, Item, Label, Input, Textarea,Content, Button, Text, Header, Picker, Title, Body, Left, Right, Icon, Thumbnail, List, ListItem, Form, Tab, Tabs, ScrollableTab } from "native-base";
import styles from "./style";

import CompanyDetail from './companyDetail';
import CompanyVideo from './companyVideo';

const drawerCover = require("../../../../img/company/dataon/112116_NBC_1.jpg");

class MyProfile extends Component {
	
	render() {
		const { goBack } = this.props.navigation;
		return (
			<Container style={styles.container} backgroundColor='#ffffff' >
				<Header style={{ backgroundColor: '#d35400' }}>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate("MenuBarRecruiter")}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body><Title>Company</Title></Body>
				</Header>
				<View>
					<Image source={drawerCover} style={styles.drawerCover}></Image>
				</View>

				<Tabs tabBarUnderlineStyle= {{ backgroundColor:'#d35400' }} renderTabBar={()=> <ScrollableTab />}>
				    <Tab heading="Company Detail"
				      	tabStyle={{ backgroundColor:'#FFF' }}
				      	activeTabStyle = {{ backgroundColor:'#FFF' }}
				      	textStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
				      	activeTextStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
				   	>
				      	<CompanyDetail navigation={this.props.navigation}/>
				    </Tab>
				    <Tab heading="Company Video"
				      	tabStyle={{ backgroundColor:'#FFF' }}
				      	activeTabStyle = {{ backgroundColor:'#FFF' }}
				      	textStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Arial' }}
				      	activeTextStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
				    >
				    	<CompanyVideo navigation={this.props.navigation}/>
				    </Tab>
				</Tabs>
			</Container>
		);
	}
}
export default MyProfile;