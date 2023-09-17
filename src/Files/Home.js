import React from 'react';
import './Home.css';
import foodLogo from './output (1).png';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom"


function ShapeExample() {
  return (
<div>
    <Box className="boxx">
      <img className='foodimg' src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_640.jpg" alt="Food" />

      <p className='quote'>
        “Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”
        <br />
        <button className="btn" ><Link className="btnIn" to="/Menu">Go to Menu</Link></button>
      </p>

    </Box>
    <div>
      <h3 className='guide'>The Big Guide </h3>
      <img  className="homesecond"src="https://assets.epicurious.com/photos/630cef11652428a1f232e8d7/9:4/w_1004,h_446,c_limit/PorkTenderloin_HERO_082522_39158.jpg"/>
       <div className='desinermaindiv'>
        <div  className='desingercont'>
          <h1 className='spetcook'>What to cook in this month ?</h1> <br/>
<h3 className='fav_snack'>Find new favorite football snacks, quick dinners, and fall desserts.</h3>
<h3 ><Link  className='viewcomp' to="/About">View complete guide</Link> </h3>
        </div>
        <div className='designersecondcont'>
          <div className='homedispl'>  <img className='img11' src="https://assets.epicurious.com/photos/64e67c48cd72df0812cb7291/6:4/w_116,h_77,c_limit/No-Cook-Zucchini-Pasta_HERO_2223.jpg"/> <h5 className='img11text'>This Creamy Zucchini Sauce Requires No Cooking; Just Hot Pasta</h5></div>
          <div className='homedispl'>  <img className='img11' src="https://assets.epicurious.com/photos/6492f9b9a0ddfab1629e4a06/6:4/w_116,h_77,c_limit/PhillyFluffCake_HERO_061523_55021.jpg"/> <h5 className='img11text'>It’s Not Just Pound Cake. It’s Philly Fluff Cake</h5></div>
          <div className='homedispl'>  <img className='img11' src="https://assets.epicurious.com/photos/64cac0aadc1d54fee8280455/6:4/w_116,h_77,c_limit/french-silk-pie_HERO_072123_18065_VOG_final.jpg"/> <h5 className='img11text'>How to Make the Silkiest French Silk Pie</h5></div>
         
         
        </div>
       </div>
    </div>

    </div>
  );
}

export default ShapeExample;