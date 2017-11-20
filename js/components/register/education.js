import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Item, Form, Input, Label, ListItem, List, Card, CardItem } from "native-base";

import styles from "./styles";

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

class Register extends Component {
	// eslint-disable-line

	render() {
		const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#189DAE' }}>
					<Button
						transparent
						onPress={() => goBack()}
						>
						<Icon name="ios-arrow-back" />
					</Button>
					<Title style={{marginTop : 15, marginLeft : 10}}> Education</Title>
					<Right>
						<Title style={{marginLeft : 10}}> STEP 3 of 3</Title>
					</Right>
					
				</Header>
				<Content style={styles.content}>
					<Right>
						<Button iconLeft info onPress={() => this.props.navigation.navigate("EducationAdd")} style={{marginLeft : 220}}>
							<Icon active name="add" style={{color : 'white'}}/>
							<Text>Add</Text>
						</Button>
					</Right>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
						<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10}}>
							<List dataArray={datas} renderRow={data =>
					          	<CardItem style={{marginTop : 5, marginBottom : 5, paddingBottom : 10}}>
					           	 	<Body>
					           	 		<View style={{flexDirection : 'row', flex : 6}}>
							           	  	<TouchableOpacity transparent style={{flex : 5}}>	
								              <Text style={{fontSize: 18, color : 'blue'}}>{data.instituteName}</Text>
								            </TouchableOpacity>
									        <Right>
									        	<TouchableOpacity>
									        		 <Icon active name="remove-circle" style={{flex : 1, color : 'blue'}} />
									        	</TouchableOpacity>
									        </Right>
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
					          }
					        />
					    </Card>
			        	<Button rounded info style={{marginTop : 10, marginBottom : 20, alignSelf : 'center', height : 50}}
			        		onPress={() => this.props.navigation.navigate("Home")} >
			        		<Text>             Finished             </Text>
			        	</Button>
				</Content>
			</Container>
		);
	}
}

export default Register;
