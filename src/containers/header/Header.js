import React from 'react'

import {robot,arrowUp} from '../../assets/index'
import './header.css'
function Header() {
  return (
    <div className='header section'>
        
        <div className='landing flex'>
            <div className='header__content'>
                <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
                <div>
                    <div className='header__content-circle'><p>Get <img src={arrowUp}/> Started</p></div>
                    <h1>The Next <span className='special-text'>Generation</span><br/>Payment Method.</h1>
                    <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.</p>
                </div>
            </div>
            <img src={robot} className='landing__img'/>
        </div>
    </div>
  )
}

export default Header
