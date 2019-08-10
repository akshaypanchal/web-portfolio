import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../logo.jpg';

class Projects extends Component {
	render(){
		return(
				<div>
					<div>
						<Card className= 'bg-light-green tc dib br3 pas3 ma2 grow bw2 o-60 shadow-S' style={{ background:'white', width: '18rem' }}>
						  <Card.Body>
						    <Card.Title className="b f3 1h-copy pa2">RoboFriends</Card.Title>
						    <Card.Text className="fw6 tj pa2">
						      Simple React based Single Page Application showing  all the core conepts of React library, also used tachyons to style the webpage.
						    </Card.Text>
						    <Card.Link className="ma3 pa2" href="https://github.com/akshaypanchal/RoboFriends">Source Code</Card.Link>
						    <Card.Link className="ma3" href="#">Live Link</Card.Link>
						  </Card.Body>
						</Card>
					</div>
				</div>

			);
	}
}

export default Projects;