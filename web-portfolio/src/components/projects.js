import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import reactIcon from '../react-icon.png';

class Projects extends Component {
	render(){
		return(
				<div>
					<div>
						<Card className= 'bg-light-green tc dib br3 ma2 grow bw2 o-70 shadow-S' style={{ background:'white' , width:'18rem'}}>
						  <Card.Body>
						    <Card.Subtitle className="b f3 1h-copy pa2">RoboFriends</Card.Subtitle>
						    <Card.Img variant="top" src={reactIcon} />
						    <Card.Text className="fw6 tj pa2 ">
						      Simple React based Single Page Application showing  all the core conepts of React library, also used tachyons to style the webpage.
						    </Card.Text>
						    <Card.Link className=" ma3" href="https://github.com/akshaypanchal/RoboFriends">Source Code</Card.Link>
						    <Card.Link className=" ma3" href="#">Live Link</Card.Link>
						  </Card.Body>
						  <div className="ma2"></div>
						</Card>
					
						<Card className= 'bg-light-green tc dib br3 pas3 ma2 grow bw2 o-60 shadow-S' style={{ background:'white', width: '18rem' }}>
						  <Card.Body>
						    <Card.Subtitle className="b f3 1h-copy pa2">Smartbrain -  Front End</Card.Subtitle>
						    <Card.Img variant="top" src={reactIcon} />
						    <Card.Text className="fw6 tj pa2">
						     	Deployed React based Application on Heroku,  Integrated with Clarifai Face Detection API,
						     	 Ajax with HTML, CSS. 
						    </Card.Text>
						    <Card.Link className="ma3 pa2" href="https://github.com/akshaypanchal/SmartBrain---Front-End">Source Code</Card.Link>
						    <Card.Link className="ma3" href="https://face-mind.herokuapp.com">Live Link</Card.Link>
						  </Card.Body>
						  <div className="ma2"></div>
						</Card>
					
						<Card className= 'bg-light-green tc dib br3 pas3 ma2 grow bw2 o-60 shadow-S' style={{ background:'white', width: '18rem' }}>
						  <Card.Body>
						    <Card.Subtitle className="b f3 1h-copy pa2">Smartbrain - Back End</Card.Subtitle>
						    <Card.Img variant="top" src={reactIcon} />
						    <Card.Text className="fw6 tj pa2">
						     Implemented application using Express handlebars modules, Node.js files and store data using PostgreSQL. 
						    </Card.Text>
						    <Card.Link className="ma3 pa2" href="https://github.com/akshaypanchal/SmartBrain---BackEnd">Source Code</Card.Link>
						    <Card.Link className="ma3" href="https://face-mind.herokuapp.com">Live Link</Card.Link>
						  </Card.Body>
						  <div className="ma2"></div>
						</Card>

						<Card className= 'bg-light-green tc dib br3 pas3 ma2 grow bw2 o-60 shadow-S' style={{ background:'white', width: '18rem' }}>
						  <Card.Body>
						    <Card.Subtitle className="b f3 1h-copy pa2">Weather Update</Card.Subtitle>
						    <Card.Img variant="top" src={reactIcon} />
						    <Card.Text className="fw6 tj pa2">
						     Deployed React based Application on Heroku Server, for showing live forecast data of different cities using OpenWeatherMap API. 
						    </Card.Text>
						    <Card.Link className="ma3 pa2" href="https://github.com/akshaypanchal/Weather_Update">Source Code</Card.Link>
						    <Card.Link className="ma3" href="http://wether-now.herokuapp.com/">Live Link</Card.Link>
						  </Card.Body>
						  <div className="ma2"></div>
						</Card>

						<Card className= 'bg-light-green tc dib br3 pas3 ma2 grow bw2 o-60 shadow-S' style={{ background:'white', width: '18rem' }}>
						  <Card.Body>
						    <Card.Subtitle className="b f3 1h-copy pa2">Portfolio Website</Card.Subtitle>
						    <Card.Img variant="top" src={reactIcon} /> 
						    <Card.Text className="fw6 tj pa2">
						     Created portfolio using React, Bootstrap to showcase personal progress in web development field with bunch of self-made projects. 
						    </Card.Text>
						    <Card.Link className="ma3 pa2" href="https://github.com/akshaypanchal/web-portfolio">Source Code</Card.Link>
						    <Card.Link className="ma3" href="#">Live Link</Card.Link>
						  </Card.Body>
						  <div className="ma2"></div>
						</Card>

						<Card className= 'bg-light-green tc dib br3 pas3 ma2 grow bw2 o-60 shadow-S' style={{ background:'white', width: '18rem' }}>
						  <Card.Body>
						    <Card.Subtitle className="b f3 1h-copy pa2">Fashion Point Store</Card.Subtitle>
						    <Card.Img variant="top" src={reactIcon} />
						    <Card.Text className="fw6 tj pa2">
						     Implementing online e-commerce website for fashion, with the help of popular technologies such as  React, Redux, GraphQL and Firebase. 
						    </Card.Text>
						    <Card.Link className="ma3 pa2" href="https://github.com/akshaypanchal/fashion-point">Source Code</Card.Link>
						    <Card.Link className="ma3" href="#">Live Link</Card.Link>
						  </Card.Body>
						  <div className="ma2"></div>
						</Card>
					</div>
				</div>

			);
	}
}

export default Projects;