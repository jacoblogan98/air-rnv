import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../RNV-Logo.png"


function NavBar() {
  return (
    <div>
      <Navbar bg="sand" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
            src={logo}
            width="50"
            height="50"
            className="me-4"
            alt="RNV Logo"
            />
            Air R&V
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/rvlist">RV Listing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
