import React from 'react'
import './biling.css'
import {bill,apple,google} from '../../assets/index'

function Biling() {
  return (
    <div className='biling flex section'>
      <img src={bill} />
      <div>
        <h1>Easily control your billing & invoicing.</h1>
        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div>
            <img src={apple} />
            <img src={google} />
        </div>
      </div>
    </div>
  )
}

export default Biling
