import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import './nav.css';
function AppNavBar() {
  return (
    <Navbar bg='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='brand-text'>Project X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavBar