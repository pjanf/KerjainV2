import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Card, CardItem, Thumbnail, Container, Picker, Content, Badge, Tab, Tabs, TabHeading, ListItem, Button, Text, Form, Header, Item, Label, Input, Icon, Title, Body, Left, Right } from "native-base";
import styles from "./style";
const imgJobMbdev = require("../../../../img/web-cover1.jpg");
const imgJobDesain = require("../../../../img/camera.png");

class Skill extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#d35400' }}>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button transparent onPress={() => this.props.navigation.navigate("Jobs")}>
								<Icon name="ios-arrow-back" />
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Add Jobs</Title>
						</View>
					</Left>
				</Header>

		        <Content style={styles.container}>
		        	<StatusBar barStyle="light-content" backgroundColor='#d35400' />
		        	<Tabs style={{ backgroundColor: '#f65857' }}>
		        		<Tab heading={ <TabHeading><Icon name="paper" /><Text>Job Posting</Text></TabHeading>}>
				          	<Form>
					            <Item floatingLabel>
					              	<Label>Position Title</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Salary</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Location</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Job Desciption</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Requirement</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					            	<Label>Date Closed</Label>
					              	<Input />
					            </Item>
					            <Button rounded style={{alignSelf : 'center'}} onPress={() => this.props.navigation.navigate("Jobs")}>
						        	<Text>Post</Text>
						        </Button>
					        </Form>
					    </Tab>
					    <Tab heading={ <TabHeading><Icon name="bookmark" /><Text>Video Question</Text></TabHeading>}>
					    	{/*tabStyle={{backgroundColor: '#ecf0f1'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#ecf0f1'}} activeTextStyle={{color: '#d35400', fontWeight: 'normal'}}*/}
				          	<Form>
					            <Item floatingLabel>
					              	<Label>Question 1</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Question 2</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Question 3</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Question 4</Label>
					              	<Input />
					            </Item>
					            <Item floatingLabel>
					              	<Label>Question 5</Label>
					              	<Input />
					            </Item>
					            <Button rounded style={{alignSelf : 'center'}} onPress={() => this.props.navigation.navigate("Jobs")}>
						        	<Text>Post</Text>
						        </Button>
					        </Form>
					    </Tab>
					</Tabs>
		        </Content>
	      	</Container>
		);
	}
}
export default Skill;