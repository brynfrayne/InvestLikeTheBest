import React, { Component } from 'react';
import BarChart from '../../components/BarChart/BarChart';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import MostPopularCompaniesTable from '../../components/MostPopularCompaniesTable/MostPopularCompaniesTable';
import "./CompanyPage.scss";
import uniqid from 'uniqid';

export default class CompanyPage extends Component {
  state = {
    dropDown: [
      {title:'Q1 - 2021', id:uniqid(), url:'Q1-21'},
      {title:'Q2 - 2021', id:uniqid(), url:'Q2-21'},
      {title:'Q3 - 2021', id:uniqid(), url:'Q3-21'},
      {title:'Q4 - 2020', id:uniqid(), url:'Q4-20'}
  ],
    stocks : null
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URI + '/company/'+this.props.match.params.period_of_report)
    .then((response)=> {
      const mostHeldStocks = response.data.sort((a,b)=>(b.stockCount - a.stockCount)).slice(0,20);
      this.setState({
        stocks: mostHeldStocks
      })
    })
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.period_of_report !== prevProps.match.params.period_of_report ) {
      axios.get(process.env.REACT_APP_API_URI + '/company/'+this.props.match.params.period_of_report)
    .then((response)=> {
      const mostHeldStocks = response.data.sort((a,b)=>(b.stockCount - a.stockCount)).slice(0,20);
      this.setState({
        stocks: mostHeldStocks
      })
    })
    }  
  }
    
    render() {
      if (this.state.stocks === null) {
        return <div className="loader"></div>
      }
    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={'company'}/>
      <h1 className="company-page__title">Top 20 Most Held Companies</h1>
      <BarChart data={this.state.stocks} />
      <MostPopularCompaniesTable  stocks={this.state.stocks}/>
    </div>;
  }
}
