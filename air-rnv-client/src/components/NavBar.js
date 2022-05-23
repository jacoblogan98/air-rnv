import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../RNV-Logo.png";

function NavBar() {
  return (
    <Navbar sticky="top" bg="sand" expand="lg">
      <Container className="ms-2 ">
        <Navbar.Brand href="/" className="bubble-font big-font">
          <Row>
            <Col>
              <img
                src={logo}
                width="90"
                height="75"
                className="me-2"
                alt="RNV Logo"
              />
            </Col>
            <Col>
              <h2 className="big-font mt-4 me-2 text-maple">Air R&V</h2>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0">
            <Nav.Link className="mt-3" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="mt-3" href="/listRv">
              List an RV for Rent!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
