import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from "./Files/Home";
import About from "./Files/About";
import Contact from "./Files/Contact";
import Layout from "./Header/Layout";
import Menu from './Files/Menu';
import Footer from './Header/Footer';
import Apirecipe from './Files/Apirecipe';
function App() {
  
  return (
    <BrowserRouter>
       <Layout/>

    <Switch>
     <Route path="/about" exact component={About}/>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/menu" component={Menu} />
      <Route path="/SeachRecipe" component={Apirecipe} />
    </Switch>
    <Footer/>
  </BrowserRouter>
  );
}


export default App;
