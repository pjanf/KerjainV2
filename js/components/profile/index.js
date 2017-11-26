import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Thumbnail, List, ListItem, Tabs, Tab, TabHeading, ScrollableTab } from "native-base";

import styles from "./styles";

import PersonalInfo from './personalInfo';
import Education from './education';
import WorkExperience from './workExperience';
import SelfPromotingVideo from './selfPromotingVideo';
import ChangePassword from './changePassword';

const cover = require('../../../img/contacts/sankhadeep.png');

const datas = [
  {
    name: 'Joana Alexander',
    email: 'ariohardi96@gmail.com',
    phone: '087888197099',
    cv: 'myCV.pdf',
  },
];

class MyProfile extends Component {
	// eslint-disable-line

	render() {
		const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor='#189DAE' />			
				<Header style={{ backgroundColor:'#189DAE' }} hasTabs>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button
                                transparent
                                onPress={() => goBack()}
                                >
                                <Icon name="ios-arrow-back" />
                            </Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Profile</Title>
						</View>
					</Left>
				</Header>
					<Image source={cover} style={styles.drawerCover}>
						<View style={styles.overlay}/>
						<Thumbnail large source={cover} style={styles.drawerImage} />
						<Text style={styles.textDrawer1}> Ario Hardi Wibowo </Text>
						<Text style={styles.textDrawer2}> ariohardi96@gmail.com </Text>
					</Image>
			        <Tabs tabBarUnderlineStyle= {{ backgroundColor:'#189DAE' }} renderTabBar={()=> <ScrollableTab />}>
					    <Tab heading="Personal Info"
					      	tabStyle={{ backgroundColor:'#FFF' }}
					      	activeTabStyle = {{ backgroundColor:'#FFF' }}
					      	textStyle = {{ color:'#189DAE', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
					      	activeTextStyle = {{ color:'#189DAE', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
					   	>
					      	<PersonalInfo navigation={this.props.navigation}/>
					    </Tab>
					     	<Tab heading="Education"
					      	tabStyle={{ backgroundColor:'#FFF' }}
					      	activeTabStyle = {{ backgroundColor:'#FFF' }}
					      	textStyle = {{ color:'#189DAE', fontSize:12, fontWeight:'normal', fontFamily:'Arial' }}
					      	activeTextStyle = {{ color:'#189DAE', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
					    >
					    	<Education navigation={this.props.navigation}/>
					     </Tab>
					    <Tab heading="Work Experience"
					      	tabStyle={{ backgroundColor:'#FFF' }}
					      	activeTabStyle = {{ backgroundColor:'#FFF' }}
					      	textStyle = {{ color:'#189DAE', fontSize:12,fontWeight:'normal', fontFamily:'Roboto' }}
					      	activeTextStyle = {{ color:'#189DAE', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
					    >
					      	<WorkExperience navigation={this.props.navigation}/>
					    </Tab>
					    <Tab heading="Self Promoting Video"
					      	tabStyle={{ backgroundColor:'#FFF' }}
					      	activeTabStyle = {{ backgroundColor:'#FFF' }}
					      	textStyle = {{ color:'#189DAE', fontSize:12,fontWeight:'normal', fontFamily:'Roboto' }}
					      	activeTextStyle = {{ color:'#189DAE', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
					    >
					      	<SelfPromotingVideo navigation={this.props.navigation}/>
					    </Tab>
					    <Tab heading="Change Password"
					      	tabStyle={{ backgroundColor:'#FFF' }}
					      	activeTabStyle = {{ backgroundColor:'#FFF' }}
					      	textStyle = {{ color:'#189DAE', fontSize:12,fontWeight:'normal', fontFamily:'Roboto' }}
					      	activeTextStyle = {{ color:'#189DAE', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
					    >
					      	<ChangePassword navigation={this.props.navigation}/>
					    </Tab>
					</Tabs>
			</Container>
		);
	}
}

export default MyProfile;
