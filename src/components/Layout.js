import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'
import Footer from './Footer'

// const styles = {
//     backgroundColor: 'black'
// }


class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar>
                </NavigationBar>
                {/* <div> */}
                <Container>
                    {this.props.children}
                </Container>
                {/* </div> */}
                
                <Footer className='mt-3'>
                </Footer>
            </React.Fragment>
        );
    }
}

export default Layout;