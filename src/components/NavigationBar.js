import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BsFillBagFill } from 'react-icons/bs'
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import {Link} from 'react-router-dom'

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Hello Shoppers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav>
          <Nav className="mr-auton navbar-right">
            <Nav.Link href="/Signup">Sign Up</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Cart"><BsFillBagFill/></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default NavigationBar
