import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TopStocksTable from '../../components/TopStocksTable/TopStocksTable';
import BarChart from '../../components/BarChart/BarChart';
import uniqid from 'uniqid';
import axios from 'axios';


export default class TopStocksPage extends Component {
  state = { 
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
        <BarChart data={this.state.topStocks}/>
        <TopStocksTable fund={this.state.topStocks} />

    </div>;
  }
}
