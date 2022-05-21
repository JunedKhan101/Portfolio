import React, { useState } from "react";
import { send } from "emailjs-com";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../css/contact.css";
require("dotenv").config();

export default function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [bool, setBool] = useState(undefined);
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    document.getElementById("loading").style.display = "block";
    document.getElementsByClassName("form")[0].style.display = "none";

    send(
      process.env.REACT_APP_SERVICEID,
      process.env.REACT_APP_TEMPLATEID,
      toSend,
      process.env.REACT_APP_USERID
    )
      .then((response) => {
        setBool(true);
        document.getElementById("loading").style.display = "none";
      })
      .catch((err) => {
        setBool(false);
        document.getElementById("loading").style.display = "none";
        console.log("SENDING MSG FAILED: ", err);
      });
  };
  const renderForm = () => {
    if (bool === undefined) {
      return (
        <div>
          <h2 className="form-heading">Send me a message</h2>
          <form onSubmit={onSubmit} className="form">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                name="email"
                onChange={handleChange}
                type="email"
              />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                required
                name="subject"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                name="message"
                onChange={handleChange}
                as="textarea"
                rows={5}
              />
            </Form.Group>
            <Button className="submit-btn" variant="dark" type="submit">
              Submit
            </Button>
          </form>
        </div>
      );
    } else if (bool === true) {
      return (
        <div className="form-msg">
          <h2 className="heading-success">Message sent successfully!</h2>
          <Button
            className="back-btn"
            onClick={() => setBool(undefined)}
            variant="dark"
          >
            Back
          </Button>
        </div>
      );
    } else {
      return (
        <div className="form-msg">
          <h2 className="heading fail">Oops! Something went wrong :(</h2>
          <Button
            className="back-btn"
            onClick={() => setBool(undefined)}
            variant="primary"
          >
            Back
          </Button>
        </div>
      );
    }
  };
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-heading">Contact</h1>
      <small className="primary-email">junedkhanc101@gmail.com</small>
      <Container className="contact">
        <Row>
          <Col>
            <div className="social-media">
              <h2 className="chat-heading">Wanna Chat?</h2>
              <div className="icons">
                <SocialIcon
                  target="_blank"
                  url="https://www.linkedin.com/in/juned-khan-22b041204/"
                />
                <SocialIcon
                  target="_blank"
                  url="https://twitter.com/JunedK101"
                />
                <SocialIcon
                  target="_blank"
                  url="https://www.instagram.com/its_juned42/"
                />
                <SocialIcon
                  target="_blank"
                  url="https://www.facebook.com/JunedKhanc101"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="form-container">
              {renderForm()}
              <img id="loading" src="static/loading.gif" alt="loading" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}