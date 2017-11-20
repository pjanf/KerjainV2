const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  
  logoContainer: {
    flex: 1,
    alignItems: "center",
    flexGrow:1,
    justifyContent:'center',
    marginTop: deviceHeight / 30,
  },
  titleContainer: {
    color:'#FFF',
    textAlign: 'center',
    marginTop:5,
    fontSize:15,
    opacity:0.8
  },
   titleContainer1: {
    color:'#FFF',
    textAlign: 'center',
    marginTop:5,
    fontSize:18,
    opacity:0.8
  },
  logo: {
    // left: Platform.OS === "android" ? 40 : 50,
    // top: Platform.OS === "android" ? 20 : 20,
    width: 200,
    height: 100,
  },
  contentForm:{
    flex:1,
    marginTop: 20,
    marginLeft:20,
    marginRight:40,
    marginBottom: 20
  },
  socialMediaForm: {
      flexDirection : 'row',
      flex : 1,
      alignItems : 'center',
      marginTop:20,
      justifyContent: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent:'center',
    marginBottom: 20
  }
};
