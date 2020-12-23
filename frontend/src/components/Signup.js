import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import AuthService from '../services/auth.service';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Signup.css';

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
    let history = useHistory();
    let loading = false;

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        loading = true;

        let firstname = event.target[0].value;
        let lastname = event.target[2].value;
        let email = event.target[4].value;
        let password = event.target[6].value;


        AuthService.register(firstname, lastname, email, password).then((response) => {
            history.push("/Signin");
        }, (error) => {
            history.push("/Signup");
            console.log(error);
        });

    }

    return (
        <>{loading ?
            <div className="Loader">
                <CircularProgress />
            </div>

            : <></>}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                </Typography>

                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
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
                        {
                            loading ? <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled
                            >
                                Sign Up
                        </Button> :
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                                </Button>
                        }

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href={"/Signin"} variant="body2">
                                    Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        </>
    );
}