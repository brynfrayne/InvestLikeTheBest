import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import uniqid from 'uniqid';
import axios from 'axios';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import BiggestBetsTableComponent from '../../components/BiggestBetsTableComponent/BiggestBetsTableComponent';


export default class BiggestBetsPage extends Component {
  state = { 
  
  dropDown : [
    {title:'Most Held Stocks', id:uniqid(), url:'most_held_stocks'},
    {title:'Most Sold Last Quarter', id:uniqid(), url:'most_sold_qtr'},
    {title:'Most Bought Last Quarter', id:uniqid(), url:'most_bought_last_qtr'},
    {title:'Biggest Bets', id:uniqid(), url:'biggest_bets'}
  ],
  investors: null,
  biggestBets: null

}

componentDidMount() {
   axios.get(process.env.REACT_APP_API_URI +'/company/reddit')
    .then(response => {
        console.log(response.data)
        
    })
    }

  render() {
      if (!this.state.investors || !this.state.biggestBets) {
          return <p>Choo chooooo, here we go</p>
      }
    
    return <div>
        <Header />
        <Hero dropDown={this.state.dropDown} params={'charts'}/>
        <BiggestBetsTableComponent fund={this.state.biggestBets} />
    </div>;
  }
}
