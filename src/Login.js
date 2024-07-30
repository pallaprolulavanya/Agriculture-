import React from 'react';
import axios from 'axios';
import style from './Navbar.module.css';
import {useState} from 'react';



export default function Login() {
  const [formdata,setFormdata]=useState({
    phone:'',
    password:''
  })
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setFormdata({...formdata,[name]:value})
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:9000/insert',formdata)
    .then(response=>{
    alert('login successfull')
    window.location.reload()
  })
  .catch(error=>console.error('server error',error))
  }

  return (
    <div className={style.loginPage}>
      <form className={style.loginForm}  onSubmit={handlesubmit}>
      <h2>Login</h2>
        <div className={style.formGroup}>
          <lable>  Phone Number: </lable>
          <input type='text' name='phone' value={formdata.phone} onChange={handlechange} ></input>
        </div>
        <div className={style.formGroup}>
          <lable>Password: </lable>
          <input type='password' name='password' id='password' value={formdata.password} onChange={handlechange} ></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
