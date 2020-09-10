import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { addProductToCart } from '../actions/ProductActions';
import './ProductCard.css'
//import { makeStyles } from '@material-ui/core';
//import PropTypes from 'prop-types'
const styles = {
    color: 'black'
}
// const useStyles = makeStyles(
//     {

//     }
// )
class ProductCard extends Component {
    // constructor(props){
    //     super(props)
    // } 
    render() {
        return (
            <Card className="productCard" style={styles}>                    
                <Card.Img variant="top" src={require('../images/polotshirt.jpg')} />
                <Card.Body>
                    <Card.Title>{this.props.product.Name}</Card.Title>
                    <Card.Text>
                        Price: $CAD 35
                    </Card.Text>
                    <Card.Text>
                        {this.props.product.Description}
                    </Card.Text>
                    <Button className="btn-lg btn-drk btn-block" variant="primary" onClick={() => this.props.addProductToCart(this.props.product)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        );
    }
}
export default connect(undefined, {addProductToCart} )(ProductCard);
