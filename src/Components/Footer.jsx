import React, { useContext } from "react";
import { Row, Container, Navbar, Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "../App";
import "../css/footer.css";

export default function Footer() {
    const { themeflag, theme, toggleTheme } = useContext(ThemeContext);
    const handleFacebookIconClick = (e) => {
		e.preventDefault();
		alert(`I don't use Facebook anymore`);
	};
	const handleInstagramIconClick = (e) => {
		e.preventDefault();
		alert(`I don't use Instagram anymore`);
	};
	return (
		<footer className={theme === "dark" ? "bg-dark" : "bg-light"}>
			<Container className="footer-container">
				<Row>
					<Navbar id="footer-navbar" variant={theme}>
						<Nav className="mx-auto my-auto footer-nav">
							<Nav.Link
								className="mynav-links resume-nav-link"
								href="/static/JunedKhan.pdf"
								target="_blank"
							>
								Resume
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/blog" target="_blank" rel="noopener noreferrer">
								Blog
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/about" target="_blank" rel="noopener noreferrer">
								About
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/projects" target="_blank" rel="noopener noreferrer">
								All Projects
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/gear" target="_blank" rel="noopener noreferrer">
								Gear
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/contact" target="_blank" rel="noopener noreferrer">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar>
				</Row>
				<Row>
					<div className="icons pb-4">
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
                            fgColor="white"
                            bgColor="black"
							target="_blank"
							url="https://github.com/JunedKhan101"
							rel="noopener noreferrer"
						/>
						<SocialIcon
							target="_blank"
							url="https://www.facebook.com/"
							rel="noopener noreferrer"
							onClick={handleFacebookIconClick}
						/>
					</div>
				</Row>
				<Row>
					<p className="text-center">&copy; 2023 Juned Khan</p>
				</Row>
			</Container>
		</footer>
	);
}
