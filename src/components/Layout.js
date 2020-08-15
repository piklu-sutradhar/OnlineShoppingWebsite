import React, {Component} from 'react';
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'

class Layout extends Component {
    render() {
        return (
            <Container>
                <NavigationBar>
                </NavigationBar>
                <Container>
                    {this.props.children}
                </Container>
            </Container>
        );
    }
}

export default Layout;