import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, 
		 Body,List, ListItem, Left,Right, Icon  } from 'native-base';
import styles from './styles';
export default class tabActiveJobs extends Component {
	render() {
		return (
			<Content style={{ backgroundColor:'#f0f0f0', padding:10 }}>
				<Card>
					<CardItem>
						<View style={{ flex:1, flexDirection:'column' }}>
							<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
								<Text style={{ fontSize:14, fontFamily:'Roboto', color:'#d35400' }}>Database Administrator</Text>
								<Text style={{ fontSize:10, fontFamily:'Roboto', color:'#a19c9c' }}>Posted: 11 Agustus 2017</Text>
							</View>
							<List style={{ margin:0, width:null }}>                    
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Matched: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>100</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Matched & Interested: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>50</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Interested Only: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>20</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Selected: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>0</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Unlocked: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>0</Text>
									</Right>
								</ListItem>
							</List>
						</View>
					</CardItem>
				</Card>
				<Card>
					<CardItem>
						<View style={{ flex:1, flexDirection:'column' }}>
							<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
								<Text style={{ fontSize:14, fontFamily:'Roboto', color:'#d35400' }}>Web Progammer</Text>
								<Text style={{ fontSize:10, fontFamily:'Roboto', color:'#a19c9c' }}>Posted: 20 July 2017</Text>
							</View>
							<List style={{ margin:0, width:null }}>                    
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Matched: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>200</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Matched & Interested: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>150</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Interested Only: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>100</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Selected: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>10</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Unlocked: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>0</Text>
									</Right>
								</ListItem>
							</List>
						</View>
					</CardItem>
				</Card>
				<Card>
					<CardItem>
						<View style={{ flex:1, flexDirection:'column' }}>
							<View style={{ flex:1, flexDirection:'column', marginBottom:10 }}>
								<Text style={{ fontSize:14, fontFamily:'Roboto', color:'#d35400' }}>Mobile Developer</Text>
								<Text style={{ fontSize:10, fontFamily:'Roboto', color:'#a19c9c' }}>Posted: 20 May 2017</Text>
							</View>
							<List style={{ margin:0, width:null }}>                    
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Matched: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>20</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Matched & Interested: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>5</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Interested Only: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>5</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Selected: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>0</Text>
									</Right>
								</ListItem>
								<ListItem style={styles.cardListItem}>
									<Text style={styles.cardListText}>Unlocked: </Text>
									<Right>
										<Text style={styles.cardListTextRight}>0</Text>
									</Right>
								</ListItem>
							</List>
						</View>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
