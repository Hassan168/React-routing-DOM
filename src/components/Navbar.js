import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            LOGO
        </div>
        <ul className='nav-menu'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
    </div>
  )
}

export default Navbar