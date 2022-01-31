import React from 'react';
import heroImg from '../../assets/images/Bull-Markets-and-Bear-Markets-Explained-for-Beginner-Investors-884x584.jpg'
import DropDown from '../DropDown/DropDown';
import "./Hero.scss";
import { Link } from 'react-router-dom';

export default function Hero({dropDown, params}) {
  return <div className='hero'>
      <Link to='/'><img className='hero__img' src={heroImg} alt="hero image of bull and bear" /></Link>
      <DropDown dropDown={dropDown} params={params}/>
  </div>;
}
