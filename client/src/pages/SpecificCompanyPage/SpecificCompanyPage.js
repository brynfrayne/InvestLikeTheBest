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
    let sortedData;
    axios.get('http://localhost:8000/company/'+this.props.match.params.cusip +'/'+this.props.match.params.period_of_report)
    .then((response)=> {
        let newArray = [];
        for(let i = 0; i < response.data.length; i++) {
            if ( newArray.length>=1 && newArray[newArray.length - 1].investor === response.data[i].investor) {
                newArray[newArray.length - 1].shares += response.data[i].shares;
                newArray[newArray.length - 1].value += response.data[i].value;
            } else {newArray.push(response.data[i])}
        }
        sortedData = newArray.sort((a,b)=>(b.shares - a.shares));
      
      })
      .then(result => {        
        for(let i=0;i < sortedData.length; i++) {
          axios.get('http://localhost:8000/funds/'+sortedData[i].CIK+'/'+sortedData[i].period_of_report)
          .then(response => {
            const sumval = response.data
              .map((holding) => (holding.value))
              .reduce((prev, curr) => prev + curr, 0);
            
            sortedData[i].portfolioValue = sumval; 
         
            this.setState({
              fundOwnership:sortedData
          })
          })
        }
        
      })
  }
  componentDidUpdate(prevProps) {
    let sortedData;
    if (this.props.match.params.period_of_report !== prevProps.match.params.period_of_report ) {
      axios.get('http://localhost:8000/company/'+this.props.match.params.cusip +'/'+this.props.match.params.period_of_report)
      .then((response)=> {
          let newArray = [];
          for(let i = 0; i < response.data.length; i++) {
              if ( newArray.length>=1 && newArray[newArray.length - 1].investor === response.data[i].investor) {
                  newArray[newArray.length - 1].shares += response.data[i].shares;
                  newArray[newArray.length - 1].value += response.data[i].value;
              } else {newArray.push(response.data[i])}
          }
          sortedData = newArray.sort((a,b)=>(b.shares - a.shares));
        
        })
        .then(result => {
          for(let i=0;i < sortedData.length; i++) {
            axios.get('http://localhost:8000/funds/'+sortedData[i].CIK+'/'+sortedData[i].period_of_report)
            .then(response => {
              const sumval = response.data
                .map((holding) => (holding.value))
                .reduce((prev, curr) => prev + curr, 0);
              sortedData[i].portfolioValue = sumval;
              this.setState({
                fundOwnership:sortedData
            })
            })
          }
          
        })
    }
  }
    
    render() {
      
        if ( !this.state.fundOwnership ) {
            return <p>CHoo choooo, here we go!!🚂 </p>
        }  
        console.log(this.state.fundOwnership[0].portfolioValue)
    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={`company/${this.props.match.params.cusip}`}/>
      <h1>{this.state.fundOwnership[0].name}</h1>
      <CompanyOwnershipBarChart data={this.state.fundOwnership}/>
      <CompanyOwnershipTable data={this.state.fundOwnership} />
    </div>;
  }
}
