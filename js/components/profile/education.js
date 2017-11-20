
import React, { Component } from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label } from 'native-base';

import styles from './styles';

const datas = [
  {
    instituteName: 'Binus University',
    graduation: '22 Sept 2013',
    degree: 'S1',
    major: 'Information Technology',
  },
  {
    instituteName: 'Gunadarma University',
    graduation: '17 Jun 2017',
    degree: 'S2',
    major: 'Information Technology',
  },
];

export default class Education extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
    	<Container style={styles.container}>
      		<Content style={styles.content}>
		      	<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10}}>
		      	<View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
		      		<Icon name="school"/>
		            <Text style={{marginLeft: 10, marginTop : 5, color : '#189DAE', fontSize : 17}}>Education</Text>
		            <Right>
		              <TouchableOpacity>
		                <Icon name="add" style={{color : '#189DAE', marginRight : 10}}/>
		              </TouchableOpacity>
		            </Right>
		          </View>
					<List dataArray={datas} renderRow={(data) =>
			          	<CardItem style={{marginTop : 5, marginBottom : 5, paddingBottom : 10}}>
			           	 	<Body>
			           	 		<View style={{flexDirection : 'row', flex : 6}}>
					           	  	<TouchableOpacity style={{flex : 5}}>	
						              <Text style={{fontSize: 18, color : '#189DAE'}}>{data.instituteName}</Text>
						            </TouchableOpacity>
							        <Right>
							        	<TouchableOpacity>
							        		 <Icon active name="remove-circle" style={{flex : 1, color : '#189DAE'}} />
							        	</TouchableOpacity>
							        </Right>
					            </View>
					            <View>
						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Graduation</Text>
						            <Text style={{marginTop : 5}}>{data.graduation}</Text>

						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Degree</Text>
						            <Text style={{marginTop : 5}}>{data.degree}</Text>

						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Major</Text>
						            <Text style={{marginTop : 5}}>{data.major}</Text>
						        </View>
			           		</Body>
			          	</CardItem>
			          }>
			        </List>
			    </Card>
		    </Content>
		</Container>
    );
  }
}
