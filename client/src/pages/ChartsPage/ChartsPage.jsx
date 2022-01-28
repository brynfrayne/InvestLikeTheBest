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
    ['Most Held Stocks', uniqid()],
    ['Most Sold Last Quarter', uniqid()],
    ['Most Bought Last Quarter', uniqid()],
    ['Biggest Bets', uniqid()]
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
