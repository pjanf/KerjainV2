import React, { Component } from "react";
import { Image, StatusBar, Switch, Share, Alert} from "react-native";
import { Content, Text, List, ListItem, InputGroup, Icon, Input, Form, Item, Container, Body, Left, Right, Badge, Button, Title, View, Header, StyleProvider, getTheme, variables, Thumbnail, cover } from "native-base";
import styles from "./style";
const people1 = require("../../../../img/contacts/atul.png");
const people2 = require("../../../../img/contacts/himanshu.png");
const people3 = require("../../../../img/contacts/shweta.png");


class ShareCandidate extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header searchBar rounded style={{ backgroundColor:'white' }}>
					<Item>
						<Button transparent onPress={() => this.props.navigation.navigate("Candidate")}>
							<Icon name="ios-arrow-back" style={{ color:'#d35400' }}/>
						</Button>
		            	<Icon name="ios-search" />
		            	<Input placeholder="Search Colaborator"/>
		            	<Icon name="ios-people" />
	          		</Item>
		        </Header>

		        <Content style={styles.container}>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<List>
						<ListItem button itemDivider onPress={() => this.props.navigation.navigate("Candidate")}>
							<Thumbnail source={people1}/>
							<Body>
				                <Text>Alex Pace</Text>
				                <Text note>Software Developer</Text>
				            </Body>
						</ListItem>    
						<ListItem button itemDivider onPress={() => this.props.navigation.navigate("Candidate")}>
							<Thumbnail source={people2}/>
							<Body>
				                <Text>Jomphy</Text>
				                <Text note>Marketing Staff</Text>
				            </Body>
						</ListItem>
						<ListItem button itemDivider onPress={() => this.props.navigation.navigate("Candidate")}>
							<Thumbnail source={people3}/>
							<Body>
				                <Text>Juan Cu</Text>
				                <Text note>Mobile Developer</Text>
				            </Body>
						</ListItem>    
					</List>
				</Content>
	      	</Container>
		);
	}
}
export default ShareCandidate;