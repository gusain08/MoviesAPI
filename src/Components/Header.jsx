import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
    
        <div className="navlink sticky-top background-transparent p-3">
        <div className="container">
            <ul className='nav d-flex align-items-center justify-content-end'>
                
                <li className='nav-item'>
                    <NavLink to="/" className='nav-link'>Home</NavLink>
                    <NavLink to="/Movies" className='nav-link'>Movies</NavLink>
                    <NavLink to="/Blog" className='nav-link'>Blog</NavLink>
                </li>
                
            </ul>
        </div>
    </div>
    </>
  );
}

export default Header