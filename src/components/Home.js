import React, {Component} from 'react';
// import {
//     Card,
//     CardImg,
//     CardText,
//     CardBody,
//     CardTitle,
//     CardSubtitle,
//     Button
//   } from "reactstrap";
import { Jumbotron, CardDeck } from 'react-bootstrap'
import Products from '../assets/products'
import ProductCard from './ProductCard'

class Home extends Component{
    render(){
        const items = Products.map( product => (
            <ProductCard product = {product}></ProductCard>
        ));
        return(
            <Jumbotron>
                <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: "true"}}>
                    {items}   
                </CardDeck>
            </Jumbotron>
        );
    }
}

export default Home;