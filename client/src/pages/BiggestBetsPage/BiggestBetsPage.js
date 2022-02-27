import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import uniqid from 'uniqid';
import axios from 'axios';
import BiggestBetsTableComponent from '../../components/BiggestBetsTableComponent/BiggestBetsTableComponent';


export default class BiggestBetsPage extends Component {
  state = { 
  
  dropDown : [
    {title:'Most Held Stocks', id:uniqid(), url:'most_held_stocks'},
    {title:'Biggest Bets', id:uniqid(), url:'biggest_bets'}
  ],
  investors: null,
  biggestBets: null

}

componentDidMount() {
    axios.get('https://investlikethebest.herokuapp.com/funds')
     .then((response)=> {
       this.setState({
         investors:response.data
       })
     })
    
    .then(response => {
        let topStocks = [];
        for (let i = 0; i < this.state.investors.length; i++) {
            axios.get('https://investlikethebest.herokuapp.com/funds/'+this.state.investors[i].CIK +"/Q3-21")
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
        return <div class="loader"></div>
      }
    
    return <div>
        <Header />
        <Hero dropDown={this.state.dropDown} params={'charts'}/>
        <BiggestBetsTableComponent fund={this.state.biggestBets} />
    </div>;
  }
}
