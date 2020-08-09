import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
//import imageFolder from 'images/'

class ProductCard extends Component { 
    render() {
        //var image = `images/${this.props.product.ImageLink}`;
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
//{require(this.props.product.ImageLink)}
export default ProductCard;
