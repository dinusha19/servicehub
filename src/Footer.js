import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-5">
      <Container>
        <Navbar.Brand href="#home">ServiceHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#faqs">FAQs</Nav.Link>
            <Nav.Link href="#review">Review</Nav.Link>
            <Nav.Link href="#feedback">Feedback</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contact"> Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Footer;