import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';


const HelloWorld: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" marginTop="4rem">
        <Typography variant="h3" component="h1">
          Hello World!
        </Typography>
        <Typography variant="h6" component="p" marginTop="1rem">
          You have successfully logged in.
        </Typography>
      </Box>
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Auth App
          </Typography>
          <Button color="inherit" component={Link} to="/">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Signup</Button>
          <Button color="inherit" component={Link} to="/forgot-password">Forgot Password</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
