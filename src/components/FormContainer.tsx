import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

interface FormContainerProps {
  title: string;
  children: React.ReactNode;





  
}

const FormContainer: React.FC<FormContainerProps> = ({ title, children }) => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Box component="div" sx={{ marginBottom: '1.5rem' }}>
          {children}
        </Box>
      </Paper>
    </Container>
  );
};

export default FormContainer;
