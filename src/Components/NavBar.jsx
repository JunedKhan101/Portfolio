import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { Navbar, Nav, Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ThemeContext } from "./App";
import "../css/navbar.css";

function getRelativeURL() {
	const currentURL = window.location.href;
	const parsedURL = new URL(currentURL);
	return parsedURL.pathname || "/";
}

export default function NavBar() {
	const { themeflag, theme, toggleTheme } = useContext(ThemeContext);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const textColorStyle = {
		color: theme === "dark" ? "#EEE" : "",
	};
	var currentURL = getRelativeURL();
	return (
		<>
			<Navbar
				className="navbar-container flex-column"
				fixed="top"
				collapseOnSelect
				expand="lg"
				variant={theme}
			>
				<Container>
					<Navbar.Toggle
						aria-controls="responsive-navbar-nav"
						onClick={handleShow}
					/>
					<div className="brand-container">
						<Navbar.Brand className="nav-brand" href="/">
							Juned Khan
						</Navbar.Brand>
						&nbsp;
						<Nav.Link className="mynav-links dark-mode-toggler-mobile">
							<label>
								<Switch
									onChange={toggleTheme}
									checked={themeflag}
									width={60}
									offColor="#fecea8"
									onColor="#142d4c"
									offHandleColor="#f96d00"
									onHandleColor="#ffffff"
									uncheckedIcon={
										<img
											alt="sun"
											src="https://img.icons8.com/color/28/000000/sun--v1.png"
										/>
									}
									checkedIcon={
										<img
											alt="moon"
											src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/28/000000/external-moon-magic-and-fairy-tale-icongeek26-linear-colour-icongeek26.png"
										/>
									}
								/>
							</label>
						</Nav.Link>
					</div>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto my-auto my-nav">
							<Nav.Link
								className="mynav-links resume-nav-link"
								href="/static/JunedKhan.pdf"
								target="_blank"
							>
								Resume
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/blog">
								Blog
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/about">
								About
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/projects">
								All Projects
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/gear">
								Gear
							</Nav.Link>
							<Nav.Link className="mynav-links" href="/contact">
								Contact
							</Nav.Link>
							<Nav.Link className="mynav-links dark-mode-toggler">
								<label>
									<Switch
										onChange={toggleTheme}
										checked={themeflag}
										width={60}
										offColor="#fecea8"
										onColor="#142d4c"
										offHandleColor="#f96d00"
										onHandleColor="#ffffff"
										uncheckedIcon={
											<img
												alt="sun"
												src="https://img.icons8.com/color/28/000000/sun--v1.png"
											/>
										}
										checkedIcon={
											<img
												alt="moon"
												src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/28/000000/external-moon-magic-and-fairy-tale-icongeek26-linear-colour-icongeek26.png"
											/>
										}
									/>
								</label>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Offcanvas
						show={show}
						onHide={handleClose}
						className={theme === "dark" ? "bg-dark" : "bg-white"}
					>
						<Offcanvas.Header
							closeButton
							closeVariant={theme === "dark" ? "white" : null}
						>
							<Offcanvas.Title style={textColorStyle}>
								<Navbar.Brand className="nav-brand" href="/">
									Juned Khan
								</Navbar.Brand>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Navbar
								className={theme === "dark" ? "bg-dark" : "bg-white"}
								variant={theme}
							>
								<Nav
									className={
										theme === "dark"
											? "bg-dark offcanvas-nav flex-column"
											: "bg-white offcanvas-nav flex-column"
									}
								>
									<Nav.Link
										className="mynav-links resume-nav-link"
										href="/static/JunedKhan.pdf"
										target="_blank"
									>
										Resume
									</Nav.Link>
									<Nav.Link className="mynav-links" href="/blog">
										Blog
									</Nav.Link>
									<Nav.Link className="mynav-links" href="/about">
										About
									</Nav.Link>
									<Nav.Link className="mynav-links" href="/projects">
										All Projects
									</Nav.Link>
									<Nav.Link className="mynav-links" href="/contact">
										Contact
									</Nav.Link>
									<Nav.Link className="mynav-links" href="/gear">
										Gear
									</Nav.Link>
								</Nav>
							</Navbar>
						</Offcanvas.Body>
					</Offcanvas>
				</Container>
				<Container
					className={
						currentURL === "/"
							? "custom-nav-container"
							: "d-none custom-nav-container"
					}
				>
					<div className="container-wrapper d-flex flex-column align-items-center justify-content-center w-100">
						<p className="page-nav-info">On this page:&nbsp;</p>
						<Nav className="my-auto flex-row custom-nav justify-content-around">
							<Nav.Link className="mynav-links" href="#bio">
								Background
							</Nav.Link>
							<Nav.Link className="mynav-links" href="#projects">
								Top Projects
							</Nav.Link>
							<Nav.Link className="mynav-links" href="#skills">
								Skills
							</Nav.Link>
							<Nav.Link className="mynav-links" href="#contact">
								Contact
							</Nav.Link>
						</Nav>
					</div>
				</Container>
			</Navbar>
		</>
	);
}
export { getRelativeURL };