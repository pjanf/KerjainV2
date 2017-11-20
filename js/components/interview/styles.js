const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container :{
    backgroundColor : '#FFF',
    width:null
  },
  content:{
    flex:1
  },
  viewContainer :{
    backgroundColor : '#FFF',
    flex:1,
    alignItems : 'center', 
    justifyContent: 'center',
    marginTop: deviceHeight / 6,
    marginLeft:20,
    marginRight:20,
  },
  buttonContainer:{
    marginTop:20, 
    marginLeft:deviceWidth / 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#189DAE'
  },
  colMain:{
    backgroundColor:'#CCC',
    width: null,
    height: null
  },
  colRecord:{
    backgroundColor:'#189DAE',
    width:100,
    height:null
  },
  rowVideo:{
    backgroundColor:'#FFF',
    height:deviceHeight - 368
  },
  rowQuestion:{
    backgroundColor:'#f4f4f4',
    height: 80,
    borderTopWidth:1,
    borderColor:'#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowColQuestionText:{
    width: deviceWidth - 200,
  },
  rowColQuestionButton:{
    borderLeftWidth:1,
    width: 100,
    borderColor:'#e7e7e7'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth:1
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
  }
};
