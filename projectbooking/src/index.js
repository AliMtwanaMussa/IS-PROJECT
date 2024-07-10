import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './Pages/UserProfile';
import Booking from './Pages/Booking';
import RecentActivity from './Pages/RecentActivity';
import Student from './Pages/Student';
import Admin from './Pages/Admin';
import RegisterForm from './home/Register';
import LoginForm from './home/Login';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/app' element={<App />} />
    
        <Route path='/' element={<LoginForm />} />
        <Route path='/registerform' element={<RegisterForm />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/recent-activity' element={<RecentActivity/>} />
        <Route path='/student' element={<Student/>}/>
        <Route path="/admin/*" element={<Admin />} />
       
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
