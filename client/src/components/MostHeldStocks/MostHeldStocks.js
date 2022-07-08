import React, { Component } from 'react';
import BarChart from '../../components/BarChart/BarChart';
import axios from 'axios';
import MostPopularCompaniesTable from '../../components/MostPopularCompaniesTable/MostPopularCompaniesTable';
export default class MostHeldStocks extends Component {
  state = {
    stocks : null
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URI + '/company/Q3-21')
    .then((response)=> {
      const mostHeldStocks = response.data.sort((a,b)=>(b.stockCount - a.stockCount)).slice(0,20);
      this.setState({
        stocks: mostHeldStocks
      })
    })
  }
    
    render() {
      if (this.state.stocks === null) {
        return <div className="loader"></div>
      }
    return <div>
      {/* <Header /> */}
      <h1 className="company-page__title">Top 20 Most Held Companies</h1>
      <BarChart data={this.state.stocks} />
      <MostPopularCompaniesTable  stocks={this.state.stocks}/>
    </div>;
  }
}
