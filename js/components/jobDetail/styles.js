const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container :{
    backgroundColor : '#FFF'
  },
   photoProfile: {
    alignItems: 'center',
    marginTop : 25,
    width : 100,
    height : 100,
  }
};
