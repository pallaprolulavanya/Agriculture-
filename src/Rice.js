import React from 'react'
import style from './Navbar.module.css';

export default function Rice() {
  return (
    <div className={style.gridContainer}>
      <div className={style.product}>
        <img src="https://i.ibb.co/wCB9c09/rice.jpg" alt="rice" className={style.productImage}/>
        <div className={style.productDetails}>
          <h3 className='productName'> Rice </h3>
        </div>
      </div>    
    </div>
  )
}
