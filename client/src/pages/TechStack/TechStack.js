import React from 'react';
import d3Icon from '../../assets/TechStackLogos/d3js.jpeg';
import knexjs from '../../assets/TechStackLogos/knexjs.png';
import mysql from '../../assets/TechStackLogos/mysql.png';
import nodejs from '../../assets/TechStackLogos/nodejs.png';
import reactjs from '../../assets/TechStackLogos/reactjs.png';
import sass from '../../assets/TechStackLogos/sass.png';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
import './TechStack.scss';

export default function TechStack() {
  return <div className='landing-page'>
          <div className='landing-page__header'>
            
            <NavBar/>
            <h1 className='landing-page__title'>Invest Like The Best</h1>
            <Search />
            <h1 className='landing-page__title'>Thanks!</h1>

          </div>
          <div className='tech-stack-page__logo-box'>
            <img src={d3Icon} alt="D3 Icon" className="tech-stack-page__logo" />
            <img src={knexjs} alt="D3 Icon" className="tech-stack-page__logo" />
            <img src={mysql} alt="D3 Icon" className="tech-stack-page__logo" />
            <img src={nodejs} alt="D3 Icon" className="tech-stack-page__logo" />
            <img src={reactjs} alt="D3 Icon" className="tech-stack-page__logo" />
            <img src={sass} alt="D3 Icon" className="tech-stack-page__logo" />

          </div>
        </div>;
}
