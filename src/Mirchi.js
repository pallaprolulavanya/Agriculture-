import React from 'react';
import style from './Navbar.module.css';

export default function Mirchi() {
  return (
    <div className={style.gridContainer}>
      <div className={style.product}>
        <img src="https://i.ibb.co/55wqfjH/mirchi.jpg" alt="mirchi" className={style.productImage}/>
        <div className={style.productDetails}>
          <h3 className='productName'> Mirchi </h3>
        </div>
      </div>
    
    </div>
  )
}
