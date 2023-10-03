import React from 'react'

function Navbar() {
  return (
    <div className='navbar-box'>

      <nav className='navbar-centre'>
      <div className='navbar-image'>
       <img src="/images/recipe1.jpeg" alt="not found" />
      </div>
      <ul>
        <div className='navbar-links'>
          <div className='nav-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Dishes</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Review</a></li>
        </div>
        </div>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar