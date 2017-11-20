const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container :{
    backgroundColor : '#FFF'
  },
  drawerCover:{
    
  },
  textPostCard:{
    fontFamily:'Roboto',
    fontSize:14,
    color:'#189DAE'
  },
  iconPostCard:{
    fontSize:16,
    color:'#189DAE',
    paddingRight:10
  }
};
