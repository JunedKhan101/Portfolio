import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
  var navstyle = {
    'border': '1px solid red',
    'width': '100%',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-around'
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={navstyle} className="mx-auto my-auto">
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#pricing">Skills</Nav.Link>
          <Nav.Link href="#pricing">Resume</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}