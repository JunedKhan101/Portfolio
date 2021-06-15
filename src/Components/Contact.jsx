import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import "../css/contact.css";

export default function Contact() {
	return (
		<div className="contact-container" id="contact">
			<h1 className="heading">Contact</h1>
			<Container className="contact">
			<Row>
			<Col>
				<div className="social-media">
					<h2 className="heading">Let's Chat!</h2>
					<div className="icons">
						<SocialIcon target="_blank" url="https://www.linkedin.com/in/juned-khan-22b041204/" />
						<SocialIcon target="_blank" url="https://twitter.com/JunedK101" />
						<SocialIcon target="_blank" url="https://www.instagram.com/its_juned42/" />
						<SocialIcon target="_blank" url="https://www.facebook.com/JunedKhanc101" />
					</div>
				</div>
			</Col>
			<Col>
				<div className="form-container">
					<h2 className="heading">Send me a message</h2>
					<form className="form">
						<Form.Group controlId="Name">
							<Form.Label>Name</Form.Label>
						    <Form.Control type="text" />
						 </Form.Group>
						 <Form.Group controlId="Email">
						    <Form.Label>Email address</Form.Label>
						    <Form.Control type="email" />
						</Form.Group>
						<Form.Group controlId="Subject">
							<Form.Label>Subject</Form.Label>
						    <Form.Control type="text" />
						 </Form.Group>
						<Form.Group controlId="Message">
						    <Form.Label>Message</Form.Label>
						    <Form.Control as="textarea" rows={5} />
						</Form.Group>
						<Button variant="dark" type="submit">Submit</Button>
					</form>
				</div>
			</Col>
				</Row>
			</Container>
		</div>
	);
}