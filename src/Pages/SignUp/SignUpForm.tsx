import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import { Alert } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type FormData = {
  email: string;
  password: string;
  confirmedPassword: string;
};

const defaultFormData: FormData = {
  email: '',
  password: '',
  confirmedPassword: '',
};

export function SignUpForm() {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { signup, authentificationErros } = useAuthContext();
  const notEqualPasswords = formData.password !== '' && formData.password !== formData.confirmedPassword;

  useEffect(() => {
    setError(authentificationErros.errorMessage);
  }, [authentificationErros, formData]);

  const handleSignUp = () => {
    if (notEqualPasswords) {
      return setError('Paswords do not match');
    }
    try {
      setError('');
      setLoading(true);
      signup(formData.email, formData.password);
    } catch {
      setError(authentificationErros.errorMessage);
    }
    setLoading(false);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
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
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            {error && (
              <Grid item xs={12}>
                <Alert severity='error'>{error}</Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={formData.email}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={formData.password}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='confirmedPassword'
                label='Confirm Password'
                id='confirmedPassword'
                type='password'
                autoComplete='current-password'
                value={formData.confirmedPassword}
                onChange={handleFormChange}
              />
            </Grid>
          </Grid>
          <Button
            type='button'
            fullWidth
            disabled={loading}
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link variant='body2'>Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright copyrightText='Cookbook' />
      </Box>
    </Container>
  );
}
