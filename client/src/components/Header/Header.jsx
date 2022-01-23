import React from 'react';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import "./Header.scss";

export default function Header() {
  return <div className='header'>
      <NavBar />
      <Search />
  </div>;
}
