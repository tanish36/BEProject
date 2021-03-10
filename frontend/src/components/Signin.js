import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AuthService from '../services/auth.service';
import RecommendService from '../services/recommend-service';

import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import Alertdism from '../Alertdism'
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    let history = useHistory();
    // TO - DO Implement Login Feature ..
    const [loading, setloading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setloading(true);

        let email = event.target[0].value;
        let password = event.target[2].value;

        AuthService.login(email, password).then((response) => {
            console.log(response);

            let dt = new Date();
            RecommendService.loginStart(email, dt).then((response => {
                console.log(response)
            }), (error) => {
                console.log(error)
            })

            setloading(false);
            setsuccess(1);
            history.push("/Welcome");
            window.location.reload();
        }, (error) => {
            setsuccess(0);
        });

        setloading(false);

    }

    const [success, setsuccess] = useState(2)


    return (
        <>{loading ?
            <div className="Loader">
                <CircularProgress />
            </div>

            : <></>}

            {success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"User Successfully Registered"} heading={"Success"} /> :

                success == 0 ? <Alertdism setsucess={setsuccess} theme={"danger"} content={"Check Username and Password"} heading={"Failure"} /> : null
            }
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                     </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {loading ? <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled
                        >
                            Sign In
                        </Button> :
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                        </Button>
                        }
                        <Grid container>
                            <Grid item>
                                <Link href="/Signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </>

    );
}