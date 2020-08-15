import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    This is About page
                </Jumbotron>
            </Container>
        );
    }
}

export default About;