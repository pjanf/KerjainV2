import React, { Component } from "react";
import { Image, StatusBar, Switch, Share, Alert} from "react-native";
import { Content, Text, List, ListItem, Icon, Container, Body, Left, Right, Badge, Button, Title, View, Header, StyleProvider, getTheme, variables, Thumbnail, cover, Card, CardItem } from "native-base";
import styles from "./style";

const people1 = require("../../../../img/contacts/atul.png");
const people2 = require("../../../../img/contacts/himanshu.png");
const people3 = require("../../../../img/contacts/shweta.png");

const datas = [
  {
  	img : people1,
    name: 'Alex Pagulayan',
    jobPosition: 'Software Developer',
    status: 'Unprocessed',
  }
];

class ScheduleI extends Component {
	render() {
		const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#d35400'}}>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button transparent onPress={() => goBack()}>
								<Icon name="ios-arrow-back" style={{ color:'white' }}/>
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Schedule</Title>
						</View>
					</Left>
				</Header>

		        <Content style={styles.container}>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10}}>
						<List dataArray={datas} renderRow={(data) =>
				          	<CardItem button style={{marginTop : 5, marginBottom : 5, paddingBottom : 10}} onPress={() => this.props.navigation.navigate("CandidateI")}>
				           	 	<Thumbnail source={data.img}/>
								<Body style= {{marginLeft : 20}}>
					                <Text>{data.name}</Text>
					                <Text note>{data.jobPosition}</Text>
					                <Text style={{color: '#d35400', fontSize:10}}>{data.status}</Text>
					            </Body>
				          	</CardItem>
				        }>
				        </List>
				    </Card>
				</Content>
			</Container>
		);
	}
}
export default ScheduleI;