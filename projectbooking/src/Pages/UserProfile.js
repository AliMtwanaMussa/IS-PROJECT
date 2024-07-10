import React from 'react';
// import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="service-icon-03.png" alt="Logo" />
        </div>
        <h2><marquee>STUDENT HOSTEL BOOKING</marquee></h2>
        <div className="contact">
          <nav className="menu">
            <ul>
              <li><a href="Dashboard.html">Home</a></li>
              <li><a href="Home.html">Dashboard</a></li>
              <li><a href="#student">Student</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <h1>Booking hostel Online</h1>
          <p>Together We Build your future</p>
          <div className="cta-buttons">
            <button className="sign-up-btn">SIGN UP</button>
            <button className="services-btn">LOGIN</button>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Student Hostel Booking Online. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
