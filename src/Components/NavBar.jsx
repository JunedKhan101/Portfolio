import React, { useContext } from "react";
import Switch from "react-switch";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ThemeContext } from "./App";
import "../css/navbar.css";

export default function NavBar() {
  const {themeflag, theme, toggleTheme} = useContext(ThemeContext);
  return (
    <Navbar className="navbar-container" fixed="top" collapseOnSelect expand="lg" variant={theme}>
      <Container>
        <Navbar.Brand className="nav-brand" href="#intro">Juned Khan</Navbar.Brand>&nbsp;
        <Nav.Link className="mynav-links dark-mode-toggler-mobile">
            <label>
              <Switch onChange={toggleTheme} 
                checked={themeflag}
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto my-auto my-nav">
            <Nav.Link
              className="mynav-links"
              href="static/JunedKhan.pdf"
              target="_blank"
            >
              Resume
            </Nav.Link>
            <Nav.Link className="mynav-links" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="mynav-links" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link
              className="mynav-links"
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link className="mynav-links" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="mynav-links" href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link className="mynav-links dark-mode-toggler">
            <label>
              <Switch onChange={toggleTheme} 
                checked={themeflag}
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
