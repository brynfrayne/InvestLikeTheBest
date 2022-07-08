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
    axios.get(process.env.REACT_APP_API_URI + '/funds/'+this.props.match.params.CIK +"/"+this.props.match.params.period_of_report)
    .then((response)=> {
      console.log(response)
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
      axios.get(process.env.REACT_APP_API_URI + '/funds/'+this.props.match.params.CIK +"/"+this.props.match.params.period_of_report)
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
      return <div className="loader"></div>
    }
    const sumval = this.state.fund
    .map((holding) => (holding.value))
    .reduce((prev, curr) => prev + curr, 0);

    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={`funds/${this.props.match.params.CIK}`}/>
      <div className='fund-page__title-box'>
        <div className='fund-page__title-container'>
        <h2 className='fund-page__subtitle'>{this.state.fund[0].fund}</h2>
        </div>
        <div className='fund-page__title-container'>
        <h1 className='fund-page__title'>{this.state.fund[0].investor}</h1>
        </div>
        <div className='fund-page__title-container'>
        <p>{this.state.fund[0].period_of_report}</p>
        </div>
      </div>  
      <ChartComponent data={this.state.data} sumVal={sumval} />
      <TableComponent fund={this.state.fund} sumVal={sumval}/>
    </div>;
  }
}

