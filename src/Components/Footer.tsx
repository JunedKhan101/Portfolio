import { MouseEvent } from "react";
import { Row, Container, Navbar, Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "../context/ThemeContext";
import "../css/footer.css";

export default function Footer() {
    const { theme } = useTheme();
    const handleFacebookIconClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert(`I don't use Facebook anymore`);
	};
	return (
		<footer className="my-footer">
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
					<div className="icons-footer pb-4">
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
					<p className="text-center m-0">&copy; {new Date().getFullYear()} Juned Khan</p>
					<p className="text-center m-0 pb-4">All rights reserved</p>
				</Row>
			</Container>
		</footer>
	);
}
