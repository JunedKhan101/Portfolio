import React, { useState } from "react";
import Switch from "react-switch";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  const [togglestate, setToggleState] = useState(false);
  const handleChange = () => {
    setToggleState(togglestate => !togglestate);
  }
  var navstyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  var linkstyle = {
    color: "#000000",
  };
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="light" style={{'backgroundColor': '#F5F5F5'}}>
      <Container>
        <Navbar.Brand href="#intro" style={linkstyle}>Juned Khan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={navstyle} className="mx-auto my-auto">
            <Nav.Link
              className="mynav-links"
              style={linkstyle}
              href="static/JunedKhan.pdf"
              target="_blank"
            >
              Resume
            </Nav.Link>
            <Nav.Link className="mynav-links" style={linkstyle} href="#about">
              About
            </Nav.Link>
            <Nav.Link
              className="mynav-links"
              style={linkstyle}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link className="mynav-links" style={linkstyle} href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="mynav-links" style={linkstyle} href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link className="mynav-links" style={linkstyle} href="#contact">
            <label>
              <Switch onChange={handleChange} 
                checked={togglestate}
                width={60}
                offColor="#fecea8"
                onColor="#142d4c"
                offHandleColor="#f96d00"
                onHandleColor="#ffffff" 
                uncheckedIcon={
                  <img alt="sun" src="https://img.icons8.com/color/28/000000/sun--v1.png"/>
                } 
                checkedIcon={
                  <img alt="moon" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/28/000000/external-moon-magic-and-fairy-tale-icongeek26-linear-colour-icongeek26.png"/>
                }
                />
            </label>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
