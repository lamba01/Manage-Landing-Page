import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'

function Navigation() {

  return (
    <nav className="navbar">
    <div className="navbar-container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className ="menu-items">
       <li>Pricing</li>
       <li>Product</li>
       <li>About us</li> 
       <li>Career</li> 
       <li>Community</li>
      </ul>
       <div className="logo-container"><img src={logo} alt='logo'/></div>
       <button className='nav-button'>Get Started</button>
    </div>
  </nav>
  )
}

export default Navigation
