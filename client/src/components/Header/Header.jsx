import React from 'react';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import "./Header.scss";
import DropDown from '../DropDown/DropDown'

export default function Header() {
  return <div className='header'>
      <NavBar />
      <Search />
  </div>;
}
