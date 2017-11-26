const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container :{
    backgroundColor : '#E0E0E0'
  },
   photoProfile: {
    alignItems: 'center',
    marginTop : 25,
    width : 100,
    height : 100,
  },
  content : {
    marginTop : 10,
    marginLeft : 10,
    marginRight : 10,
    marginBottom : 10,
  },
  drawerCover: {
    alignSelf: 'stretch',
    // resizeMode: 'cover',
    height: deviceHeight / 3.7,
    width: null,
    position: 'relative',
    alignItems: 'center',
  },
  drawerImage: {
    // top: (Platform.OS === 'android') ? 45 : 55,
    top: (Platform.OS === 'android') ? deviceHeight / 25 : deviceHeight / 12,
    //width : 80,
    //height
  },
  textDrawer1: {
    color : 'white',
    alignItems: 'center',
    fontSize : 20,
    marginTop : 35,
  },
  textDrawer2: {
      color : 'white',
      alignItems: 'center',
    },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#189DAE',
    opacity: 0.7
  },
  containerVideo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
};
