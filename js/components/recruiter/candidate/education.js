import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, List, Card, CardItem } from "native-base";
import styles from "./style";
const datas = [
  {
    instituteName: 'Binus University',
    graduation: '22 Sept 2013',
    degree: 'S1',
    major: 'Information Technology',
  },
  {
    instituteName: 'Gunadarma University',
    graduation: '17 Jun 2017',
    degree: 'S2',
    major: 'Information Technology',
  },
];

class Education extends Component {
	render() {
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#d35400' }}>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button transparent onPress={() => this.props.navigation.navigate("Candidate")}>
								<Icon name="ios-arrow-back" />
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Education</Title>
						</View>
					</Left>
				</Header>

				<Content style={styles.content}>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
						<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10}}>
					      	<View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
					      		<Icon name="school"/>
					            <Text style={{marginLeft: 10, marginTop : 5, color : '#d35400', fontSize : 17}}>Education</Text>
					        </View>
							<List dataArray={datas} renderRow={(data) =>
					          	<CardItem style={{marginTop : 5, marginBottom : 5, paddingBottom : 10}}>
					           	 	<Body>
					           	 		<View style={{flexDirection : 'row', flex : 6}}>
							           	  	<TouchableOpacity style={{flex : 5}}>	
								              <Text style={{fontSize: 18, color : '#d35400'}}>{data.instituteName}</Text>
								            </TouchableOpacity>
							            </View>
							            <View>
								            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Graduation</Text>
								            <Text style={{marginTop : 5}}>{data.graduation}</Text>

								            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Degree</Text>
								            <Text style={{marginTop : 5}}>{data.degree}</Text>

								            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Major</Text>
								            <Text style={{marginTop : 5}}>{data.major}</Text>
								        </View>
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
export default Education;