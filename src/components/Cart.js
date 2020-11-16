import React, { Component } from 'react';
import { Jumbotron, Container, CardDeck, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
//import ProductCard from './ProductCard'
import { Alert, AlertTitle } from '@material-ui/lab';
import { fetchCart, removeFromCart, clearCart } from '../actions/ProductActions'
class Cart extends Component {

    componentDidMount() {
        const { fetchCart } = this.props;
        fetchCart();
    }
    render() {
        console.log(this.props)
        const items = this.props.cart.map(product => (
            <Row key={product._id} product={product}>
                <Container>
                    <div>
                        {product.Name}
                    </div>
                    <div>
                        {product._id}
                    </div>
                    <Button variant="contained" color="primary" onClick={() => this.props.removeFromCart(product._id)}>x</Button>
                </Container>
            </Row>
        ));
        let cartPage;
        if (items.length > 0) {
            cartPage =
                <Jumbotron>
                    <CardDeck className="mb-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: "true" }}>
                        {items}
                    </CardDeck>
                    <Button variant="contained" color="primary" onClick={() => { WriteInConsole(); this.props.clearCart(); }}>Checkout</Button>
                </Jumbotron>
        }
        else {
            cartPage = <Container>
                <Jumbotron>
                    You have no items in the shopping cart. Keep shopping.
                </Jumbotron>
            </Container>
        }
        return (
            cartPage
        );
    }
}

function WriteInConsole() {
    console.log('hello!');
    return(
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
    </Alert>
    );
    
};

const mapStateToProps = state => (
    {
        itemCountInCart: state.productReducer.itemsCountInCart,
        cart: state.productReducer.cart
    }
);
const mapDispatchToProps = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart),
        clearCart: () => dispatch(clearCart),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);