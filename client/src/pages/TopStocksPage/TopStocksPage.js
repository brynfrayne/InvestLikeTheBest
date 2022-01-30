import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import BarChart from '../../components/BarChart/BarChart';
import uniqid from 'uniqid';
import axios from 'axios';


export default class TopStocksPage extends Component {
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
  topStocks : null

}

componentDidMount() {
  axios.get('http://localhost:8000/charts/topStocks')
    .then((response)=> {
    const topTen = response.data.sort((a,b)=>(b.stockvalue - a.stockvalue)).slice(0,15);  
      this.setState({
        topStocks: topTen
      })
})};

  render() {

    if (this.state.topStocks === null) {
      return <p>Choo choo, Here we go!!</p>
    }
    
    return <div>
        <Header />
        <Hero dropDown={this.state.dropDown}/>
        {/* <ChartComponent data={this.state.data}/> */}
        <BarChart data={this.state.topStocks}/>

    </div>;
  }
}
