import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import InvestorsList from '../../components/InvestorsList/InvestorsList';
import axios from 'axios';
import uniqid from 'uniqid';

export default class FundListPage extends Component {
   state = {
     data : [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 }
  ],
  investors : null,
  dropDown : [
    {title:'Most Held Stocks', id:uniqid(), url:'most_held_stocks'},
    {title:'Most Sold Last Quarter', id:uniqid(), url:'most_sold_qtr'},
    {title:'Most Bought Last Quarter', id:uniqid(), url:'most_bought_last_qtr'},
    {title:'Biggest Bets', id:uniqid(), url:'biggest_bets'}
  ]
   };
   
   componentDidMount() {
     axios.get('http://localhost:8000/funds')
     .then((response)=> {
       this.setState({
         investors:response.data
       })
     })
   }
  

  render() {
    if (this.state.investors === null) {
      return <p>Choo choo, Here we go!!</p>
    }
    // const sumval = this.state.fund.holdings
    // .map((holding) => (holding.value))
    // .reduce((prev, curr) => prev + curr, 0);

    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={'/'}/>
      <InvestorsList investors={this.state.investors}/>

    </div>;
  }
}
