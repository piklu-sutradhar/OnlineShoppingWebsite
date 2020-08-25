import React, { Component } from 'react';
import { CardDeck, Jumbotron, Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
//import NavigationBar from './NavigationBar'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/ProductActions'
import PropTypes from 'prop-types'

class Home extends Component {
    componentDidMount() {
        //console.log(this.props)
        const { fetchProducts } = this.props;
        fetchProducts();
        //fetchCart();
    }
    render() {
        const items = this.props.products.map(product => (
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
Home.propTypes = {
    fetchProducts: PropTypes.func,
    products: PropTypes.array.isRequired,
    product: PropTypes.object,
    itemCountInCart: PropTypes.number,
    cart: PropTypes.array
}
const mapStateToProps = state => (
    {
        itemCountInCart: state.productReducer.itemsCountInCart,
        products: state.productReducer.products,
        product: state.productReducer.product,
        cart: state.productReducer.cart
    }
);

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);