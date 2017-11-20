import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity, TouchableHighlight, Alert, AlertIOS } from "react-native";
import { Card, CardItem, Thumbnail, Container, Content, Badge, List, ListItem, Button, Text, Form, Header, Item, Label, Input, Icon, Title, Body, Left, Right } from "native-base";
import styles from "./style";

const cover = require("../../../../img/contacts/sankhadeep.png");
const prof_candidate = require("../../../../img/contacts/atul.png");
const people3 = require("../../../../img/contacts/shweta.png");
const people4 = require("../../../../img/contacts/shruti.png");

class CandidateI extends Component {
	render() {
		const {goBack} = this.props.navigation;
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#d35400' }}>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button transparent onPress={() => goBack()}>
								<Icon name="ios-arrow-back" />
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Candidate</Title>
						</View>
					</Left>
				</Header>
				
		        <Content>
			        <View>
						<Image source={prof_candidate} style={styles.drawerCover} />
					</View>

					<View style={styles.content}>
			        	<StatusBar barStyle="light-content" backgroundColor='#d35400' />
			          	<Card bordered>
			          		<ListItem style={styles.listItem} style={{paddingLeft:6, paddingTop:6, paddingBottom:6, paddingRight:6}}>
								<Thumbnail source={prof_candidate}/>
								<Body>
					                <Text>Joana Alexander</Text>
					                <Text note>myCV.pdf</Text>
					            </Body>
					            <Right>
									<Icon name="cloud-download" style={{color : 'orange'}}/>
								</Right>
							</ListItem>
				            <ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate("PersonalInfo")}>
								<Text style={styles.mnuDevider}>Personal Info</Text>
							</ListItem>    
							<ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate("WorkExperience")}>
								<Text style={styles.mnuDevider}>Work Experience</Text>
							</ListItem>
							{/*<ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate("Skill")}>
								<Text style={styles.mnuDevider}>Skill</Text>
							</ListItem>*/}
							<ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate("Education")}>
								<Text style={styles.mnuDevider}>Education</Text>
							</ListItem>
						</Card>

						<Card style={{marginTop : 5, marginBottom : 5}}>
							<ListItem itemDivider style={{paddingLeft:6, paddingTop:6, paddingBottom:6, paddingRight:6}}>
								<Item floatingLabel>
					              	<Label>Notes</Label>
					              	<Input style={{width:200, height:100}} multiline={true}/>
					            </Item>
					        </ListItem>
					    </Card>

					    <Card style={{marginTop : 5, marginBottom : 5}}>
					        <ListItem style={styles.listItem} style={{paddingLeft:6, paddingTop:6, paddingBottom:6, paddingRight:6}}>
					            <Label>REQUESTER APPROVAL</Label>
					        </ListItem>
							<ListItem itemDivider style={{paddingLeft:22, paddingTop:6, paddingBottom:6, paddingRight:6}}>
								<Thumbnail source={people3}/>
								<Body>
					                <Text>Andy</Text>
					                <Text note>Head of Sales Department</Text>
					            </Body>
							</ListItem>
							<ListItem itemDivider style={{paddingLeft:22, paddingTop:6, paddingBottom:12, paddingRight:6}}>
								<Thumbnail source={people4}/>
								<Body>
					                <Text>Cobi</Text>
					                <Text note>Head of HRD Department</Text>
					            </Body>
							</ListItem>
							<ListItem style={styles.listItem} style={{alignSelf : 'center'}}>
					            <Button rounded style={{alignSelf : 'center', marginRight : 5}} 
					            onPress={() => Alert.alert('Shortlist Sucess', null, [{text:'OK', onPress: () => this.props.navigation.navigate("CandidateS")}], 'plain-text') }>
						        	<Text>Shortlist</Text>
						        </Button>
						        <Button warning rounded style={{alignSelf : 'center', marginLeft : 5}} onPress={() => this.props.navigation.navigate("Schedule")}>
						        	<Text>Not Suitable</Text>
						        </Button>
							</ListItem>
				        </Card>
				    </View>
		        </Content>
	      	</Container>
		);
	}
}
export default CandidateI;