import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
//import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
class Login extends Component {
    render() {
        //const classes = useStyles();
        return (
            <Container component="main" maxWidth="xs" className="mt-4">
                <CssBaseline />
                <div>
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
                    <FacebookLoginButton className="mt-3 mb-3" />
                    <div className="text-center">
                        <a href="/Signup">Sign Up</a>
                        <span className="p-2">|</span>
                        <a href="/Signup">Forgot Password</a>
                    </div>
                </div>
                {/* <Grid item xs justify='center'> */}

                {/* </Grid> */}

            </Container>

        );
    }
}


export default Login;