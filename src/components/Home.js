import React, { Component } from 'react';
import { Jumbotron, CardDeck, Container } from 'react-bootstrap'
import Products from '../assets/products'
import ProductCard from './ProductCard'
import NavigationBar from './NavigationBar'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [],{}, applyMiddleware());
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: Products
        }
    }
    write() {
        console.log(this.state.products)
    }
    render() {
        const items = this.state.products.map(product => (
            <ProductCard key={product.Id} product={product}></ProductCard>
        ));
        return (
            <Provider store = {store}>
                <Container>
                    <NavigationBar>
                    </NavigationBar>
                    <Jumbotron>
                        <CardDeck style={{ display: 'flex', flexDirection: 'row', justifyContent: "true" }}>
                            {items}
                        </CardDeck>
                    </Jumbotron>
                </Container>
            </Provider>
        );
    }
}

export default Home;