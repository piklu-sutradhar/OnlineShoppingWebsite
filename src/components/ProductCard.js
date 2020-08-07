import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import image from '../images/polotshirt.jpg'

class ProductCard extends Component {
    render() {
        return (
                <Card style={{ width: '4em' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{this.props.product.Name}</Card.Title>
                        <Card.Text>
                            Price: $CAD 35
                    </Card.Text>
                        <Card.Text>
                            {this.props.product.Description}
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
        );
    }
}
//{require(this.props.product.ImageLink)}
export default ProductCard;
