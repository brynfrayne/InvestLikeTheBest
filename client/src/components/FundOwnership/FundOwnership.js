import React, { Component } from 'react';
import axios from 'axios';
import CompanyOwnershipBarChart from '../CompanyOwnershipBarChart/CompanyOwnershipBarChart';
import CompanyOwnershipTable from '../CompanyOwnershipTable/CompanyOwnershipTable';

export default class FundOwnership extends Component {
  //   state = {
  //       fundOwnership: null
  //   }
  //   componentDidMount(){
  //       let sortedData;
  //       console.log(this.props.cusip)

  //       axios.get('http://localhost:8000/company/'+this.props.cusip+'/Q3-21/institutional-ownership')
  //       .then(response => {
  //         console.log(response.data)
  //         let newArray = [];
  //       for(let i = 0; i < response.data.length; i++) {

  //         // if the investors have numerous listings for the same stock we must consolidate them
          
  //         if ( newArray.length>=1 && newArray[newArray.length - 1].investor === response.data[i].investor) {
  //               newArray[newArray.length - 1].shares += response.data[i].shares;
  //               newArray[newArray.length - 1].value += response.data[i].value;
  //           } else {newArray.push(response.data[i])}
  //       }
  //       sortedData = newArray.sort((a,b)=>(b.shares - a.shares));
      
  //     })
  //     .then(result => {        
  //       for(let i=0;i < sortedData.length; i++) {
  //         axios.get('http://localhost:8000/funds/'+sortedData[i].CIK+'/'+sortedData[i].period_of_report)
  //         .then(response => {
  //           const sumval = response.data
  //             .map((holding) => (holding.value))
  //             .reduce((prev, curr) => prev + curr, 0);
            
  //           sortedData[i].portfolioValue = sumval; 
         
  //           this.setState({
  //             fundOwnership:sortedData
  //         })
  //         })
  //       } 
  //     })
  // }

  render() {
    // console.log(this.state.fundOwnership)
    if ( !this.props.fundOwnership ) {
        return <div class="loader"></div>
    }  
    return <div>
        <p className="company-page__ticker">{this.props.fundOwnership[0].period_of_report}</p>
      <CompanyOwnershipBarChart data={this.props.fundOwnership}/>

      <CompanyOwnershipTable data={this.props.fundOwnership} />
    </div>;
  }
}
