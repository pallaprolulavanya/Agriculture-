import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'


export default function Navbar() {
  return (
    <div className={style.gridcontainer}>
      <nav>
      <ul>
        {/* <img src='https://i.ibb.co/yR7BXkH/logo.jpg' alt="logo" className={style.logo}></img> */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Login">Login</Link></li>  
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      
    </nav>
    </div>
  )
}
