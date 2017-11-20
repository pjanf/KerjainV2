const React = require("react-native");

const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  sidebar: {
    flex: 1,
    backgroundColor: "#fff"
  },
  drawerCover: {
    alignSelf: 'stretch',
    // resizeMode: 'cover',
    height: deviceHeight / 3.2,
    width: null,
    position: 'relative',
    marginBottom: 10,
    alignItems: 'center',
  },
  drawerImage: {
    // top: (Platform.OS === 'android') ? 45 : 55,
    top: (Platform.OS === 'android') ? deviceHeight / 25 : deviceHeight / 12,
    //width : 80,
    //height : 80
  },
  textDrawer1: {
    color : 'white',
    alignItems: 'center',
    marginTop : 35,
  },
  textDrawer2: {
    color : 'white',
    alignItems: 'center',
  },
   /*
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: Platform.OS === "android" ? 7 : 5
  },
 
  sidebarIcon: {
    fontSize: 21,
    color: "#fff",
    lineHeight: Platform.OS === "android" ? 21 : 25,
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  */
  mnuItem:{
    fontSize:12,
    color: '#727a7a'
  },
  mnuDevider :{
    fontSize:14,
    color: '#d35400'
  },
  mnuIcon :{
    color: '#727a7a'
  },
  mnuItemSelected:{
    fontSize:12,
    fontWeight:'bold',
    color: '#d35400'
  },
  mnuIconSelected :{
    fontWeight:'bold',
    color: '#d35400'
  },
  mnuItemRight:{
    fontSize:12,
    color: '#d35400'
  },
  listItem :{
    marginRight: 20,
    borderBottomWidth:1,
    borderColor: '#ecf0f1'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#d35400',
    opacity: 0.8
  },
  textLabel:{
    fontSize:12
  }
};
