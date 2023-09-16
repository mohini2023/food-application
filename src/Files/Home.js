import React from 'react';
import './Home.css';
import foodLogo from './output (1).png';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography, Grid } from '@mui/material';
import {Link}  from "react-router-dom"


function ShapeExample() {
  return (

      <Box className="boxx">
              <img className='foodimg' src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_640.jpg" alt="Food" />
             
              <p className='quote'>
                “Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”
                <br/>
                <button  className="btn" ><Link className="btnIn" to="/Menu">Order Now</Link></button>
                 </p>
                 
              </Box>
               
        
  );
}

export default ShapeExample;