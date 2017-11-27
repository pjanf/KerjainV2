import React, { Component } from "react";
import { Image, StatusBar, Switch, Share, Alert} from "react-native";

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

const drawerImage = require("../../../img/company/dataon/dataonb.png");
const drawcerCover = require("../../../img/company/dataon/112116_NBC_1.jpg");


class SideBarRecruiter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	_shareTextMessage () {
		Share.share({
			message: 'Try Kerja.In Talent App'
		})
		.then(this._showResult)
		.catch(err => console.log(err))
	}
	_showResult (result) {
		console.log(result)
	}

	render() {
		return (
			<Container>
				<Content>
					<StatusBar barStyle="light-content" backgroundColor='#d35400' />
					<View>
						<Image source={drawcerCover} style={styles.drawerCover}>
							<View style={styles.overlay}/>
							<Thumbnail large source={drawerImage} style={styles.drawerImage} />
							<Text style={styles.textDrawer1}> DataOn Corporation </Text>
							<Text style={styles.textDrawer2}> recruitment@dataon.com </Text>
						</Image>

					</View>

					<List>
						<ListItem itemDivider>
							<Text style={styles.mnuDevider}>My Account</Text>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() =>this.props.navigation.navigate("Home")}>
							<Left>
								<Icon name="home" style={styles.mnuIconSelected} />
								<Text style={styles.mnuItemSelected}>Home</Text>
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() =>this.props.navigation.navigate("MyProfile")}>
							<Left>
								<Icon name="person" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>My Profile</Text>
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate("Jobs")}>
							<Left>
								<Icon name="bookmarks" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>My Post Jobs</Text>
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate("Schedule")}>
							<Left>
								<Icon name="copy" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Share Interview</Text>
							</Left>
						</ListItem>
						<ListItem button style={{ borderBottomWidth:0, marginRight: 20 }} onPress={() => this.props.navigation.navigate("Agenda")}>
							<Left>
								<Icon name="calendar" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Agenda</Text>
							</Left>
						</ListItem>
						<ListItem itemDivider>
							<Text style={styles.mnuDevider}>Setting</Text>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="flag" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Language</Text>
							</Left>
							<Right>
								<Text style={styles.mnuItemRight}>English</Text>
							</Right>
						</ListItem>
						<ListItem button style={styles.listItem}>
							<Left>
								<Icon name="navigate" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Location</Text>
							</Left>
							<Right>
								<Text style={styles.mnuItemRight}>Jakarta</Text>
							</Right>
						</ListItem>
						<ListItem button style={{ borderBottomWidth:0, marginRight: 20 }}>
							<Left>
								<Icon name="settings" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Notification</Text>
							</Left>
							<Right>
								<Switch
									value={ this.state.value }
									onValueChange={(value) => this.setState({value})}
									onTintColor='#ea6c18'
									thumbTintColor='#ea6c18'
									/>
							</Right>
						</ListItem>
						<ListItem itemDivider>
							<Text style={styles.mnuDevider}>Information</Text>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() =>this.props.navigation.navigate("About")}>
							<Left>
								<Icon name="bulb" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>About</Text>
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() =>this.props.navigation.navigate("Rate")}>
							<Left>
								<Icon name="star" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Rate Us</Text>
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={() =>this.props.navigation.navigate("ContactUs")}>
							<Left>
								<Icon name="mail" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Contact Us</Text>
							</Left>
						</ListItem>
						<ListItem button style={styles.listItem} onPress={this._shareTextMessage}>
							<Left>
								<Icon name="share"style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Share</Text>
							</Left>
						</ListItem>
						<ListItem button
							onPress={() => Alert.alert(
								'SunFis Recruiter',
								'Do you really want to exit?',
								[
								{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
								{text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
								]
							)}
							style={styles.listItem} >
							<Left>
								<Icon name="power" style={styles.mnuIcon} />
								<Text style={styles.mnuItem}>Sign Out</Text>
							</Left>
						</ListItem>
					</List>

				</Content>
			</Container>
		);
	}
}

export default SideBarRecruiter;


/*
<ListItem button style={styles.listItem}>
	<Left>
		<Icon name="chatboxes" style={styles.mnuIcon} />
		<Text style={styles.mnuItem}>Chat</Text>
	</Left>
</ListItem>


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
