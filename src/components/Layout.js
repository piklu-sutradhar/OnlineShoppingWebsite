import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar>
                </NavigationBar>
                <Container>
                    {this.props.children}
                </Container>
                <Footer>
                </Footer>
            </React.Fragment>
        );
    }
}

export default Layout;