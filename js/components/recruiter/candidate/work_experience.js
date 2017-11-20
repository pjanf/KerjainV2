import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, List, Card, CardItem } from "native-base";
import styles from "./style";
const datas = [
  {
    jobTitle: 'Software Developer',
    location: 'PT Traveloka',
    time: '24 Jan 2014 - 24 Jan 2017',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    jobTitle: 'Software Developer',
    location: 'PT AnaBatik',
    time: '24 Jan 2010 - 24 Jan 2014',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

class WorkExperience extends Component {
	render() {
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#d35400' }}>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button transparent onPress={() => this.props.navigation.navigate("Candidate")}>
								<Icon name="ios-arrow-back" />
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Work Experience</Title>
						</View>
					</Left>
				</Header>

				<Content style={styles.content}>
		         	<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10, paddingBottom : 10}}>
			         <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
			            <Icon name="briefcase"/>
			            <Text style={{marginLeft : 10, marginTop : 5, color : '#d35400', fontSize : 17}}>Work Experience</Text>
			        </View>
		         	<List dataArray={datas} renderRow={data =>
			          	<CardItem style={{marginTop : 5, marginBottom : 5, paddingTop : 10}}>
			           	 	<Body>
			           	 		<View style={{flexDirection : 'row', flex : 6}}>
					           	  	<TouchableOpacity style={{flex : 5}}>	
						              <Text style={{fontSize: 18, color : '#d35400'}}>{data.location}</Text>
						            </TouchableOpacity>
					            </View>
					            <View>
						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Working Periode</Text>
						            <Text style={{marginTop : 5}}>{data.time}</Text>

						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Position</Text>
						            <Text style={{marginTop : 5}}>{data.jobTitle}</Text>

						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Job Description</Text>
						            <Text style={{marginTop : 5}}>{data.jobdesc}</Text>
						        </View>
			           		</Body>
			          	</CardItem>
			          }
			        />
			    </Card>
				</Content>
			</Container>
		);
	}
}
export default WorkExperience;