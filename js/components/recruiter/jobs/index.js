import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity, TouchableHighlight } from "react-native";
import { Card, CardItem, Thumbnail, Container, Content, Badge, List, ListItem, Button, Text, Form, Header, Item, Label, Input, Icon, Title, Body, Left, Right } from "native-base";
import style from "./style";
import styles from "./styles";
const imgJobMbdev = require("../../../../img/web-cover1.jpg");
const imgJobDesain = require("../../../../img/camera.png");

class Jobs extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'#d35400' }}>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate("MenuBarRecruiter")}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body><Title>Job List</Title></Body>
				</Header>

		        <Content style={{ backgroundColor:'#f0f0f0', padding:10 }}>
		        	<View>
		        		<Right>
		        			<Button transparent bordered danger style= {{marginLeft : 260, marginBottom : 10}} onPress={() => this.props.navigation.navigate("JobsPostingAdd")}>
				            	<Icon name='add' />
				          </Button>
		        		</Right>
		        	</View>
					<Card>
						<CardItem>
							<View style={{ flex:1, flexDirection:'column' }}>
								<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
									<Text style={{ fontSize:16, fontFamily:'Roboto', color:'#d35400' }}>Database Administrator</Text>
									<Text style={{ fontSize:12, fontFamily:'Roboto', color:'#a19c9c' }}>Posted: 11 Agustus 2017</Text>
								</View>
								<View style={{ flex:1, flexDirection:'row', margin:0, padding:0 }}>
									<Button button small transparent style={{ height:35, paddingLeft:0 }} onPress={() => this.props.navigation.navigate("ScheduleI")}>
										<Badge warning>
											<Text style={{ fontSize:12 }}>1</Text>
										</Badge>
										<Text style={{ fontSize:10, paddingLeft:5, color:'#d35400' }}>Unproccesed</Text>
									</Button>
									<Button button small transparent style={{paddingLeft: 5, paddingRight:5, height:35 }} onPress={() => this.props.navigation.navigate("ScheduleS")}>
										<Badge info>
											<Text style={{ fontSize:12 }} >5</Text>
										</Badge>
										<Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Shortlist</Text>
									</Button>
									<Button small transparent style={{ height:35  }} onPress={() => this.props.navigation.navigate("Schedule")}>
										<Badge success>
											<Text style={{ fontSize:12 }} >6</Text>
										</Badge>
										<Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Interview</Text>
									</Button>
								</View>
							</View>
						</CardItem>
					</Card>
					<Card>
						<CardItem>
								<View style={{ flex:1, flexDirection:'column' }}>
									<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
										<Text style={{ fontSize:16, fontFamily:'Roboto', color:'#d35400' }}>Web Progammer</Text>
										<Text style={{ fontSize:12, fontFamily:'Roboto', color:'#a19c9c' }}>Posted: 20 July 2017</Text>
									</View>
									<View style={{ flex:1, flexDirection:'row', margin:0, padding:0 }}>
										<Button button small transparent style={{ height:35, paddingLeft:0 }} onPress={() => this.props.navigation.navigate("ScheduleI")}>
											<Badge warning>
												<Text style={{ fontSize:12 }}>0</Text>
											</Badge>
											<Text style={{ fontSize:10, paddingLeft:5, color:'#d35400' }}>Unproccesed</Text>
										</Button>
										<Button button small transparent style={{paddingLeft: 5, paddingRight:5, height:35 }} onPress={() => this.props.navigation.navigate("ScheduleS")}>
											<Badge info>
												<Text style={{ fontSize:12 }}>1</Text>
											</Badge>
											<Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Shortlist</Text>
										</Button>
										<Button small transparent style={{ height:35  }} onPress={() => this.props.navigation.navigate("Schedule")}>
											<Badge success>
												<Text style={{ fontSize:12 }}>6</Text>
											</Badge>
											<Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Interview</Text>
										</Button>
									</View>
								</View>
							</CardItem>
						</Card>
						<Card>
							<CardItem>
								<View style={{ flex:1, flexDirection:'column' }}>
									<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
										<Text style={{ fontSize:16, fontFamily:'Roboto', color:'#d35400' }}>Mobile Developer</Text>
										<Text style={{ fontSize:12, fontFamily:'Roboto', color:'#a19c9c' }}>Posted: 20 May 2017</Text>
									</View>
									<View style={{ flex:1, flexDirection:'row', margin:0, padding:0}}>
										<Button button small transparent style={{ height:35, paddingLeft:0 }} onPress={() => this.props.navigation.navigate("ScheduleI")}>
											<Badge warning>
												<Text style={{ fontSize:12 }}>0</Text>
											</Badge>
											<Text style={{ fontSize:10, paddingLeft:5, color:'#d35400' }}>Unproccesed</Text>
										</Button>
										<Button button small transparent style={{paddingLeft: 5, paddingRight:5, height:35 }} onPress={() => this.props.navigation.navigate("ScheduleS")}>
											<Badge info>
												<Text style={{ fontSize:12 }}>1</Text>
											</Badge>
											<Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Shortlist</Text>
										</Button>
										<Button small transparent style={{ height:35  }} onPress={() => this.props.navigation.navigate("Schedule")}>
											<Badge success>
												<Text style={{ fontSize:12 }}>6</Text>
											</Badge>
											<Text style={{ fontSize: 10, paddingLeft:5, color:'#d35400' }}>Interview</Text>
										</Button>
									</View>
								</View>
							</CardItem>
						</Card>
					  
					
		        </Content>
	      	</Container>
		);
	}
}
export default Jobs;


