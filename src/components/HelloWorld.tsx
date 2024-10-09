
import {  Typography,Container, Box } from '@mui/material';


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

  export default HelloWorld;
  