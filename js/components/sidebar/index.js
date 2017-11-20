import React, { Component } from "react";
import { Image, StatusBar, TouchableOpacity } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
	Thumbnail,
	cover
} from "native-base";

import styles from "./style";

const drawerImage = require("../../../img/contacts/sankhadeep.png");


class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" backgroundColor='#189DAE' />

				<Content>
					<View>
						<Image source={drawerImage} style={styles.drawerCover}>
							<View style={styles.overlay}/>
							<Thumbnail large source={drawerImage} style={styles.drawerImage} />
							<Text style={styles.textDrawer1}> Ario Hardi Wibowo </Text>
							<Text style={styles.textDrawer2}> ariohardi96@gmail.com </Text>
						</Image>
						
					</View>

					<List>
						<ListItem itemDivider>
							<Text style={styles.mnuDevider}>My Account</Text>
						</ListItem>    
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="home" />
								<TouchableOpacity>							
									<Text style={styles.mnuItem}>Home</Text>
								</TouchableOpacity>							
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="person" />	
								<TouchableOpacity onPress={() => this.props.navigation.navigate("MyProfile")}>						
									<Text style={styles.mnuItem}>My Profile</Text>
								</TouchableOpacity>							
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate("History")}>
							<Left>
								<Icon name="paper" style={styles.mnuIcon}/>							
								<Text style={styles.mnuItem}>My History</Text>							
							</Left>
						</ListItem>
						<ListItem button style={{ borderBottomWidth:0, marginRight: 20 }}>
							<Left>
								<Icon name="copy" style={styles.mnuIcon} />							
								<Text style={styles.mnuItem}>Scheduller</Text>							
							</Left>
						</ListItem>
						<ListItem itemDivider>
							<Text style={styles.mnuDevider}>Setting</Text>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="flag" />							
								<Text style={styles.mnuItem}>Language</Text>							
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="navigate" />							
								<Text style={styles.mnuItem}>Location</Text>							
							</Left>
						</ListItem>
						<ListItem button style={{ borderBottomWidth:0, marginRight: 20 }}>
							<Left>
								<Icon name="settings" />							
								<Text style={styles.mnuItem}>Notification</Text>							
							</Left>
						</ListItem>
						<ListItem itemDivider>
							<Text style={styles.mnuDevider}>Information</Text>
						</ListItem>   
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="bulb" />							
								<Text style={styles.mnuItem}>About</Text>							
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="star" />							
								<Text style={styles.mnuItem}>Rate Us</Text>							
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="chatboxes" />							
								<Text style={styles.mnuItem}>Contact Us</Text>							
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="share" />							
								<Text style={styles.mnuItem}>Share</Text>							
							</Left>
						</ListItem>
						<ListItem button onPress={() => this.props.navigation.navigate("Login")} style={styles.listItem} >
							<Left>
								<Icon name="power" />							
								<Text style={styles.mnuItem}>Sign Out</Text>							
							</Left>
						</ListItem>
					</List>
					
				</Content>
			</Container>
		);
	}
}

export default SideBar;


/*
<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
*/