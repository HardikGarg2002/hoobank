import React from 'react'
import Review from '../../components/review/Review'
import { people01,people02,people03,airbnb,coinbase,binance,dropbox } from '../../assets/index'
import './thoughts.css'
function Thoughts() {
  return (
    <div className='section thoughts flex'>
        <div className='flex thoughts_about'>
            <h1>What people are saying about us</h1>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='flex multi_reviews'>
          <Review info='Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.' src='people01' name='Herman Jensen'/>
          <Review info="Money makes your life easier. If you're lucky to have it, you're lucky." src='people02' name='Steve Mark'/>
          <Review info='Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.' src='people03' name='Herman Jensen'/>
        </div>
        <div className='flex companies'>
          <img src={airbnb} />
          <img src={coinbase} />
          <img src={binance} />
          <img src={dropbox} />
        </div>
    </div>
  )
}

export default Thoughts
