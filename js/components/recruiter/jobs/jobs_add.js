import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Card, CardItem, Thumbnail, Container, Picker, InputGroup, Content, Badge, Tab, Tabs, TabHeading, ListItem, Button, Text, Form, Header, Item, Label, Input, Icon, Title, Body, Left, Right } from "native-base";
import styles from "./styles";
import DatePicker from 'react-native-datepicker'


import JobPosting from './jobPosting';
import VideoQuestion from './videoQuestion';

const imgJobMbdev = require("../../../../img/web-cover1.jpg");
const imgJobDesain = require("../../../../img/camera.png");


class JobAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {    
			  postjobs:'',
		};
	  }

	render() {
		const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#d35400' }}>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button transparent onPress={() => goBack()}>
								<Icon name="ios-arrow-back" />
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Add Jobs</Title>
						</View>
					</Left>
				</Header>
		        	<Tabs tabBarUnderlineStyle= {{ backgroundColor:'#d35400' }}>
						<Tab heading="Job Posting"
							tabStyle={{ backgroundColor:'#FFF' }}
							activeTabStyle = {{ backgroundColor:'#FFF' }}
							textStyle = {{ color:'#bab8b6', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
							activeTextStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
						>
							<JobPosting navigation={this.props.navigation}/>
						</Tab>
					    <Tab heading="Video Question"
							tabStyle={{ backgroundColor:'#FFF' }}
							activeTabStyle = {{ backgroundColor:'#FFF' }}
							textStyle = {{ color:'#bab8b6', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
							activeTextStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
						>
							<VideoQuestion navigation={this.props.navigation}/>
					    </Tab>
					</Tabs>
	      	</Container>
		);
	}
}
export default JobAdd;

/*




							
 */