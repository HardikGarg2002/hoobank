import React from 'react'
import ContentCard from '../../components/contentCard/ContentCard'
import {card} from '../../assets/index'
import './deal.css'
function Deal() {
  return (
    <div className='deal section flex'>
      <ContentCard title='Find a better card deal in few easy steps.' text='Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.'/>
        <img src={card} />
    </div>
  )
}

export default Deal
