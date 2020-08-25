import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BsFillBagFill } from 'react-icons/bs';
import { fetchCart } from '../actions/ProductActions';
import { connect } from 'react-redux';
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import {Link} from 'react-router-dom'

class NavigationBar extends Component {
  componentDidMount() {
    //console.log(this.props)
    const { fetchCart } = this.props;
    fetchCart();
  }
  render() {
    return (
      <Navbar className="mb-3" bg="dark" expand="lg" variant="dark" width="100">
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
            <Nav.Link href="/Cart"><BsFillBagFill /><span>{this.props.cart.length}</span></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => (
  {
    itemCountInCart: state.productReducer.itemsCountInCart,
    cart: state.productReducer.cart
  }
);
const mapDispatchToProps = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
