import React, { Component } from 'react';
import BarChart from '../../components/BarChart/BarChart';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import MostPopularCompaniesTable from '../../components/MostPopularCompaniesTable/MostPopularCompaniesTable';
import "./CompanyPage.scss";
export default class CompanyPage extends Component {
  state = {
    stocks : null
  }

  componentDidMount() {
    axios.get('http://localhost:8000/company/')
    .then((response)=> {
      const mostHeldStocks = response.data.sort((a,b)=>(b.stockCount - a.stockCount)).slice(0,20);
      this.setState({
        stocks: mostHeldStocks
      })
    })
  }
    
    render() {
      if (this.state.stocks === null) {
        return <p>Here we go, choo, choo!!</p>
      }
    return <div>
      <Header />
      <h1 className="company-page__title">Top 20 Most Held Companies</h1>
      <MostPopularCompaniesTable  stocks={this.state.stocks}/>
    </div>;
  }
}
