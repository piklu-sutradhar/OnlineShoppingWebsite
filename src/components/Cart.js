import React, { Component } from 'react';
import { Jumbotron, Container, CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { fetchCart } from '../actions/ProductActions'
class Cart extends Component {
    // console.log(props);
    // useEffect(() => {
    //     fetchCart();
    // },[]);
    //console.log(this.props);
    //const i = () => this.props.fetchCart();
    componentDidMount() {
        //console.log(this.props)
        const { fetchCart } = this.props;
        fetchCart();
    }
    render() {
        const items = this.props.cart.map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
        ));
        return (
            <Container>
                <Jumbotron>
                    <CardDeck style={{ display: 'flex', flexDirection: 'row', justifyContent: "true" }}>
                        {items}
                    </CardDeck>
                </Jumbotron>
            </Container>
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
        fetchCart: () => dispatch(fetchCart)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);