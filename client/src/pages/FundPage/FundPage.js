import React, { Component } from 'react';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TableComponent from '../../components/TableComponent/TableComponent';
import uniqid from 'uniqid';
import axios from 'axios';
import "./FundPage.scss";

  let topStocks;
export default class FundPage extends Component {
    
  state = {

  fund : null,
  dropDown: [
    {title:'Q1 - 2021', id:uniqid(), url:'Q1-21'},
    {title:'Q2 - 2021', id:uniqid(), url:'Q2-21'},
    {title:'Q3 - 2021', id:uniqid(), url:'Q3-21'},
    {title:'Q4 - 2020', id:uniqid(), url:'Q4-20'}
  ],
  data : null
   };
   
   componentDidMount() {
    axios.get('http://localhost:8000/funds/'+this.props.match.params.CIK +"/"+this.props.match.params.period_of_report)
    .then((response)=> {
      
      this.setState({
        fund:response.data
      
      })
            
    topStocks = this.state.fund.sort((a,b)=> (b.value - a.value)).slice(0,6);
      this.setState({
              data:topStocks
            })
  })}
  componentDidUpdate(prevProps) {
    if (this.props.match.params.period_of_report !== prevProps.match.params.period_of_report) {
      axios.get('http://localhost:8000/funds/'+this.props.match.params.CIK +"/"+this.props.match.params.period_of_report)
    .then((response)=> {
      
      this.setState({
        fund:response.data
      
      })
            
    topStocks = this.state.fund.sort((a,b)=> (b.value - a.value)).slice(0,6);
      this.setState({
              data:topStocks
            })
    })
  }}
  
  render() {
    
    if (this.state.fund === null || this.state.data === null ) {
      return <p>Choo choo, Here we go!!</p>
    }
    const sumval = this.state.fund
    .map((holding) => (holding.value))
    .reduce((prev, curr) => prev + curr, 0);

    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={`funds/${this.props.match.params.CIK}`}/>
      <div className='fund-page__title-box'>
        <h2 className='fund-page__subtitle'>{this.state.fund[0].fund}</h2>
        <h1 className='fund-page__title'>{this.state.fund[0].investor}</h1>
        <p>{this.state.fund[0].period_of_report}</p>
      </div>  
      <ChartComponent data={this.state.data} sumVal={sumval} />
      <TableComponent fund={this.state.fund} sumVal={sumval}/>
    </div>;
  }
}

console.log("deal with this axios call to polygon in for loop")
// .then((result)=> {
  //   console.log(this.state.fund[0].cusip)
  //   // for(let i=0; i<this.state.fund.length;i++){
  //   axios.get('https://api.polygon.io/v3/reference/tickers?cusip='+ this.state.fund[i].cusip +'&apiKey=6S8WE2mCmlIzzY2UmCIFDAQAZmS13pGL')
  //     .then(response=>{
  //       console.log(response.data)
  //   

  //   for (let i=0; i<topStocks.length; i++){

    //   const filteredCompanyName = topStocks[i].name.split(' ').filter(word => {return word !== 'INC' && word !== 'MD' && word !== 'DEL' && word !== 'CORP' && word !== 'CO' && word !== 'NEW' && word !== 'PLC' && word !== 'HLDG' && word !== 'GROUP'}).join(" ");
    //   topStocks[i].name=filteredCompanyName;

    //   axios.get(`https://company.clearbit.com/v1/domains/find?name=${filteredCompanyName}`, 
    //   {headers : {
    //     Authorization: `Bearer sk_275268748a7fba421ff68563ace779ae`
    //   }})

    //   .then(response => {
       
    //     topStocks[i].logo = response.data.logo; 
    //     this.setState({
    //       data:topStocks
    //     })
    //   })
    //   console.log(topStocks)
      
    // }
    
    // .then((response) => {
    //   console.log(topStocks[3].logo)
    //   console.log(topStocks)
    //   this.setState({
    //     data:topStocks
    //   })
    // })
