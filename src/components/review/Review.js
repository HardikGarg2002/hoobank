import React from 'react'
import './review.css'
import {quotes} from '../../assets/index'
function Review(props) {
  return (
    <div className='review'>
      <img src={quotes} />
      <p>{props.info}</p>
      <div className='people flex'>
        <img src={props.src} />
        <div>
            <h3>{props.name}</h3>
            <p>Founders and Leaders</p>
        </div>
      </div>

    </div>
  )
}

export default Review
