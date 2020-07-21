import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Button,FormControl,Form} from 'react-bootstrap'
//import TFroms from './Froms';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <div>


<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Time Table</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" className="Navlink">Home</Nav.Link>
      <Nav.Link href="/login">Log  In</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    
            </div>
        )
    }
}

export default NavBar
