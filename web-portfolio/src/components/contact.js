import React, {Component} from 'react';
import contact from '../contact.png';

class Contact extends Component {
	render(){
		return(
					<div className="tc">
						<img alt="contact-icon" src={contact}  widht="200" height="200" />
						<div className="banner-text o-80 white pb1">
							<h3>Akshaykumar Panchal</h3>
							<h5>Contact No.: +1 (437) 996-4933</h5>
							<h5>Skype ID: live:akshaypanchal27_1</h5>
							<h5>Email ID: akshaypanchal67@gmail.com</h5>
							<h5>Address: 7, Melpham Court, Etobicoke, ON M9V 2H2.</h5>
						</div>
					</div>

			);
	}
}

export default Contact;