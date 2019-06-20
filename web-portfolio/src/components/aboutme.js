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
									<Tilt className="Tilt center" options={{ max : 25 }} style={{ height: 500, width: 450 }} >
 									<div className="Tilt-inner"><img src ={Profile} style = {{ height: 500, width: 450 }}  /></div>
							</Tilt>
								</Cell>

								<Cell col={6}></Cell>
						</Grid>
					</div>

			);
	}
}

export default AboutMe;