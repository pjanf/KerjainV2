
import React, { Component} from 'react';

import { Image, StatusBar, TouchableOpacity } from "react-native";

import { Container, Content, Card, CardItem, Text, View, Body, List, ListItem, Icon, Right, Button, Label } from 'native-base';

import styles from './styles';

const datas = [
  {
    jobTitle: 'Software Developer',
    location: 'PT Traveloka',
    time: '24 Jan 2014 - 24 Jan 2017',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    jobTitle: 'Software Developer',
    location: 'PT AnaBatik',
    time: '24 Jan 2010 - 24 Jan 2014',
    jobdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

export default class WorkExperience extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      	<Container style={styles.container}>
      		<Content style={styles.content}>
		      	<Card bordered style={{backgroundColor : '#E0E0E0', paddingLeft : 10, paddingRight : 10, paddingBottom : 10}}>
			         <View style={{flexDirection : 'row', marginTop : 10, marginBottom : 20}}>
			            <Icon name="briefcase"/>
			            <Text style={{marginLeft : 10, marginTop : 5, color : '#189DAE', fontSize : 17}}>Work Experience</Text>
			            <Right>
			              <TouchableOpacity>
			                <Icon name="add" style={{color : '#189DAE', marginRight : 10}}/>
			              </TouchableOpacity>
			            </Right>
			        </View>
		         	<List dataArray={datas} renderRow={data =>
			          	<CardItem style={{marginTop : 5, marginBottom : 5, paddingTop : 10}}>
			           	 	<Body>
			           	 		<View style={{flexDirection : 'row', flex : 6}}>
					           	  	<TouchableOpacity style={{flex : 5}}>	
						              <Text style={{fontSize: 18, color : '#189DAE'}}>{data.location}</Text>
						            </TouchableOpacity>
							        <Right>
							        	<TouchableOpacity>
							        		 <Icon active name="remove-circle" style={{flex : 1, color : '#189DAE'}} />
							        	</TouchableOpacity>
							        </Right>
					            </View>
					            <View>
						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Working Periode</Text>
						            <Text style={{marginTop : 5}}>{data.time}</Text>

						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Position</Text>
						            <Text style={{marginTop : 5}}>{data.jobTitle}</Text>

						            <Text style={{fontSize : 15, marginTop : 10, color : 'grey'}}>Job Description</Text>
						            <Text style={{marginTop : 5}}>{data.jobdesc}</Text>
						        </View>
			           		</Body>
			          	</CardItem>
			          }
			        />
			    </Card>
		    </Content>
		</Container>
    );
  }
}
