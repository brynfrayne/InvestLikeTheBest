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
          axios.get('http://localhost:8000/company/'+ this.props.match.params.cusip +"/ticker")
            .then(response=>{
              this.setState({
                companyData:response.data
              })
              axios.get(`http://localhost:8000/company/${this.props.match.params.cusip}/${response.data.results[0].ticker}/logo`)
                .then(response => {
                  console.log(response.data)
                  this.setState({
                    img: response.data.url
                  })
              })
           
            console.log(this.state.companyData)
              axios.get(`http://localhost:8000/company/${this.state.companyData.results[0].ticker}/stats`)
                .then(response => {
                  console.log(response.data)
                  this.setState({
                    stats: response.data
                  })
                })
            })         
      
  }

  
    
    
    render() {
      
        if ( !this.state.companyData || !this.state.img || !this.state.stats ) {
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
