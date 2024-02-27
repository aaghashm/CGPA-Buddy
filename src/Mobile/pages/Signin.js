import React from 'react';
import { TextField, Button, Typography, Link, Grid, Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e0eaff',
  },
  paper: {
    padding: theme.spacing(4),
    borderRadius: '15px',
    maxWidth: '400px',
    width: '100%',
    background: '#f2f4f7',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  field: {
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-root': {
      borderRadius: '10px',
      background: '#ffffff',
    },
  },
  signInButton: {
    background: '#12b76a',
    color: '#fff',
    borderRadius: '10px',
    padding: theme.spacing(1.5, 0),
    '&:hover': {
      background: '#0e974e',
    },
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    background: '#f2f4f7',
    borderRadius: '10px',
    padding: theme.spacing(1.5, 0),
    '&:hover': {
      background: '#d2d5d9',
    },
  },
  googleIcon: {
    marginRight: theme.spacing(2),
  },
}));

const SignInPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" className={classes.title}>SIGN IN</Typography>
        <div className={classes.field}>
          <TextField
            label="Enter your college email id"
            fullWidth
            InputProps={{
              startAdornment: (
                <IconButton>
                  <AccountCircle />
                </IconButton>
              ),
            }}
          />
        </div>
        <div className={classes.field}>
          <TextField
            type="password"
            label="Enter your password"
            fullWidth
            InputProps={{
              startAdornment: (
                <IconButton>
                  <AccountCircle />
                </IconButton>
              ),
            }}
          />
        </div>
        <Typography variant="body2" className={classes.forgotPassword}>
          <Link href="#" color="primary">Forgot Password?</Link>
        </Typography>
        <Button variant="contained" className={classes.signInButton} fullWidth>SIGN IN</Button>
        <div className={classes.field}>
          <Typography variant="body2" align="center">
            Don’t have an account? <Link href="#" color="primary">Sign up</Link>
          </Typography>
        </div>
        <div className={classes.googleButton}>
          <img src="/logo-googleg-48dp.svg" alt="Google" className={classes.googleIcon} />
          <Typography variant="body1">Continue with Google</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default SignInPage;
