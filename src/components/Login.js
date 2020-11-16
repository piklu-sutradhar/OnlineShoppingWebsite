// import React, { Component } from 'react';
// import { Container } from 'react-bootstrap';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FacebookLoginButton } from 'react-social-login-buttons';
// //import { Grid } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';
// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles((theme) => ({
// //     paper: {
// //         marginTop: theme.spacing(8),
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //     },
// //     avatar: {
// //         margin: theme.spacing(1),
// //         backgroundColor: theme.palette.secondary.main,
// //     },
// //     form: {
// //         width: '100%', // Fix IE 11 issue.
// //         marginTop: theme.spacing(3),
// //     },
// //     submit: {
// //         margin: theme.spacing(3, 0, 2),
// //     },
// // }));
// class Login extends Component {
//     render() {
//         //const classes = useStyles();
//         return (
//             <Container component="main" maxWidth="xs" className="mt-4">
//                 <CssBaseline />
//                 <div>
//                     <Form className="login-form">
//                         <h1 className="text-center">
//                             <span className="font-weight-bold">Online Shopping</span>
//                         </h1>
//                         <h2 className="text-center">Welcome</h2>
//                         <FormGroup>
//                             <Label>Email</Label>
//                             <Input type="email" placeholder="Email"></Input>
//                             <Label>Password</Label>
//                             <Input type="password" placeholder="Password"></Input>
//                         </FormGroup>
//                         <Button className="btn-lg btn-drk btn-block">Log in</Button>
//                     </Form>
//                     <div className="text-center pt-3">
//                         Or continue with social account
//                     </div>
//                     <FacebookLoginButton className="mt-3 mb-3" />
//                     <div className="text-center">
//                         <a href="/Signup">Sign Up</a>
//                         <span className="p-2">|</span>
//                         <a href="/Signup">Forgot Password</a>
//                     </div>
//                 </div>
//                 {/* <Grid item xs justify='center'> */}

//                 {/* </Grid> */}

//             </Container>

//         );
//     }
// }


// export default Login;


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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

export default function SignUp() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className="mb-3">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
          </Button>
                    <div className="text-center">
                        <a href="/Signup">Sign Up</a>
                        <span className="p-2">|</span>
                        <a href="/Signup">Forgot Password</a>
                    </div>
                    {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Signup" variant="body2">
                No a member? Sign Up
              </Link>
            </Grid>
          </Grid> */}
                </form>
            </div>
        </Container>
    );
}