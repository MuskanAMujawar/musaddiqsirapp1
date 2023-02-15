import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo_container'>
            <h3>Shopping Here</h3>
        </div>
        <div className='nav_container'>
             <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <Link to="/blog">Blog</Link></li>
                </ul>
        </div>
           </div>
  )
}
