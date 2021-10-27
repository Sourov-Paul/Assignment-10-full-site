import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from './Banner/Banner';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const{person,logOut}=useAuth()
 

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home"><i className="fas fa-user-md m-1"></i>Health Care</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={HashLink}  className="link_color"to="/home" >Home</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/services">Services</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/contact">Contact</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/article">About Us</Nav.Link>

{     
person.email ?
<span className="link_color border p-1" style={{marginRight:"5px"}} onClick={logOut}><i className="logout m-1 fas fa-sign-out-alt"></i>Logout</span>
:
<Nav.Link as={HashLink} className="link_color border"  style={{marginRight:"5px"}} to="/login"><i className="fas fa-sign-in-alt login m-1"></i>Login</Nav.Link>
}
<span style={{color:"white"}}><i className=" m-1 far fa-user-circle"></i>{person.displayName}</span>

             
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Banner></Banner>



        
      </div>
    );
};

export default Header;