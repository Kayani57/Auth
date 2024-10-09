import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Grid, Container } from '@mui/material';
import FormContainer from './FormContainer';  
import { SignupSchema } from '../utils/validationSchema';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;



  
}



const Signup: React.FC = () => {
  const { register, handleSubmit, reset , formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ name: data.name, email: data.email, password: data.password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! You can now login.');
    reset();
  };

  return (
    <Container maxWidth="sm">
      <FormContainer title="Sign Up">
        <Grid container spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
            />
          </Grid>
          
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
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth  sx={{'&:focus': {outline: 'none'}}}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
};

export default Signup;
