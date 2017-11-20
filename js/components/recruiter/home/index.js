import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Content, Button,
		 Text, Header, Title, Body, Left,
		 Right, Icon, Tab, Tabs, TabHeading,ScrollableTab
} from "native-base";

import TabActiveJobs from './tabActiveJobs';
import TabMatchCandidate from './tabMatchCandidate';
import styles from "./styles";


class Home extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#d35400' }} hasTabs>
				<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<Left>
						<Button
						transparent
						onPress={() => this.props.navigation.navigate("CompanyProfile")}
						>
						<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>SunFish Recruiter</Title>
					</Body>
				</Header>
				<Tabs tabBarUnderlineStyle= {{ backgroundColor:'#d35400' }} renderTabBar={()=> <ScrollableTab />}>
					<Tab heading="ACTIVE JOBS"
						tabStyle={{ backgroundColor:'#FFF' }}
						activeTabStyle = {{ backgroundColor:'#FFF' }}
						textStyle = {{ color:'#bab8b6', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
						activeTextStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
						>
						<TabActiveJobs />
					</Tab>
					<Tab heading="New Candidates Apply"
						tabStyle={{ backgroundColor:'#FFF' }}
						activeTabStyle = {{ backgroundColor:'#FFF' }}
						textStyle = {{ color:'#bab8b6', fontSize:12, fontWeight:'normal', fontFamily:'Arial' }}
						activeTextStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
						>
						<TabMatchCandidate />
					</Tab>
					<Tab heading="Schedule Interview"
						tabStyle={{ backgroundColor:'#FFF' }}
						activeTabStyle = {{ backgroundColor:'#FFF' }}
						textStyle = {{ color:'#bab8b6', fontSize:12,fontWeight:'normal', fontFamily:'Roboto' }}
						activeTextStyle = {{ color:'#d35400', fontSize:12, fontWeight:'normal', fontFamily:'Roboto' }}
						>
						<TabMatchCandidate />
					</Tab>
				</Tabs>

			</Container>
		);
	}
}

export default Home;
