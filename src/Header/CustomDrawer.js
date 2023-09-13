import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const CustomDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/menu" onClick={onClose}>
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={onClose}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={onClose}>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
