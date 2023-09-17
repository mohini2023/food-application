import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import foodie  from './foodie-removebg-preview.png';
// import logo from  './foodie-removebg-preview.png';
import './Style.css';
import { ImportExportTwoTone } from '@mui/icons-material';
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
        <Typography variant="body2" align="center"> <img  className="footlogo"src={foodie} height="140px"/> <span className='footertext'>2023 - All Rights Reserved {new Date().getFullYear()}</span> 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
