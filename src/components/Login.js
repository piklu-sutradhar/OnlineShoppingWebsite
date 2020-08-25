import React, { Component } from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class Login extends Component{
    render(){
        return(
            <Container className="mt-4">
                <Jumbotron>
                    <Form className="login-form">
                        <h1 className="text-center">
                            <span className="font-weight-bold">Online Shopping</span>
                        </h1>
                        <h2 className="text-center">Welcome</h2>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" placeholder="Email"></Input>
                            <Label>Password</Label>
                            <Input type="password" placeholder="Password"></Input>
                        </FormGroup>
                        <Button className="btn-lg btn-drk btn-block">Log in</Button>
                    </Form>
                    <div className="text-center pt-3">
                        Or continue with social account
                    </div>
                    <FacebookLoginButton className="mt-3 mb-3"/>
                    <div className="text-center">
                        <a href="/Signup">Sign Up</a>
                        <span className="p-2">|</span>
                        <a href="/Signup">Forgot Password</a>
                    </div>
                </Jumbotron>
                
            </Container>
            
        );
    }
}

export default Login;