import React, { Component } from 'react';
import CompanyOwnershipBarChart from '../../components/CompanyOwnershipBarChart/CompanyOwnershipBarChart';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import uniqid from 'uniqid';
import CompanyOwnershipTable from '../../components/CompanyOwnershipTable/CompanyOwnershipTable';

export default class SpecificCompanyPage extends Component {

    state = {

    fundOwnership : null,
    dropDown: [
        {title:'Q1 - 2021', id:uniqid(), url:'Q1-21'},
        {title:'Q2 - 2021', id:uniqid(), url:'Q2-21'},
        {title:'Q3 - 2021', id:uniqid(), url:'Q3-21'},
        {title:'Q4 - 2020', id:uniqid(), url:'Q4-20'}
    ],
    data : null
    };
    
  componentDidMount() {
    axios.get('http://localhost:8000/company/'+this.props.match.params.cusip)
    .then((response)=> {
        const sortedData = response.data.sort((a,b)=>(b.shares - a.shares));
      this.setState({
          fundOwnership:sortedData
      })
      })
  }
    
    render() {
        if (this.state.fundOwnership === null) {
            return <p>CHoo choooo, here we go!!🚂 </p>
        }
    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={this.props.match.params.cusip}/>
      <CompanyOwnershipBarChart data={this.state.fundOwnership}/>
      <CompanyOwnershipTable data={this.state.fundOwnership} />
    </div>;
  }
}
