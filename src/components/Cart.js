import React, { Component } from 'react';
import { Jumbotron, Container, CardDeck, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
//import ProductCard from './ProductCard'
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
                    <Button onClick={() =>this.props.removeFromCart(product._id)}>x</Button>
                </Container>
            </Row>
        ));
        let cartPage;
        if(items.length > 0)
        {
            cartPage = 
            <Jumbotron>
                <CardDeck style={{ display: 'flex', flexDirection: 'row', justifyContent: "true" }}>
                    {items}
                </CardDeck>
                <Button onClick={this.props.clearCart}>Checkout</Button>
            </Jumbotron>
        }
        else
        {
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