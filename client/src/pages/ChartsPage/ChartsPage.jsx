import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import uniqid from 'uniqid';
export default class ChartsPage extends Component {
  state = { 
  data : [
    { value: 35 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 },
    { value: 4 },
    { value: 8 },
  ],
  dropDown : [
    {title:'Most Held Stocks', id:uniqid(), url:'most_held_stocks'},
    {title:'Most Sold Last Quarter', id:uniqid(), url:'most_sold_qtr'},
    {title:'Most Bought Last Quarter', id:uniqid(), url:'most_bought_last_qtr'},
    {title:'Biggest Bets', id:uniqid(), url:'biggest_bets'}
  ]

}
  render() {
    return <div>
        <Header />
        <Hero dropDown={this.state.dropDown}/>
        <ChartComponent data={this.state.data}/>

    </div>;
  }
}
