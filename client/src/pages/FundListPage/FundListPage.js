import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import InvestorsList from '../../components/InvestorsList/InvestorsList';
import axios from 'axios';

// const sumval = this.state.fund.holdings
// .map((holding) => (holding.value))
// .reduce((prev, curr) => prev + curr, 0);
// console.log(sumval);

// below is a template for the investors info ill need passed in 
// const investors = [
//   {name:'', fund:'',CIK:'',top3holdings:[{icon:''},{icon:''},{icon:''}]}
// ]

export default class FundListPage extends Component {
   state = {
     data : [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 }
  ],
  investors : null,
   };
   
   componentDidMount() {
     axios.get('http://localhost:8000/funds')
     .then((response)=> {
       this.setState({
         investors:response.data
       })
     })
   }
  

  render() {
    if (this.state.investors === null) {
      return <p>Choo choo, Here we go!!</p>
    }
    // const sumval = this.state.fund.holdings
    // .map((holding) => (holding.value))
    // .reduce((prev, curr) => prev + curr, 0);

    return <div>
      <Header />
      {/* <Hero /> */}
      <InvestorsList investors={this.state.investors}/>

    </div>;
  }
}
