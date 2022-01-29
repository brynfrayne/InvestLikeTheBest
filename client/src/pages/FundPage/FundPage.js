import React, { Component } from 'react';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TableComponent from '../../components/TableComponent/TableComponent';
import uniqid from 'uniqid';
import axios from 'axios';

export default class FundPage extends Component {
    
  state = {

  fund : null,
  dropDown: [
    {title:'Q1 - 2021', id:uniqid(), url:'Q1-21'},
    {title:'Q2 - 2021', id:uniqid(), url:'Q2-21'},
    {title:'Q3 - 2021', id:uniqid(), url:'Q3-21'},
    {title:'Q4 - 2020', id:uniqid(), url:'Q4-20'}
  ]
   };
   
   componentDidMount() {
    axios.get('http://localhost:8000/funds/'+this.props.match.params.CIK)
    .then((response)=> {
      console.log(response.data)
      this.setState({
        fund:response.data
      })
    })
    .then((result)=> {
      console.log(this.state.fund[0].CIK)
      for(let i=0; i<this.state.fund.length;i++){
      axios.get('https://api.polygon.io/v3/reference/tickers?cusip='+ this.state.fund[i].cusip +'&apiKey=6S8WE2mCmlIzzY2UmCIFDAQAZmS13pGL')
        .then(response=>{
          console.log(response.data)
      })
    }
    // )
    // .catch(err => {
    //   console.log('error')
    // })
  })}
  // }
  
  render() {

    if (this.state.fund === null) {
      return <p>Choo choo, Here we go!!</p>
    }
    // render() {
    const sumval = this.state.fund
    .map((holding) => (holding.value))
    .reduce((prev, curr) => prev + curr, 0);
    console.log(sumval);

    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={this.props.match.params.CIK}/>
      <ChartComponent data={this.state.fund} sumVal={sumval}/>
      <TableComponent fund={this.state.fund}/>
    </div>;
  }
}
