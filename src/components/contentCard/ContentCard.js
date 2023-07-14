import React from 'react'
import './contentCard.css' 

function ContentCard(props) {
  return (
    <div className='contentCard'>
      <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div className='button'>Get Started</div>
    </div>
  )
}

export default ContentCard
