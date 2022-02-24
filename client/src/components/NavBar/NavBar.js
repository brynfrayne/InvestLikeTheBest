import React from 'react';
import {  NavLink } from  'react-router-dom';
import "./NavBar.scss";

export default function NavBar() {
  return     <div className='nav'>
        <NavLink to='/company/Q3-21' className="navbar__links" activeclassname="navbar__links--active">Companies</NavLink>
        <NavLink to='/funds' className="navbar__links" activeclassname="navbar__links--active">Funds</NavLink>
        <NavLink to='/charts' className="navbar__links" activeclassname="navbar__links--active">Charts</NavLink>
        <NavLink to='/tech-stack' className="navbar__links" activeclassname="navbar__links--active">Tech Stack</NavLink>
        
    </div>
 
 
}
