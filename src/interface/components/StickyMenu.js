// StickyMenu.js

import React, {useRef} from 'react';
import './StickyMenu.css'; // Import CSS file for sticky menu
import { Link } from 'react-router-dom';

function StickyMenu() {
  return (
    <header className="sticky-menu">
      <div className="logo-container">
        <img src="./images/logo3.png" alt="Company Logo" className="main-logo" />
        <p className="slogan">Empowering Educators, Crafting Excellence</p>
      </div>

      <nav>
        <ul>
        <li><Link to='/' className='menu-link'>Home</Link></li>
        <li ><Link to='/about' className='menu-link'>About Us</Link></li>
        <li ><Link to='/contact' className='menu-link'>Contact Us</Link></li>
        {/* <li ><Link to='/contact' className='menu-link'>Rubrics</Link></li> */}
        <li ><Link to='/login' className='menu-link'>Login</Link></li>
        </ul>
    </nav>
    </header>
  );
}

export default StickyMenu;
