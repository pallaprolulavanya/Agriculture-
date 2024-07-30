import React from 'react';
import style from './Navbar.module.css';

export default function Footer() {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.container}>
            <div className={style.row}>
                <div className="col-md-6">
                    {/* About Us section */}
                    <h4>About Us</h4>
                    <p>Welcome to our agriculture-focused store!<br/>
                       We are committed to providing high-quality agricultural products <br/>
                       and exceptional service to support farmers, growers, and gardening enthusiasts.</p>

                </div>
                <div className="col-md-6">
                    {/* Contact Us section */}
                    <h4>Contact Us</h4>
                    <p>Email: lavanya.pallaprolu@gmail.com</p>
                    <p>Phone: +91 9390764943</p>
                    <p>Address: P.Lavanya, Parasa-Village, Pedakurapadu-Mandel, Palnadu-District, Andhra Pradesh, 522436.</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
