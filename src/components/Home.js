import React, { Component } from 'react';
import { Jumbotron, CardDeck, Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
import NavigationBar from './NavigationBar'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/ProductActions'
import PropTypes from 'prop-types'

class Home extends Component {
    render() {
        const items = this.props.products.map(product => (
            <ProductCard key={product.Id} product={product}></ProductCard>
        ));
        return (
            <Container>
                <NavigationBar>
                </NavigationBar>
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
    products: PropTypes.array.isRequired,
    product: PropTypes.object
}
const mapStateToProps = state => (
    {
        products: state.productReducer.products,
        product: state.productReducer.product
    }
);

export default connect(mapStateToProps, fetchProducts)(Home);