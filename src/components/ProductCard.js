import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";

class ProductCard extends Component { 
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
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
        );
    }
}
export default ProductCard;
