import React, { Component } from "react";
import { Image, View, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Button, Text, Header, Title, Body, Left, Right, Icon } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Orientation from 'react-native-orientation';
import Camera from 'react-native-camera';
import Swiper from 'react-native-swiper';


import styles from "./styles";



class InterviewStep1 extends Component {
	constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false
    };
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
  }

  startRecording = () => {
    if (this.camera) {
      this.camera.capture({mode: Camera.constants.CaptureMode.video})
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      this.setState({
        isRecording: true
      });
    }
  }

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopCapture();
      this.setState({
        isRecording: false
      });
    }
  }

  switchType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      icon = require('../../assets/ic_camera_rear_white.png');
    } else if (this.state.camera.type === front) {
      icon = require('../../assets/ic_camera_front_white.png');
    }

    return icon;
  }

  switchFlash = () => {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }

  get flashIcon() {
    let icon;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      icon = require('../../assets/ic_flash_auto_white.png');
    } else if (this.state.camera.flashMode === on) {
      icon = require('../../assets/ic_flash_on_white.png');
    } else if (this.state.camera.flashMode === off) {
      icon = require('../../assets/ic_flash_off_white.png');
    }

    return icon;
	}
		
	render() {
		return (
			<Container style={styles.container}>			
				<Header style={{ backgroundColor:'#189DAE' }}>
					<StatusBar barStyle="light-content" backgroundColor='#189DAE' />
					<Left>
						<Button
						transparent
						onPress={() => {
							Orientation.unlockAllOrientations()
							this.props.navigation.goBack()
						}}>
						<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Question Interview</Title>
					</Body>
				</Header>
				<Content>
					<View>
						<Grid>
								<Col style={styles.colMain} size={3}>
									<Row style={styles.rowVideo} size={3}>
											<View style={{ flex:1 }}>
												<Camera
														ref={(cam) => {
															this.camera = cam;
														}}
														style={styles.preview}
														aspect={this.state.camera.aspect}
														captureTarget={this.state.camera.captureTarget}
														type={this.state.camera.type}
														flashMode={this.state.camera.flashMode}
														onFocusChanged={() => {}}
														onZoomChanged={() => {}}
														defaultTouchToFocus
														mirrorImage={false}
												/>
												<View style={[styles.overlay, styles.topOverlay]}>
													<TouchableOpacity
														style={styles.typeButton}
														onPress={this.switchType}
													>
														<Image
															source={this.typeIcon}
														/>
													</TouchableOpacity>
													<TouchableOpacity
														style={styles.flashButton}
														onPress={this.switchFlash}
													>
														<Image
															source={this.flashIcon}
														/>
													</TouchableOpacity>
												</View>
											</View>	
									</Row>
									<Row style={styles.rowQuestion}>
										<Col style={styles.rowColQuestionText} size={3}>
											<Text style={{ fontSize:16, padding:15, }}>Can you tell me a little about your self?</Text>
										</Col>
										<Col style={styles.rowColQuestionButton}>
											<Button transparent 
													onPress={() => {
														Orientation.unlockAllOrientations()
														this.props.navigation.navigate("InterviewStep2")
													}}>
													<Icon name='play' style={{ fontSize:30 }} />
											</Button>
											<Text style={{ fontSize:12, padding:5 }}>Next Step</Text>
										</Col>
									</Row>
								</Col>
								<Col style={styles.colRecord}>
									<View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
										<Text style={{ color:'#FFF' }}>Time:</Text>
										<Text style={{ color:'#FFF', paddingBottom:20 }} >02:15</Text>
										<View>
												{
														!this.state.isRecording
														&&
														<TouchableOpacity
																style={styles.captureButton}
																onPress={this.startRecording}
														>
															<Image
																	source={require('../../assets/ic_videocam_36pt.png')}
															/>
														</TouchableOpacity>
														||
														<TouchableOpacity
																style={styles.captureButton}
																onPress={this.stopRecording}
														>
															<Image
																	source={require('../../assets/ic_stop_36pt.png')}
															/>
														</TouchableOpacity>
												}
										</View>			
													
									</View>
								</Col>
							</Grid>
					</View>
				</Content>
			</Container>
		);
	}
}
export default InterviewStep1;

/*

<Swiper style={styles.wrapper} showsButtons={false}>
													<View style={styles.slide1}>
														<Text style={styles.text}>Can you tell me a little about your self?</Text>
													</View>
													<View style={styles.slide2}>
														<Text style={styles.text}>Beautiful</Text>
													</View>
													<View style={styles.slide3}>
														<Text style={styles.text}>And simple</Text>
													</View>
											</Swiper>

													
										
*/