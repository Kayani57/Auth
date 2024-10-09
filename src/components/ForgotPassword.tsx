import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Grid, Container } from '@mui/material';
import FormContainer from './FormContainer';  
import { ForgotPasswordSchema } from '../utils/validationSchema';

interface IFormInput {
  email: string;




  
}



const ForgotPassword: React.FC = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    alert(`A password reset link has been sent to ${data.email}`);
    reset();
  };

  return (
    <Container maxWidth="sm">
      <FormContainer title="Forgot Password">
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
            <Button variant="contained" color="primary" type="submit"  fullWidth sx={{'&:focus': {outline: 'none'}}}>
              Send Reset Link
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
