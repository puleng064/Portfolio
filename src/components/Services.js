import React from 'react';
import './Services.css'; // Optional: if you're styling it separately

const Services = () => (
  <section id="services">
    <h2>Services</h2>
    <div className="service-grid">
      <div className="service-box">
        <i className="fa-solid fa-laptop-code service-icon"></i>
        <h3>Web Design2</h3>
        <p>Creating beautiful and responsive designs.</p>
      </div>
      <div className="service-box">
        <i className="fa-solid fa-code service-icon"></i>
        <h3>Web Development</h3>
        <p>Building functional web applications.</p>
      </div>
      <div className="service-box">
        <i className="fa-solid fa-paintbrush service-icon"></i>
        <h3>Graphic Design</h3>
        <p>Creating stunning visuals and branding assets.</p>
      </div>
      <div className="service-box">
        <i className="fa-solid fa-code-branch service-icon"></i>
        <h3>Software Development</h3>
        <p>Developing efficient and scalable applications.</p>
      </div>
      <div className="service-box">
        <i className="fa-solid fa-database service-icon"></i>
        <h3>Database</h3>
        <p>Ensuring secure and optimized database performance.</p>
      </div>
    </div>
  </section>
);

export default Services;
