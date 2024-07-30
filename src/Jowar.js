import React from 'react';
import style from './Navbar.module.css';

export default function Jowar() {
  return (
    <div className={style.gridContainer}>
      <div className={style.product}>
        <img src="https://i.ibb.co/h12BJrc/jowar.jpg" alt="jowar" className={style.productImage}/>
        <div className={style.productDetails}>
          <h3 className='productName'> Jowar </h3>
        </div>
      </div>
      
    </div>
  )
}
