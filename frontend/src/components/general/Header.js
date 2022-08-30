import React, {useEffect} from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

const Header = (props) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>DotKonnekt Task</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="ml-auto">
                  <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/edit-mapper'>
                    <Nav.Link>Update Mapper</Nav.Link>
                  </LinkContainer>
                  
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    )
}

export default Header
