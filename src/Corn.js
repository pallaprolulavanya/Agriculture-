import React from 'react'
import style from './Navbar.module.css';


export default function Corn() {
  return (
    <div className={style.gridContainer}>
      <div className={style.product}>
        <img src="https://i.ibb.co/DwGCDMz/corn.jpg" alt="corn" className={style.productImage}/>
        <div className={style.productDetails}>
          <h3 className='productName'>  Corn </h3>
        </div>
      </div>
    </div>
  )
}
