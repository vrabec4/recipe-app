import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Copyright } from '../../shared/Copyright';
import { useAuthContext } from '../../firebase/firebaseContext';

const useStyles = makeStyles(theme => ({
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

type FormData = {
  email: string;
  password: string;
};

const defaultFormData: FormData = {
  email: '',
  password: '',
};

export function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { login, authentificationErros, currentUser } = useAuthContext();
  useEffect(() => {
    setError(authentificationErros.errorMessage);
  }, [authentificationErros, formData]);

  const handleOnClick = useCallback(() => {
    console.log('dadadawd');
    return history.push('/sign-up');
  }, [history]);

  const classes = useStyles();

  async function handleLogin() {
    try {
      setError('');
      setLoading(true);
      await login(formData.email, formData.password);
    } catch {
      setError('Failed to login');
    }
    setLoading(false);
  }

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    console.log(newValue);
    console.log(newValue);
    setFormData({
      ...formData,
      [event.target.name]: newValue,
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form}>
          {error && (
            <Grid item xs={12}>
              <Alert severity='error'>{error}</Alert>
            </Grid>
          )}
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={handleFormChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handleFormChange}
          />
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Button type='button' fullWidth variant='contained' color='primary' className={classes.submit} onClick={handleLogin}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant='body2' onClick={handleOnClick}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright copyrightText='Cookbook' />
      </Box>
    </Container>
  );
}
