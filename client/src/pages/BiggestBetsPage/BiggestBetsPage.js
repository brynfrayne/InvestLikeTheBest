import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import uniqid from 'uniqid';
import axios from 'axios';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import BiggestBetsTableComponent from '../../components/BiggestBetsTableComponent/BiggestBetsTableComponent';


export default class BiggestBetsPage extends Component {
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
  ],
  investors: null,
  biggestBets: null

}

componentDidMount() {
    axios.get('http://localhost:8000/funds')
     .then((response)=> {
       this.setState({
         investors:response.data
       })
     })
    
    .then(response => {
        let topStocks = [];
        for (let i = 0; i < this.state.investors.length; i++) {
            axios.get('http://localhost:8000/funds/'+this.state.investors[i].CIK +"/Q3-21")
                .then(response => {
                    let topStock = response.data.sort((a,b)=> (b.value - a.value)).slice(0,1);
                    let portfolioValue = response.data.map((holding) => (holding.value)).reduce((prev, curr) => prev + curr, 0);
                    topStock[0].portfolioValue = portfolioValue;
                    topStocks.push(topStock[0]);
                    this.setState({
                        biggestBets : topStocks
                    })
        console.log(this.state.biggestBets)

                })                
        }
    }
    )}

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
