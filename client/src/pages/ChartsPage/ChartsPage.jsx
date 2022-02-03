import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import uniqid from 'uniqid';
import MostHeldStocks from '../../components/MostHeldStocks/MostHeldStocks';
export default class ChartsPage extends Component {
  state = { 
  dropDown : [
    {title:'Most Held Stocks', id:uniqid(), url:'most_held_stocks'},
    {title:'Biggest Bets', id:uniqid(), url:'biggest_bets'}
  ]

}
  render() {
    return <div>
        <Header />
        <Hero dropDown={this.state.dropDown} params={'charts'}/>
        <MostHeldStocks />
        

    </div>;
  }
}
