import React, { Component } from 'react';
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
  cover,
  Header,
  Body, Tabs, TabHeading,ScrollableTab, Title
} from "native-base";

import styles from "./style";

const drawerImage = require("../../../../img/companyLogo/dataon.jpg");
const companyImage = require("../../../../img/company/dataon/112116_NBC_1.jpg");

export default class Menubar extends Component {
  render() {
    return (
      <Container>
      <Header style={{ backgroundColor:'#d35400' }} hasTabs>
        <StatusBar barStyle="light-content" backgroundColor='#d35400' />
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.navigate("MenuBarRecruiter")}
            >
            <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Menu Bar</Title>
          </Body>
        </Header>
        <Content>
        <View>
            <Image source={companyImage} style={styles.drawerCover}>
              <View style={styles.overlay}/>
              <Thumbnail large source={drawerImage} style={styles.drawerImage} />
              <Text style={styles.textDrawer1}> Data On Corporation </Text>
              <Text style={styles.textDrawer2}> recruitment@dataon.com </Text>
            </Image>
            
          </View>
          <List>
            <ListItem itemDivider>
              <Text style={styles.mnuDevider}>My Account</Text>
            </ListItem>    
            <ListItem button style={styles.listItem}>
              <Left>
                <Icon name="home" />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeRecruiter")}>              
                  <Text style={styles.mnuItem}>Home</Text>
                </TouchableOpacity>             
              </Left>
            </ListItem>
            <ListItem button style={styles.listItem}>
              <Left>
                <Icon name="person" />  
                <TouchableOpacity onPress={() => this.props.navigation.navigate("CompanyProfile")}>            
                  <Text style={styles.mnuItem}>Company Profile</Text>
                </TouchableOpacity>             
              </Left>
            </ListItem>
            <ListItem button style={styles.listItem}>
              <Left>
                <Icon name="bookmarks" style={styles.mnuIcon}/>      
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("JobsPosting")}>       
                  <Text style={styles.mnuItem}>My Post Jobs</Text>
                </TouchableOpacity>              
              </Left>
            </ListItem>
            <ListItem button style={styles.listItem}>
              <Left>
                <Icon name="camera" style={styles.mnuIcon}/>             
                <Text style={styles.mnuItem}>Share Interview</Text>              
              </Left>
            </ListItem>
            <ListItem button style={styles.listItem}>
              <Left>
                <Icon name="calendar" style={styles.mnuIcon}/>             
                <Text style={styles.mnuItem}>Agenda</Text>              
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