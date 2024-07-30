import React from 'react';
import style from './Navbar.module.css';

export default function Home() {
  return (
    <div className={style.gridContainer}>
      <div className={style.product}>
        <img src="https://i.ibb.co/DwGCDMz/corn.jpg" alt="corn" className={style.productImage}/>
        <div className={style.productDetails}>
            <h3 className='productName'> Corn </h3>
            <button className='addToCardButton'>Know more</button>
        </div>
        </div>
        <div className={style.product}>
            <img src="https://i.ibb.co/wCB9c09/rice.jpg" alt="rice" className={style.productImage}/>
            <div className={style.productDetails}>
                <h3 className='productName'>Rice</h3>  
                <button className='addToCardButton'>Know more</button>
            </div>
        </div>
        <div className={style.product}>
            <img src="https://i.ibb.co/55wqfjH/mirchi.jpg" alt="mirchi" className={style.productImage}/>
            <div className={style.productDetails}>
                <h3 className='productName'>Mirchi</h3>  
                <button className='addToCardButton'>Know more</button>
            </div>
        </div>
        <div className={style.product}>
            <img src="https://i.ibb.co/Y0YGHD2/cotton.jpg" alt="cotton" className={style.productImage}/>
            <div className={style.productDetails}>
                <h3 className='productName'>Cotton</h3>
                <button className='addToCardButton'>Know more</button>
            </div>
        </div>
        <div className={style.product}>
            <img src="https://i.ibb.co/J545M1R/turmeric.jpg" alt="turmeric" className={style.productImage}/>
            <div className={style.productDetails}>
                <h3 className='productName'>Turmeric</h3>
                <button className='addToCardButton'>Know more</button>
            </div>
        </div>
      <div className={style.product}>
        <img src="https://i.ibb.co/h12BJrc/jowar.jpg" alt="jowar" className={style.productImage}/>
        <div className={style.productDetails}>
          <h3 className='productName'>Jowar</h3>
          <button className='addToCardButton'>Know more</button>
        </div>
      </div>
    </div>
  )
}
