
import React, { Component } from 'react';

import { Image, TouchableOpacity } from 'react-native';

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label, DeckSwiper, Left, Thumbnail } from 'native-base';

import styles from './styles';

const dataon = require('../../../img/companyLogo/dataon.jpg');
const traveloka = require('../../../img/companyLogo/traveloka.jpg');
const bukalapak = require('../../../img/companyLogo/bukalapak.jpg');

const datas = [
  {
    img : dataon,
    time: '10 minutes ago',
    jobPosition: 'Software Developer',
    companyName : 'PT Indodev Niaga',
    salary : 'IDR 5.000.000 - 7.000.000',
    location : 'Tangerang Selatan - Bintaro',
  },
  {
    img : traveloka,
    time: '17 minutes ago',
    jobPosition: 'Project Manager',
    companyName : 'PT Traveloka',
    salary : 'IDR 6.000.000 - 8.000.000',
    location : 'Jakarta Barat - Slipi',

  },
  {
    img : bukalapak,
    time: '5 Agustus 2017',
    jobPosition: 'Quality Insurance',
    companyName : 'PT BukaLapak',
    salary : 'IDR 4.000.000 - 6.000.000',
    location : 'Jakarta Selatan - Kemang',
  },
];

export default class JobAlert extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Content style={{backgroundColor : '#E0E0E0'}}>
      <View style={{height : 500}}>
        <View style={{flexDirection : 'row', marginBottom : 20, marginTop : 20}}>
          <Text style={{color : '#189DAE', fontSize : 18}}> Trending Jobs </Text>
          <Right>
            <Icon name="search" style={{marginRight : 20, color : '#189DAE'}}/>
          </Right>
        </View >
        <DeckSwiper
            dataSource={datas}
            renderItem={item =>
              <Card style={{ elevation: 3, marginBottom : 20, marginRight : 20, marginLeft : 20}}>
                <CardItem>
                  <Text style={{color : 'grey'}}>{item.time}</Text>
                </CardItem>
                <View style={{alignItems : 'center'}}>
                  <CardItem>
                    <Thumbnail large source={item.img} style={{height : 60, width : 100}} />
                  </CardItem>
                  <CardItem>
                    <View style={{alignItems : 'center'}}>
                    <Body>
                        <Text style={{fontSize : 20, color : '#189DAE'}}>{item.companyName}</Text>
                        <Text style= {{marginTop : 20}}>{item.jobPosition}</Text>
                        <View style={{flexDirection : 'row'}}>
                          <Icon name="cash"/>
                          <Text>  {item.salary}</Text>
                        </View>
                        <View style={{flexDirection : 'row'}}>
                          <Icon name="pin"/>
                          <Text>  {item.location}</Text>
                        </View>
                    </Body>
                    </View>
                  </CardItem>
                  <CardItem style={{backgroundColor : '#ecf0f1'}}>
                    <View style={{flexDirection : 'row', flex : 2, alignItems : 'center'}}>
                      <Button info style={{flex : 1, marginRight : 5, marginLeft : 5}}>
                        <Text style={{fontSize : 12}}> Not Interested</Text>
                      </Button>
                      <Button info style={{flex : 1, marginRight : 5, marginLeft : 5}}>
                        <Text style={{fontSize : 12}}>           Apply</Text>
                      </Button>
                    </View>
                  </CardItem>
                </View>
              </Card>
            }
          />


      </View>
                    
      </Content>
    );
  }
}
