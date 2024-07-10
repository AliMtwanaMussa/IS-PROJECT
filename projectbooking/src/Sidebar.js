import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Info, ContactMail,  Book, School, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', icon: <Home />, path: '/app' }, 
  { text: 'Student Booking', icon: <School />, path: '/booking' },
  { text: 'Admin', icon: <Book />, path: '/admin' },
  { text: 'AboutUs', icon: <ContactMail />, path: '/recent-activity' },
  { text: 'Logout', icon: <Logout />, path: '/' },
 
];

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: 'gray',
          color: 'white',
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
            sx={{
              '&:hover': {
                backgroundColor: 'blueviolet',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

