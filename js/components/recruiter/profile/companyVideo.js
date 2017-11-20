
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, Left } from 'native-base';

import styles from './style';

import Video from 'react-native-video';

const promote = require('../../../../img/promote.mp4');

export default class SelfPromotingVideo extends Component { // eslint-disable-line

  constructor(props) {
      super(props);
      this.state = {    
          rate: 1,
          volume: 1,
          muted: false,
          resizeMode: 'contain',
          duration: 0.0,
          currentTime: 0.0,
          paused: true,
      };
    }

  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({ paused: true })
    this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume === volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  render() { // eslint-disable-line
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
            <Icon name="videocam"/>
            <Text style={{marginLeft : 10, marginTop : 5, color : '#d35400', fontSize : 17}}>Upload Company Video</Text>
          </View>
          <View style={{flexDirection : 'row', flex : 2}}>
              <Button iconLeft info style={{marginRight : 5, flex : 1}}>
                <Icon name='camera' />
                <Text>Take Video</Text>
              </Button>
              <Button iconLeft info style={{marginLeft : 5, flex : 1}}>
                <Icon name='cloud-upload' />
                <Text>Upload Video</Text>
              </Button>
            </View>
          <Card bordered style={{marginTop : 20}}>
            <CardItem>
            <TouchableOpacity
              style={styles.fullScreen}
              onPress={() => this.setState({ paused: !this.state.paused })}
            >
              <Text>Click to Play/ Pause Video</Text>
            </TouchableOpacity>
            </CardItem>
            
              <CardItem style={{height : 180, width : null}}>
                <Video
                  source={promote}
                  ref={(ref: Video) => { this.video = ref }}
                  /* For ExoPlayer */
                  /* source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }} */ 
                  rate={1.0}                              // 0 is paused, 1 is normal.
                   volume={1.0}                            // 0 is muted, 1 is normal.
                   muted={false}                           // Mutes the audio entirely.
                   paused={this.state.paused}              // Pauses playback entirely.
                   resizeMode="stretch"                      // Fill the whole screen at aspect ratio.*
                   repeat={true}                           // Repeat forever.
                   playInBackground={false}                // Audio continues to play when app entering background.
                   playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                   ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                   progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                   onLoadStart={this.loadStart}            // Callback when video starts to load
                   onLoad={this.setDuration}               // Callback when video loads
                   onProgress={this.setTime}               // Callback every ~250ms with currentTime
                   onEnd={this.onEnd}                      // Callback when playback finishes
                   onError={this.videoError}               // Callback when video cannot be loaded
                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                   style={styles.backgroundVideo}
                />
              </CardItem>
                   
                   
          </Card>
        </Content>
      </Container>
    );
  }
}
