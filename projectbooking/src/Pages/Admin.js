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
  CircularProgress,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const StudentList = () => {
  const [results, setResults] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    firstDate: '',
    email: '',
    phoneNumber: ''
  });
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/v1/student/get-student');
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching results:', error);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
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
    setLoading(true);
    try {
      await axios.post('http://localhost:8080/api/v1/student/post', booking, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchBookings();
      handleClose();
      setSnackbarMessage('Student added successfully');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error creating booking:', error);
      setError('Failed to add student');
    } finally {
      setLoading(false);
    }
  };

  const updateBooking = async (id, booking) => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:8080/api/v1/student/update/${id}`, booking, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchBookings();
      handleClose();
      setSnackbarMessage('Student updated successfully');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error updating booking:', error);
      setError('Failed to update student');
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8080/api/v1/student/delete-student/${id}`);
      fetchBookings();
      setSnackbarMessage('Student deleted successfully');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting booking:', error);
      setError('Failed to delete student');
    } finally {
      setLoading(false);
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
    setError(null);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="student-list">
      {loading && <CircularProgress style={{ margin: '20px auto', display: 'block' }} />}
      {error && <MuiAlert severity="error" onClose={() => setError(null)}>{error}</MuiAlert>}
      <ul>
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
      </ul>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editId ? 'Edit Student' : 'Add Student'}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
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
              name="firstDate"
              label="First Date"
              type="date"
              fullWidth
              value={formData.firstDate}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
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
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">{editId ? 'Save' : 'Add'}</Button>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default StudentList;
