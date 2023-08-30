import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const NavigationBar = () => {
  return (
    <section className='navigationbar'>
    <Navbar expand="lg"  className="bg-body-tertiary sticky-top">
      <Container fluid>
        <Navbar.Brand href="/" className='fw-bold'>Senchola University</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="/"  className="fw-bold" >Home</Nav.Link>
            <Nav.Link href="/aboutus" className="fw-bold">About Us</Nav.Link>
            <Nav.Link href="/services" className="fw-bold">Services</Nav.Link>
            <Nav.Link href="/whysenchola" className="fw-bold">Why Senchola</Nav.Link>
            <Nav.Link href="/forms" className="fw-bold">Form</Nav.Link> 
            <Nav.Link href="/contactus" className="fw-bold">Contact Us</Nav.Link>
            <Nav.Link href="/login" className="fw-bold"><Button variant="outline-dark" size="sm" className="rounded-pill">Login</Button>{' '}</Nav.Link>
            <Nav.Link href="/signup" className="fw-bold"><Button variant="success" size="sm" className="rounded-pill" >Sign Up</Button>{' '}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default NavigationBar