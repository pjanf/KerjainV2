const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container :{
    backgroundColor : '#E0E0E0',
  },
  content : {
    marginTop : 10,
    marginLeft : 10,
    marginRight : 10,
    marginBottom : 10,
  },
  logo: {
    //left: Platform.OS === "android" ? 40 : 50,
    //top: Platform.OS === "android" ? 20 : 20,
    alignSelf : 'center',
    resizeMode: 'cover',
    width: 300,
    height: 150
  },
};
