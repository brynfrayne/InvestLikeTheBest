import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import uniqid from 'uniqid';
import MostHeldStocks from '../../components/MostHeldStocks/MostHeldStocks';
import axios from 'axios';


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
         console.log(response.data)
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
                    topStocks.push(topStock[0]);
                    this.setState({
                        biggestBets : topStocks
                    })
                })

        }
    }
    )}

  render() {
      if (!this.state.investors) {
          return <p>Choo chooooo, here we go</p>
      }
    return <div>
        <Header />
        <Hero dropDown={this.state.dropDown} params={'charts'}/>
        <MostHeldStocks />
        {/* <ChartComponent data={this.state.data}/> */}

    </div>;
  }
}
