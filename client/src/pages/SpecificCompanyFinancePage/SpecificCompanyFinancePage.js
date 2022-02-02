import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import uniqid from 'uniqid';
import CompanyStatsTable from '../../components/CompanyStatsTable/CompanyStatsTable';


export default class SpecificCompanyFinancePage extends Component {

    state = {
    dropDown: [
        {title:'Q1 - 2021', id:uniqid(), url:'Q1-21'},
        {title:'Q2 - 2021', id:uniqid(), url:'Q2-21'},
        {title:'Q3 - 2021', id:uniqid(), url:'Q3-21'},
        {title:'Q4 - 2020', id:uniqid(), url:'Q4-20'}
    ],
    data : null,
    img : null,
    companyData: null,
    };
    
  componentDidMount() {
          axios.get('https://api.polygon.io/v3/reference/tickers?cusip='+ this.props.match.params.cusip +'&apiKey=6S8WE2mCmlIzzY2UmCIFDAQAZmS13pGL')
            .then(response=>{
              this.setState({
                companyData:response.data.results[0]
              })
              axios.get(`https://api.twelvedata.com/logo?symbol=${response.data.results[0].ticker}&apikey=7526608492784ea0bc724efc66592c3f`)
                .then(response => {
                  this.setState({
                    img: response.data.url
                  })
              })
           
            
              axios.get(`https://financialmodelingprep.com/api/v3/ratios/${this.state.companyData.ticker}?period=quarter&limit=140&apikey=d955401eaf61979988a8f8b8073ea1f8`)
                .then(response => {
                  console.log(response.data)
                  this.setState({
                    stats: response.data
                  })
                })
            })         
      
  }

  
    
    
    render() {
      
        if ( !this.state.companyData || !this.state.img  ) {
            return <p>CHoo choooo, here we go!!🚂 </p>
        }  
        
    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={`company/${this.props.match.params.cusip}`}/>
      <h1 className="company-page__title">{this.state.companyData.name}</h1>
      <p className="company-page__ticker">Ticker: {this.state.companyData.ticker}</p>
      <img className='company-page__image' src={this.state.img}  alt='/'/>
      <CompanyStatsTable stats={this.state.stats} />
     
    </div>;
  }
}
