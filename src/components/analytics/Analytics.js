import React from 'react'
import './analytics.css'
function Analytics(props) {
  return (
    <div className='analytics'>
      <h1>{props.number}<i className='material-icons'>add</i></h1>
      
      <h2 className='special-text'>{props.info}</h2>
    </div>
  )
}

export default Analytics
