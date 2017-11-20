const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container :{
    backgroundColor : '#FFF'
  },
  textLabel:{
    fontSize:12
  }
};