/*
<List>
			            <ListItem button onPress={() => this.props.navigation.navigate("JobDetails")} 
			            style={{paddingRight:5, paddingTop:5, paddingBottom:0, marginLeft:5, borderBottomWidth: 0}}>
			              	<Left>
						    	<Thumbnail source={imgJobMbdev} style={styles.drawerImage}/>
				                <Body>
				                  	<Text style={{fontSize: 15}}>Mobile Developer</Text>
				                  	<Text note>Aug 28, 2018</Text>
				                </Body>
			              	</Left>
			              	<Right>
			                	<Button transparent onPress={() => this.props.navigation.navigate("JobEdit")}>
			                  		<Icon active name="open" />
			                	</Button>
			              	</Right>
			            </ListItem>
			            <ListItem style={{paddingRight:5, paddingTop:0, paddingBottom:5, marginLeft:5, alignSelf : 'stretch'}}>
		                	<Button button small transparent style={{paddingLeft:10, paddingRight:10, height:35}} onPress={() => this.props.navigation.navigate("ScheduleI")}>
		                  		<Badge warning>
		                  			<Text>1</Text>
		                  		</Badge>
		                  		<Text note style={{fontSize:12}}>Unproccesed</Text>
		                	</Button>
		                	<Button button small transparent style={{paddingLeft:10, paddingRight:10, height:35}} onPress={() => this.props.navigation.navigate("ScheduleS")}>
		                  		<Badge info>
		                  			<Text>1</Text>
		                  		</Badge>
		                  		<Text note style={{fontSize: 12}}>Shortlist</Text>
		                	</Button>
		                	<Button small transparent style={{paddingLeft:10, paddingRight:10, height:35}} onPress={() => this.props.navigation.navigate("Schedule")}>
		                  		<Badge success>
		                  			<Text>1</Text>
		                  		</Badge>
		                  		<Text note style={{fontSize: 12}}>Interview</Text>
		                	</Button>
			            </ListItem>
			        	
			        	<ListItem button onPress={() => this.props.navigation.navigate("JobDetails")} 
			        	style={{paddingRight:5, paddingTop:5, paddingBottom:0, marginLeft:5, borderBottomWidth: 0}}>
			              	<Left>
				                <Thumbnail source={imgJobDesain} style={styles.drawerImage} />
				                <Body>
				                  	<Text style={{fontSize: 15}}>Desain Grafis</Text>
				                  	<Text note>Aug 31, 2018</Text>
				                </Body>
			              	</Left>
			              	<Right>
			                	<Button transparent onPress={() => this.props.navigation.navigate("JobEdit")}>
			                  		<Icon active name="open" />
			                	</Button>
			              	</Right>
			            </ListItem>
			            <ListItem style={{paddingRight:5, paddingTop:0, paddingBottom:5, marginLeft:5, alignSelf : 'stretch'}}>
		                	<Button button small transparent style={{paddingLeft:10, paddingRight:10, height:35}} onPress={() => this.props.navigation.navigate("CandidateI")}>
		                  		<Badge warning>
		                  			<Text>1</Text>
		                  		</Badge>
		                  		<Text note style={{fontSize:12}}>Unproccesed</Text>
		                	</Button>
		                	<Button button small transparent style={{paddingLeft:10, paddingRight:10, height:35}} onPress={() => this.props.navigation.navigate("CandidateS")}>
		                  		<Badge info>
		                  			<Text>1</Text>
		                  		</Badge>
		                  		<Text note style={{fontSize: 12}}>Shortlist</Text>
		                	</Button>
		                	<Button small transparent style={{paddingLeft:10, paddingRight:10, height:35}} onPress={() => this.props.navigation.navigate("Candidate")}>
		                  		<Badge success>
		                  			<Text>1</Text>
		                  		</Badge>
		                  		<Text note style={{fontSize: 12}}>Interview</Text>
		                	</Button>
			            </ListItem>
			        </List>

*/