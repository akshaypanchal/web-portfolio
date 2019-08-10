import React, {Component} from 'react';
import contact from '../contact.png';

class Contact extends Component {
	render(){
		return(
					<div className="tc">
						<img alt="contact-icon" src={contact}  widht="200" height="200" />
						<h2>Akshaykumar Panchal</h2>
						<h4>Contact No.: +1 (437) 996-4933</h4>
						<h4>Skype ID: live:akshaypanchal27_1</h4>
						<h4>Email ID: akshaypanchal67@gmail.com</h4>
						<h4>Address: 7, Melpham Court, Etobicoke, ON M9V 2H2.</h4>
					</div>

			);
	}
}

export default Contact;