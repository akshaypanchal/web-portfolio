import React, {Component} from 'react';
import {Switch , Route} from 'react-router-dom';

import Landingpage  from './landingpage';
import Contact from './contact';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';

const Main = () => (

	<Switch>

		<Route exact path = "/" component={Landingpage} />
		<Route  path = "/aboutme" component={AboutMe} />
		<Route  path = "/contact" component={Contact} />
		<Route  path = "/projects" component={Projects} />
		<Route  path = "/resume" component={Resume} />
	</Switch>
)
export default Main;
