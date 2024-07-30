import React from 'react';
import style from './Navbar.module.css';

export default function About() {
  return (
    <div className={style.about}>
      <h1>About Us</h1>
      <p>Welcome to our agriculture-focused store! We're dedicated to providing high-quality agricultural products and exceptional customer service to support farmers, growers, and garden enthusiasts.</p>
      
      <h2>Our Mission</h2>
      <p>Our mission is to enhance agricultural practices by offering a comprehensive range of premium products, competitive prices, and timely delivery. We aim to be your trusted partner in cultivating success.</p>
      
      <h2>Our Story</h2>
      <p>Founded in 2024 by Lavanya Pallaprolu, our company was born from a passion for agriculture and a vision to create a one-stop marketplace for all your farming and gardening needs. From humble beginnings, we have grown into a respected source of agricultural solutions for customers around the globe.</p>
      
      <h2>Our Values</h2>
      <ul>
        <li>Customer Satisfaction: We place the highest value on your satisfaction and strive to surpass expectations with every interaction and purchase.</li>
        <li>Quality Products: We meticulously select each product to ensure it meets our rigorous standards for performance and durability.</li>
        <li>Integrity: We operate with transparency, honesty, and integrity in all our business practices.</li>
        <li>Sustainable Practices: We are committed to promoting sustainable agricultural practices and supporting initiatives that benefit the environment and farming communities.</li>
      </ul>
    </div>
  )
}
