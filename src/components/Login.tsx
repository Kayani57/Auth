import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Grid, Container } from '@mui/material';
import FormContainer from './FormContainer';
import { LoginSchema } from '../utils/validationSchema';

interface IFormInput {
  email: string;
  password: string;
}



const Login: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: IFormInput) => u.email === data.email && u.password === data.password);

    if (user) {
      alert('Login successful');
      window.location.href = '/hello';
      } else {
      alert('Invalid email or password');
    }

    reset();
  };

  return (
    <Container maxWidth="sm">
      <FormContainer title="Login">
        <Grid container spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth sx={{
    '&:focus': {outline: 'none'}}}>
              Login
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
};

export default Login;
