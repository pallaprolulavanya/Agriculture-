import React from 'react';
import style from './Navbar.module.css';

export default function Cotton() {
  return (
    <div className={style.gridContainer}>
      <div className={style.product}>
        <img src="https://i.ibb.co/Y0YGHD2/cotton.jpg" alt="cotton" className={style.productImage}/>
        <div className={style.productDetails}>
          <h3 className='productName'> Cotton </h3>
        </div>
      </div>
    </div>
  )
}
