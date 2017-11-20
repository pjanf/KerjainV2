import React, { Component } from 'react';

import { Image } from "react-native";
import { Container, Content, Card, CardItem, Text, View, 
		 Body,List, ListItem, Left,Right, Icon, Thumbnail, Button  } from 'native-base';
import styles from './styles';

const companyImage1 = require("../../../img/company/dataon/dataonb.png");

export default class tabOnProcess extends Component {
	render() {
		return (
			<Content style={{ backgroundColor:'#f0f0f0', padding:10 }}>
				<Card style={{flex: 0}}>
					<CardItem>
						<View style={{ flex:1, flexDirection:'column' }}>
							<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
								<Text style={{ fontSize:18, fontFamily:'Roboto', color:'#d35400' }}>Database Administrator</Text>
							</View>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <Thumbnail source={companyImage1} style={styles.drawerCover} />
                                <View style={{ flex:0, paddingLeft:10 }}>
                                    <Text style={{ fontSize:16, color:'#727a7a' }}>Dataon Corporation</Text>
                                    <Text style={{ fontSize:14, color:'#989595', marginBottom:10 }}>Posted: 20 Agustus 2017</Text>
                                    <Text style={styles.textPostCard}><Icon name="navigate" style={styles.iconPostCard} />   Kota Tanggerang Selatan</Text>
                                    <Text style={styles.textPostCard}><Icon name="archive" style={styles.iconPostCard} />   IDR 5,000,00 - 10,000,000</Text>
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
                            <Button iconLeft danger onPress={() =>this.props.navigation.navigate("Interview")}>
                                <Icon active name="videocam" style={{ fontSize:16 }}/>
                                <Text style={{ fontSize:14 }}>Interview</Text>
                            </Button>
                        </Right>
                    </CardItem>
				</Card>
                <Card style={{flex: 0}}>
                    <CardItem>
						<View style={{ flex:1, flexDirection:'column' }}>
							<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
								<Text style={{ fontSize:18, fontFamily:'Roboto', color:'#d35400' }}>Web Progammer</Text>
							</View>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <Thumbnail source={companyImage1} style={styles.drawerCover} />
                                <View style={{ flex:0, paddingLeft:10 }}>
                                    <Text style={{ fontSize:16, color:'#727a7a' }}>Dataon Corporation</Text>
                                    <Text style={{ fontSize:14, color:'#989595', marginBottom:10 }}>Posted: 20 July 2017</Text>
                                    <Text style={styles.textPostCard}><Icon name="navigate" style={styles.iconPostCard} />   Kota Tanggerang Selatan</Text>
                                    <Text style={styles.textPostCard}><Icon name="archive" style={styles.iconPostCard} />   IDR 4,000,00 - 7,000,000</Text>
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
                                style={{ marginBottom: 0, borderColor:'#189DAE'  }}
                            >
                            <Icon active name="refresh" style={{ fontSize:16, color:'#189DAE' }} />
                            <Text style={{ fontSize:14, color:'#189DAE' }}>On Process</Text>
                            </Button>
                        </Right>
                    </CardItem>
				</Card>
                <Card style={{flex: 0}}>
                    <CardItem>
						<View style={{ flex:1, flexDirection:'column' }}>
							<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
								<Text style={{ fontSize:18, fontFamily:'Roboto', color:'#d35400' }}>Software Developer</Text>
							</View>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <Thumbnail source={companyImage1} style={styles.drawerCover} />
                                <View style={{ flex:0, paddingLeft:10 }}>
                                    <Text style={{ fontSize:16, color:'#727a7a' }}>Dataon Corporation</Text>
                                    <Text style={{ fontSize:14, color:'#989595', marginBottom:10 }}>Posted: 20 May 2017</Text>
                                    <Text style={styles.textPostCard}><Icon name="navigate" style={styles.iconPostCard} />   Kota Tanggerang Selatan</Text>
                                    <Text style={styles.textPostCard}><Icon name="archive" style={styles.iconPostCard} />   IDR 3,500,00 - 8,000,000</Text>
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
                                style={{ marginBottom: 0, borderColor:'#189DAE'  }}
                            >
                            <Icon active name="refresh" style={{ fontSize:16, color:'#189DAE' }} />
                            <Text style={{ fontSize:14, color:'#189DAE' }}>On Process</Text>
                            </Button>
                        </Right>
                    </CardItem>
				</Card>
			</Content>
		);
	}
}
