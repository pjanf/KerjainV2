import React, { Component } from 'react';

import { Image } from "react-native";
import { Container, Content, Card, CardItem, Text, View, 
		 Body,List, ListItem, Left,Right, Icon, Thumbnail, Button  } from 'native-base';
import styles from './styles';


const companyImage1 = require("../../../img/company/dataon/dataonb.png");

export default class tabFailed extends Component {
	render() {
		return (
			<Content style={{ backgroundColor:'#f0f0f0', padding:10 }}>
				<Card style={{flex: 0}}>
					<CardItem>
						<View style={{ flex:1, flexDirection:'column' }}>
							<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
								<Text style={{ fontSize:18, fontFamily:'Roboto', color:'#d35400' }}>Java Developer</Text>
							</View>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <Thumbnail source={companyImage1} style={styles.drawerCover} />
                                <View style={{ flex:0, paddingLeft:10 }}>
                                    <Text style={{ fontSize:16, color:'#727a7a' }}>Dataon Corporation</Text>
                                    <Text style={{ fontSize:14, color:'#989595', marginBottom:10 }}>Posted: 8 January 2017</Text>
                                    <Text style={styles.textPostCard}><Icon name="navigate" style={styles.iconPostCard} />   Kota Tanggerang Selatan</Text>
                                    <Text style={styles.textPostCard}><Icon name="archive" style={styles.iconPostCard} />   IDR 10,000,00 - 20,000,000</Text>
                                </View>
                            </View>
						</View>
					</CardItem>
                    <CardItem style={{ backgroundColor:'#f2f2f2' }}>
                        <Left>
                            <Button iconLeft style={{ backgroundColor:'#189DAE' }}>
                                <Icon active name="search" style={{ fontSize:16 }} />
                                <Text style={{ fontSize:14 }}>Detail</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button
                                iconLeft
                                bordered
                                danger
                                style={{ marginBottom: 5, marginLeft: 10 }}
                            >
                            <Icon active name="close" style={{ fontSize:16 }} />
                            <Text style={{ fontSize:14 }}>Rejected</Text>
                            </Button>
                        </Right>
                    </CardItem>
				</Card>            
			</Content>
		);
	}
}
