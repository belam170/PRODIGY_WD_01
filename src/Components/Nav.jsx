import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  return (
    <div>
      <header className="header">
        <Link to="/" className='logo'>Food<span>Exhibition</span></Link>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/dishes">Dishes</Link>
          <Link to="/about">About</Link>
          <Link to="/review">Review</Link>
        </nav>
        <div className="activity-section">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <button className='login'>Login</button>
      </header>
    </div>
  );
}

export default Navbar;
