import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Img from './foodie-removebg-preview.png';
import './Style.css';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function CollapsibleExample() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const location = useLocation(); // Get the current route location

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path) => {
    // Check if the current location matches the given path
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navii">
        <Container className="disp">
          <Navbar.Brand href="#home">
            <FastfoodIcon />
            <img className="imgg" src={Img} alt="Logo" />
          </Navbar.Brand>

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{  mt:-1, display: { sm: 'none',xs:'block'} }}
            >


              
              <MenuIcon />
            </IconButton>
          )}

          <Navbar.Collapse id="responsive-navbar-nav">
          
            <Nav id="onee" >
            <Nav.Link as={Link} to="/" className={isActive('/')}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" className={isActive('/menu')}>
                Menu
              </Nav.Link>
             
              <Nav.Link as={Link} to="/contact" className={isActive('/contact')}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={isActive('/about')}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/SeachRecipe" className={isActive('/SeachRecipe')}>
         Recipes
              </Nav.Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isMobile && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
          
        ><img className="imgg2" src={Img} alt="Logo" />
          <Nav>   
            <Nav.Link as={Link} to="/menu" id="menuu"onClick={toggleDrawer} className={isActive('/menu')}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={toggleDrawer} className={isActive('/')}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={toggleDrawer} className={isActive('/contact')}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={toggleDrawer} className={isActive('/about')}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/SeachRecipe"  onClick={toggleDrawer} className={isActive('/SeachRecipe')}>
         Recipes
              </Nav.Link>
           
          </Nav>
        </Drawer>
      )}
    </>
  );
}

export default CollapsibleExample;
