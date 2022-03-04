import React, { Component } from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import heroImg from '../../assets/images/Bull-Markets-and-Bear-Markets-Explained-for-Beginner-Investors-884x584.jpg'
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login'
import './AuthPage.scss';
import Dashboard from '../DashboardPage/DashboardPage'

export default class AuthPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='hero'>
            <Link to='/'><img className='hero__img' src={heroImg} alt="bull and bear" /></Link>
        </div>
        <div className='tab-container'>
        <NavLink className="btn btn-primary btn-block" activeClassName='btn--active' to={`/userAuth`}>LOGIN</NavLink>
        <NavLink className="btn btn-primary btn-block" activeClassName='btn--active' to={`/userAuth/signUp`}>SIGN UP</NavLink>
      </div>  

        
        <Switch>
            <Route exact path='/userAuth'>
                <Login />
            </Route>
            <Route exact path='/userAuth/signUp'>
                <SignUp />
            </Route>
            <Route exact path='/userAuth/dashboard'>
                <Dashboard />
            </Route>
        </Switch>
      </div>
    )
  }
}
