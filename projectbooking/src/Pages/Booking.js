import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
} from '@mui/material';

const Booking = () => {
  const [results, setResults] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    firstDate: '',
    email: '',
    phoneNumber: ''
  });
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/student/get-student');
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId) {
      updateBooking(editId, formData);
    } else {
      createBooking(formData);
    }
  };

  const createBooking = async (booking) => {
    try {
      await axios.post('http://localhost:8080/api/v1/student/post', booking, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchBookings();
      setFormData({ fullName: '', firstDate: '', email: '', phoneNumber: '' });
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const updateBooking = async (id, booking) => {
    try {
      await axios.put(`http://localhost:8080/api/v1/student/update/${id}`, booking, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchBookings();
      setFormData({ fullName: '', firstDate: '', email: '', phoneNumber: '' });
      setEditId(null);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/student/delete-student/${id}`);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleEdit = (booking) => {
    setFormData({
      fullName: booking.fullName,
      firstDate: booking.firstDate,
      email: booking.email,
      phoneNumber: booking.phoneNumber
    });
    setEditId(booking.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ fullName: '', firstDate: '', email: '', phoneNumber: '' });
    setEditId(null);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add Booking</Button>
      {/* <ul>
        {results.map(result => (
          <li key={result.id}>
            <Card style={{ marginBottom: '10px' }}>
              <CardContent>
                <div>{result.fullName}: {result.email}</div>
                <Button onClick={() => handleEdit(result)}>Edit</Button>
                <Button onClick={() => deleteBooking(result.id)}>Delete</Button>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul> */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editId ? 'Edit Booking' : 'Add Booking'}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} style={{width:'300px'}}>
            <TextField
              autoFocus
              margin="dense"
              id="fullName"
              name="fullName"
              label="Full Name"
              type="text"
              fullWidth
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              id="firstDate"
              name="firstDate"
              type="date"
              fullWidth
              value={formData.firstDate}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {editId ? 'Update' : 'Submit'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Booking;
