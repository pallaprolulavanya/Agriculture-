import React from 'react';
import style from './Navbar.module.css';

export default function Turmeric() {
  return (
    <div className={style.gridContainer}>
      <div className={style.product}>
            <img src="https://i.ibb.co/J545M1R/turmeric.jpg" alt="turmeric" className={style.productImage}/>
            <div className={style.productDetails}>
                <h3 className='productName'>Turmeric </h3>  
            </div>
        </div>
        
    </div>
  )
}
