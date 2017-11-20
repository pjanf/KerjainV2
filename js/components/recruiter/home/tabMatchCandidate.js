import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import styles from './styles';

export default class tabMatchCandidate extends Component {
	render() {
		return (
			<Content padder style={{ marginTop: 0 }}>
				<Card style={{ flex: 0 }}>
					<CardItem>
						<Body>
							<Text>
								Match Candidate List
							</Text>
						</Body>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
