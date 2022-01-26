import React from 'react';
import bullBear from '../../assets/images/bearsvsbulls-1.jpeg';
import DropDown from '../../components/DropDown/DropDown';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
import './LandingPage.scss';

export default function LandingPage() {
  return <div>
          <div className='landing-page__header'>
            
            <NavBar/>
            <h1 className='landing-page__title'>Invest Like The Best</h1>
            {/* <DropDown className='landing-page__header--item'/> */}
            <Search />
          </div>
          <img src={bullBear} alt="Logo" className="landing-page__image" />
        </div>;
}