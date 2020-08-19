import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
// import { addProductToCart } from '../actions/ProductActions'
import { connect } from 'react-redux'
import { addProductToCart } from '../actions/ProductActions';
//import PropTypes from 'prop-types'

class ProductCard extends Component {
    // constructor(props){
    //     super(props)
    // } 
    render() {
        return (
            <Card className="shadow-box-example hoverable" style={{ width: '4em' }}>                    
                <Card.Img variant="top" src={require('../images/polotshirt.jpg')} />
                <Card.Body>
                    <Card.Title>{this.props.product.Name}</Card.Title>
                    <Card.Text>
                        Price: $CAD 35
                    </Card.Text>
                    <Card.Text>
                        {this.props.product.Description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.addProductToCart(this.props.product)}>Buy</Button>
                </Card.Body>
            </Card>
        );
    }
}
export default connect(undefined, {addProductToCart} )(ProductCard);
