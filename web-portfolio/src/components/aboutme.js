import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';
import Tilt from 'react-tilt';
import Profile  from '../profile.JPG';

class AboutMe extends Component {

	render(){
		return(
					<div>
						<Grid>
								<Cell col={6} className="pv2">
									<Tilt className="Tilt center" options={{ max : 25 }} style={{ height: 700, width: 500 }} >
 										<div className="Tilt-inner"><img src ={Profile} alt="profile" style = {{ height: 700, width: 500 }}  /></div>
									</Tilt>
								</Cell>

								<Cell col={6}>
								<h2 className="tc white">About Me</h2>	
								<p className="tj white">
									My background as a Web Developer, along with my education in Computer Science, have allowed me to attain a strong foundation of technical skills.
									In addition to my Web Development skills, I also possess a great eye for design, and this is what I believe separates me from the rest of the competition.

								</p>
								<p className="tj white">
									I am highly skilled with HTML, CSS, and JavaScript. I have over three years of experience with each of these technologies, 
									and I am eager to learn even more technologies to sharpen my skillset. In addition to web technologies, I do have a passion for mobile technologies as well.
									I've worked on a few mobile side projects using Android and Swift.
								</p>
								<p className="tj white">
									Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization.
									In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements.
									This has allowed me to stay ahead of the curve and deliver exceptional work to all my employers, including those I've worked for on a project basis.
									I’ve attached a copy of my resume detailing my experience, along with links to websites and applications I’ve had the honor of working on.
								</p>
								<p className="white">
									I offer the following highlights to display my achievements and reinforce my abilities:							
								</p>
								<ul className="white">
									<li>Exceptional analytical and communication skills and Team player.</li>
									<li>Experience with Modern UI technologies such as HTML5, CSS3, Bootstrap, React, Redux.</li>
									<li>Experience with backend technologies such as PHP, Node, Express.js.</li>
									<li>Proven experience working with Version Control System such as Git.</li>
									<li>Experience and Great Exposure to Mobile development technologies such as Android and iOS.</li>
									<li>Great Exposure and basic experience with Sass, Less.</li>
								</ul>
								</Cell>
						</Grid>
					</div>

			);
	}
}

export default AboutMe;