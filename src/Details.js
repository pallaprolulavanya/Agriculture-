import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'

export default function Details() {
  return (
    <div className={style.secondSection}>
        <ul>
          
        <li><Link to="/Corn">Corn</Link></li>
        <li><Link to="/Rice">Rice</Link></li>
        <li><Link to="/Mirchi">Mirchi</Link></li>
        <li><Link to="/Cotton">Cotton</Link></li>
        <li><Link to="/Turmeric">Turmeric</Link></li>
        <li><Link to="/Jowar">Jowar</Link></li>
        </ul>
    </div>
  )
}
