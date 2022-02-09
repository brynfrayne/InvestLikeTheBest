import React, { Component } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import CompanyStatsTable from '../CompanyStatsTable/CompanyStatsTable';
import CompanyEarningsTable from '../CompanyEarningsTable/CompanyEarningsTable';
import SpecificCompanyHeader from '../SpecificCompanyHeader/SpecificCompanyHeader';


export default class CompanyStats extends Component {

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
    price: null,
    earnings: null
    };
    
  componentDidMount() {
          axios.get('http://localhost:8000/company/'+ this.props.cusip +"/ticker")
            .then(response=>{
              this.setState({
                companyData:response.data.results[0]
              })
              axios.get(`http://localhost:8000/company/${this.props.cusip}/${response.data.results[0].ticker}/logo`)
                .then(response => {
                  this.setState({
                    img: response.data.url
                  })
              })
              axios.get(`http://localhost:8000/company/${this.state.companyData.ticker}/price`)
                .then(response => {
                  this.setState({
                    price:response.data[0]
                  })
                })
              axios.get(`http://localhost:8000/company/${this.state.companyData.ticker}/stats`)
                .then(response => {
                  this.setState({
                    stats: response.data
                  })
                })
              axios.get(`http://localhost:8000/company/earningssuprises/${this.state.companyData.ticker}`)
                .then(response => {
                  this.setState({
                    earnings:response.data
                  })
                })
            }
            )}
    
    render() {
      
        if ( !this.state.companyData || !this.state.img || !this.state.stats || !this.state.earnings || !this.state.price) {
            return <div class="loader"></div>
        }  
        
    return <div>
      <CompanyStatsTable stats={this.state.stats.slice(0,6)} />
      <CompanyEarningsTable earnings={this.state.earnings.slice(0,6)} />
     
    </div>;
  }
}
