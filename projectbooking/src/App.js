import React, { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Box, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './App.css'; // Import the CSS file

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };

  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, textAlign: 'center' }}>
            WELCOME TO STUDENT ONLINE HOSTEL BOOKING 
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography paragraph>
          <marquee>Thank you for choosing the Student Online Hostel Booking System. Together we build your future</marquee>
          <h1>Welcome To Dashboard</h1>
          <Grid container spacing={3}>
          <Grid item xs={10} sm={4}>
              <Card sx={{ backgroundColor: '#f5f5f5' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Student
                  </Typography>
                  <Typography variant="body2">
                    Information about students.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate('/student')}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Card sx={{ backgroundColor: '#f5f5f5' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Student Booking
                  </Typography>
                  <Typography variant="body2">
                    Information about students.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate('/Booking')}>Booking Now</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Card sx={{ backgroundColor: '#e0f7fa' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Admin
                  </Typography>
                  <Typography variant="body2">
                    Information about admin.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate('/admin')}>Click to Open</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Card sx={{ backgroundColor: '#ffe0b2' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Room
                  </Typography>
                  <Typography variant="body2">
                    Information about rooms.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate('/room')}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Card sx={{ backgroundColor: '#f1f397' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Booking detail
                  </Typography>
                  <Typography variant="body2">
                    Information about bookings.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate('/room')}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Card sx={{ backgroundColor: '#dcedc8' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    About Us
                  </Typography>
                  <Typography variant="body2">
                    Information about us.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate('/recent-activity')}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, backgroundColor: 'blue', color: 'white', p: 2 }}>
            <Typography variant="h3" component="h3" >
              Contact Us
            </Typography>
            <Typography variant="body1" component="p" color="white">
              Useful Links:
            </Typography>
            <Typography variant="body1" component="p" color="white">
              Student hostel booking
            </Typography>
            <Typography variant="body1" component="p" color="white">
              Hostel management system
            </Typography>
            <Typography variant="body1" component="p" color="white">
              Contact:
            </Typography>
            <Typography variant="body1" component="p" color="white">
              PO BOX 1234, 
              ZANZIBAR
            </Typography>
            <Typography variant="body1" component="p" color="white">
              0622388930
            </Typography>
            <Typography variant="body1" component="p" color="white">
              mtwanaali90@gmail.com
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: 'black', color: 'white', textAlign: 'center', p: 2, mt: 2 }}>
            <Typography variant="body2" color="white">
              Copyright 2024, Student Online Hostel Booking, All Rights Reserved
            </Typography>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
