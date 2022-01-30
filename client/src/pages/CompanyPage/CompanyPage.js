import React, { Component } from 'react';
import BarChart from '../../components/BarChart/BarChart';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import MostPopularCompaniesTable from '../../components/MostPopularCompaniesTable/MostPopularCompaniesTable';
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
      {/* <Hero dropDown={this.state.dropDown} params={this.props.match.params.CIK}/> */}
        {/* <BarChart data={this.data}/> */}
      {/* <DrawBarChart data={data}/> */}
      <MostPopularCompaniesTable  stocks={this.state.stocks}/>
    </div>;
  }
}
