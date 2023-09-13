import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import logo from  './foodie-removebg-preview.png';
import './Style.css';
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor:'black',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
        height1:'150px'
      }}
    >
      <Container>
        <Typography variant="body2" align="center"> &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
