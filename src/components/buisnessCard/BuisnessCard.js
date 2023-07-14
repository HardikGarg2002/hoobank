import React from 'react'
import './buisnessCard.css'
function BuisnessCard(props) {
  return (
    <div className='flex BuisnessCard'>
      <img src={props.src} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  )
}

export default BuisnessCard
