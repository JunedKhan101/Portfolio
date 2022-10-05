import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { Navbar, Nav, Container } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { ThemeContext } from "./App";
import "../css/navbar.css";

export default function NavBar() {
  const { themeflag, theme, toggleTheme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const offcanvasStyle = {
    backgroundColor: theme === "dark" ? '#242526' : '#FFFFFF'
  }
  const offcanvasLinkStyle = {
    color: theme === "dark" ? '#FFFFFF' : '#000000',
  }
  return (
    <Navbar key='md' expand='md' fixed="top" className="navbar-container mb-3" variant={theme}>
      <Container>
        <Navbar.Brand className="nav-brand" href="#intro">Juned Khan</Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' onClick={() => handleShow()} />
        <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby='offcanvasNavbarLabel-expand-md'
          placement="start" style={offcanvasStyle} show={show} onHide={() => handleClose()}> 
          <Offcanvas.Header closeButton closeVariant={theme === "dark" ? "white" : ""}>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
              Juned Khan
            </Offcanvas.Title>
            <Nav.Link className="mynav-links" style={offcanvasLinkStyle}>
                <label>
                  <Switch onChange={toggleTheme}
                    checked={themeflag}
                    width={60}
                    offColor="#fecea8"
                    onColor="#142d4c"
                    offHandleColor="#f96d00"
                    onHandleColor="#ffffff"
                    uncheckedIcon={
                      <img alt="sun" src="https://img.icons8.com/color/28/000000/sun--v1.png" />
                    }
                    checkedIcon={
                      <img alt="moon" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/28/000000/external-moon-magic-and-fairy-tale-icongeek26-linear-colour-icongeek26.png" />
                    }
                  />
                </label>
              </Nav.Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3 offcanvas-nav">
              <Nav.Link
                className="mynav-links"
                href="static/JunedKhan.pdf"
                target="_blank"
                style={offcanvasLinkStyle}
              >
                Resume
              </Nav.Link>
              <Nav.Link className="mynav-links" href="#about" style={offcanvasLinkStyle} onClick={() => handleClose()}>
                About
              </Nav.Link>
              <Nav.Link
                className="mynav-links"
                href="#projects"
                style={offcanvasLinkStyle}
                onClick={() => handleClose()}
              >
                Projects
              </Nav.Link>
              <Nav.Link className="mynav-links" href="#skills" style={offcanvasLinkStyle} onClick={() => handleClose()}>
                Skills
              </Nav.Link>
              <Nav.Link className="mynav-links" href="#contact" style={offcanvasLinkStyle} onClick={() => handleClose()}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
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
          <Nav.Link className="mynav-links dark-mode-toggle-nav">
            <label>
              <Switch onChange={toggleTheme}
                checked={themeflag}
                width={60}
                offColor="#fecea8"
                onColor="#142d4c"
                offHandleColor="#f96d00"
                onHandleColor="#ffffff"
                uncheckedIcon={
                  <img alt="sun" src="https://img.icons8.com/color/28/000000/sun--v1.png" />
                }
                checkedIcon={
                  <img alt="moon" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/28/000000/external-moon-magic-and-fairy-tale-icongeek26-linear-colour-icongeek26.png" />
                }
              />
            </label>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
