import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon, Thumbnail, List, ListItem, Card, CardItem } from "native-base";
import styles from "./style";

const drawerImage = require("../../../../img/contacts/sankhadeep.png");
const drawcerCover = require("../../../../img/company/dataon/112116_NBC_1.jpg");

class PersonalInfo extends Component {
	render() {
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#d35400' }}>
					<Left>
						<View style={{flexDirection: 'row'}}>
							<Button transparent onPress={() => this.props.navigation.navigate("Candidate")}>
								<Icon name="ios-arrow-back" />
							</Button>
							<Title style={{marginTop : 10, marginLeft : 10}}>Personal Info</Title>
						</View>
					</Left>
				</Header>

				<Content>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<View>
						<Image source={drawerImage} style={styles.drawerCover}>
							<View style={styles.overlay}/>
							<Thumbnail large source={drawerImage} style={styles.drawerImage} />
							<Text style={styles.textDrawer1}> Joana Alexander </Text>
						</Image>
					</View>
					<View style={styles.content}>
				        <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 10}}>
				            <Icon name="person"/>
				            <Text style={{marginLeft : 10, marginTop : 5, color : '#d35400', fontSize : 17}}>Personal Info</Text>
				          </View>
				          <Card bordered>
				            <ListItem>
				              <Body>
				                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Name</Text>
				                <Text style={{marginTop : 5}}>Joana Alexander</Text>
				              </Body>
				            </ListItem>

				            <ListItem>
				              <Body>
				                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Email</Text>
				                <Text style={{marginTop : 5}}>ariohardi96@gmail.com</Text>
				              </Body>
				            </ListItem>

				            <ListItem>
				              <Body>
				                <Text style={{fontSize : 15, color : '#d35400', paddingRight : 10}}>Phone</Text>
				                <Text style={{marginTop : 5}}>087888197099</Text>
				              </Body>
				            </ListItem>

				            <CardItem>
				              <Body>
				                <Text style={{fontSize : 15, color : '#d35400', marginLeft : 15, paddingRight : 10}}>CV</Text>
				                <View style={{flexDirection : 'row'}}>
				                  <Text style={{marginTop : 5, marginLeft : 15}}>myCV.pdf</Text>
				                  <Right>
				                    <Icon name="cloud-download" style={{color : 'orange'}}/>
				                  </Right>
				                </View>
				              </Body>
				            </CardItem>			            
				        </Card>
				    </View>
				</Content>
			</Container>
		);
	}
}
export default PersonalInfo;