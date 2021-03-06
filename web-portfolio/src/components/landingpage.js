import React, {Component} from 'react';
import Tilt from 'react-tilt';
import '../App.css';
import Logo  from '../LogoNew.jpg';



class Landingpage extends Component {
	render(){
		return(
					<div className = "landingpage">
						
							<Tilt className="Tilt center pv3" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 								<div className="Tilt-inner"><img src ={Logo} alt="logo" style = {{ height: 250, width: 250 }}  /></div>
							</Tilt>

						<div className="banner-text mv0 white">
							<h6>"Failure will never overtake me if my determination to succeed is strong enough"</h6>
						</div>		

						<div className = 'banner-text mv0'>
							<h1 className="mv0">Web Application Developer</h1>
							<hr  />
							<p className='pv1'>HTML5/CSS3 | Bootsrap | React | Redux | JavaScript | PHP | NodeJS | ExpressJS | SQL | AngularJS</p>
							
							<div className="social-links">
								<a href="https://www.linkedin.com/in/akshay-panchal/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								<a href="https://github.com/akshaypanchal" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
								<a href="https://www.freecodecamp.org/akkipanchal" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-free-code-camp" aria-hidden="true" />
								</a>								
							</div>

						</div>

	 			</div>

			);
 }}

export default Landingpage;