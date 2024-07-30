import React from 'react';
import style from './Navbar.module.css';

export default function Contact() {
  return (
    <div className={style.contactUs}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or inquiries, please don't hesitate to contact us. We're here to help!</p>
      
      <div className={style.contactInfo}>
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:info@example.com">lavanya.pallaprolu@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+91 9390764846</a></p>
        <p>Address: P.Lavanya, Parasa-Village, Pedakurapadu-Mandel, Palnadu-District, Andhra Pradesh, 522436.</p>
      </div>
      <div className={style.contactForm}>
        <h2>Send us a message</h2>
        <form>
          <div className={style.formGroup}>
            <label>Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={style.formGroup}>
            <label>Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={style.formGroup}>
            <label>Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
