import { useState, MouseEvent, useContext, useRef } from "react";
import { send } from "emailjs-com";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "./App";
import "../css/contact.css";

export default function Contact() {
	const { theme } = useContext(ThemeContext) as { theme: string };
	const [toSend, setToSend] = useState({
		name: "",
		subject: "",
		email: "",
		message: "",
	});
	const [bool, setBool] = useState<boolean | undefined>(undefined);
	const loadingRef = useRef(null);
	const formRef = useRef(null);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setToSend((prevToSend) => ({ ...prevToSend, [name]: value }));
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (loadingRef.current) {
			(loadingRef.current as HTMLElement).style.display = "block";
		}
		if (formRef.current) {
			(formRef.current as HTMLElement).style.display = "none";
		}

		send(
			import.meta.env.VITE_SERVICEID,
			import.meta.env.VITE_TEMPLATEID,
			toSend,
			import.meta.env.VITE_USERID
		)
			.then((response) => {
				setBool(true);
				if (loadingRef.current) {
					(loadingRef.current as HTMLElement).style.display = "none";
				}
			})
			.catch((err) => {
				setBool(false);
				if (loadingRef.current) {
					(loadingRef.current as HTMLElement).style.display = "none";
				}
				console.log("SENDING MSG FAILED: ", err);
			});
	};
	const handleFacebookIconClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert(`I don't use Facebook anymore`);
	};
	const handleInstagramIconClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert(`I don't use Instagram anymore`);
	};
	const renderForm = () => {
		if (bool === undefined) {
			return (
				<div className="form-subcontainer">
					<h2 className="form-heading">Send me a message</h2>
					<form onSubmit={onSubmit} className="form" ref={formRef}>
						<Form.Group className="form-group" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								required
								name="name"
								onChange={handleChange}
								type="text"
							/>
						</Form.Group>
						<Form.Group className="form-group" controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								required
								name="email"
								onChange={handleChange}
								type="email"
							/>
						</Form.Group>
						<Form.Group className="form-group" controlId="subject">
							<Form.Label>Subject</Form.Label>
							<Form.Control
								required
								name="subject"
								onChange={handleChange}
								type="text"
							/>
						</Form.Group>
						<Form.Group className="form-group" controlId="message">
							<Form.Label>Message</Form.Label>
							<Form.Control
								required
								name="message"
								onChange={handleChange}
								as="textarea"
								rows={5}
							/>
						</Form.Group>
						<Button
							className="submit-btn"
							type="submit"
						>
							Submit
						</Button>
					</form>
				</div>
			);
		} else {
			return (
				<div className="form-msg">
					<h2
						className={
							bool === true ? "heading-success" : "heading fail"
						}
					>
						{bool === true
							? "Message sent successfully!"
							: "Something went wrong :("}
					</h2>
					<Button
						className="back-btn"
						onClick={() => setBool(undefined)}
						variant={theme == "dark" ? "outline-secondary" : "outline-dark"}
					>
						Back
					</Button>
				</div>
			);
		}
	};
	return (
		<section className="contact-container" id="contact">
			<Container className="contact">
				<Row>
					<h2 className="contact-heading custom-header">Contact</h2>
				</Row>
				<Row>
					<small className="primary-email">
						junedkhanc101@gmail.com
					</small>
				</Row>
				<Row className="pt-4">
					<Col>
						<div className="social-media">
							<h2 className="chat-heading">Wanna Chat?</h2>
							<div className="icons">
								<SocialIcon
									target="_blank"
									rel="noopener noreferrer"
									url="https://www.linkedin.com/in/juned-khan-22b041204/"
								/>
								<SocialIcon
									target="_blank"
									rel="noopener noreferrer"
									url="https://twitter.com/dev_junedkhan"
								/>
								<SocialIcon
									target="_blank"
									url="https://www.instagram.com/"
									rel="noopener noreferrer"
									onClick={handleInstagramIconClick}
								/>
								<SocialIcon
									target="_blank"
									url="https://www.facebook.com/"
									rel="noopener noreferrer"
									onClick={handleFacebookIconClick}
								/>
							</div>
						</div>
					</Col>
					<Col>
						<div className="form-container">
							{renderForm()}
							<img
								id="loading"
								src="/static/loading.webp"
								alt="loading"
								ref={loadingRef}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
