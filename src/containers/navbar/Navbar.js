import React from 'react'
import './navbar.css'
import {logo} from '../../assets/index'
function Navbar() {
  return (
    <div className='navbar flex section'>
        <img src={logo} />
        <div className='divider'></div>
      <ul className='flex'>
        <li><a href='#home'> Home</a></li>
        <li><a href='#aboutUs' >About Us</a></li>
        <li><a href='#features'> Features</a></li>
        <li><a href='#solution'> Solution</a></li>
      </ul>
    </div>
  )
}

export default Navbar
