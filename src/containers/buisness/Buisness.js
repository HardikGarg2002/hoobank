import React from 'react'
import './buisness.css'
import ContentCard from '../../components/contentCard/ContentCard'
import BuisnessCard from '../../components/buisnessCard/BuisnessCard'
import {star,shield,send} from '../../assets/index'
function Buisness() {
  return (
    <div className='flex section buisness'>
      <ContentCard title="You do the business, we'll handle the money." text="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market." />
      <div className='flex buisness__buisnessCards'>
        <BuisnessCard src={star} title='Rewards' info='The best credit cards offer some tantalizing combinations of promotions and prizes'/>
        <BuisnessCard src={shield} title='100% Secured' info='We take proactive steps make sure your information and transactions are secure.'/>
        <BuisnessCard src={send} title='Balance Transfer' info='A balance transfer credit card can save you a lot of money in interest charges.'/>
      </div>
      
    </div>
  )
}

export default Buisness
