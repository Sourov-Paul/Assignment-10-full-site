import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from './Banner/Banner';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
const Header = () => {
 

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Health Care</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={HashLink}  className="link_color"to="/home" >Home</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/services">Services</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/contact">Contact</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/login"> <i className="fas fa-user-circle profilrIcon"></i>Login</Nav.Link>

              <Navbar.Text>
                Signed in as: <a  href="#login">Souorv</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Banner></Banner>
      </div>
    );
};

export default Header;