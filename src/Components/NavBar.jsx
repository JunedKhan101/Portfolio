import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
  var navstyle = {
    'width': '100%',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-around'
  };
  var linkstyle = {
    'color': '#FFFFFF',
  };
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
	  <Navbar.Brand href="#intro">Juned Khan</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={navstyle} className="mx-auto my-auto">
          <Nav.Link className="mynav-links" style={linkstyle} href="#about">About</Nav.Link>
          <Nav.Link className="mynav-links" style={linkstyle} href="#projects">Projects</Nav.Link>
          <Nav.Link className="mynav-links" style={linkstyle} href="#skills">Skills</Nav.Link>
          <Nav.Link className="mynav-links" style={linkstyle} href="static/JunedKhan.pdf" target="_blank">Resume</Nav.Link>
          <Nav.Link className="mynav-links" style={linkstyle} href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}