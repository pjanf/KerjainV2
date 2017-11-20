const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container :{
    backgroundColor : '#cccccc'
  },
  cardListItem:{
    borderBottomWidth:0,
    height:3,
    marginLeft:0,
  },
  cardListText:{
    fontSize:13, 
    fontFamily:'Roboto',
    marginLeft:4
  },
  cardListTextRight:{
    fontSize:13, 
    fontFamily:'Roboto',
    color:'#d35400'
  }
};
