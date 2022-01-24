import React from 'react';
import {  NavLink } from  'react-router-dom';
import "./NavBar.scss";

export default function NavBar() {
  return     <div className='nav'>
        <NavLink to='/' className="navbar__links" activeclassname="navbar__links--active">Home</NavLink>
        <NavLink to='/funds' className="navbar__links" activeclassname="navbar__links--active">Funds</NavLink>
        <NavLink to={'/charts'} className="navbar__links" activeclassname="navbar__links--active">Charts</NavLink>
        
    </div>
 
 
}
