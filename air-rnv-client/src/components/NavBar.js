import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../RNV-Logo.png";

function NavBar() {
  return (
    <Navbar sticky="top" bg="sand" expand="lg">
      <Container className="ms-2 ">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="85"
            height="70"
            className="me-4"
            alt="RNV Logo"
          />
          Air R&V
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/listRv">List an RV for Rent!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
