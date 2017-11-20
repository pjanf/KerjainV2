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
    interviewDate: '20 Agustus 2017 | 09:00',
  },
  {
  	img : people2,
    name: 'Ricky Yang',
    jobPosition: 'Marketing Staff',
    interviewDate: '20 Agustus 2017 | 10:00',
  },
  {
  	img : people3,
    name: 'Joana Alexander',
    jobPosition: 'Mobile Developer',
    interviewDate: '20 Agustus 2017 | 11:00',
  },
];

class Schedule extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#d35400' }}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body><Title>Schedule</Title></Body>
				</Header>

		        <Content style={styles.container}>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10}}>
						<List dataArray={datas} renderRow={(data) =>
				          	<CardItem button style={{marginTop : 5, marginBottom : 5, paddingBottom : 10}} onPress={() => this.props.navigation.navigate("Candidate")}>
				           	 	<Thumbnail source={data.img}/>
								<Body style= {{marginLeft : 20}}>
					                <Text>{data.name}</Text>
					                <Text note>{data.jobPosition}</Text>
					                <Text style={{color: '#d35400', fontSize:10}}>{data.interviewDate}</Text>
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
export default Schedule;