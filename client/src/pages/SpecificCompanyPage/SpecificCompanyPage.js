import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
import uniqid from 'uniqid';
import SpecificCompanyHeader from '../../components/SpecificCompanyHeader/SpecificCompanyHeader';
import CompanyNews from '../../components/CompanyNews/CompanyNews';
import FundOwnership from '../../components/FundOwnership/FundOwnership';
import { NavLink, Route, Switch } from 'react-router-dom';
import CompanyStats from '../../components/CompanyStats/CompanyStats';
import './SpecificCompanyPage.scss';
import CompanyValuation from '../../components/CompanyValuation/CompanyValuation';



export default class SpecificCompanyPage extends Component {

    state = {

    fundOwnership : null,
    dropDown: [
        {title:'Statistics', id:uniqid(), url:'stats'},
        {title:'Q1 - 2021', id:uniqid(), url:'Q1-21'},
        {title:'Q2 - 2021', id:uniqid(), url:'Q2-21'},
        {title:'Q3 - 2021', id:uniqid(), url:'Q3-21'},
        {title:'Q4 - 2020', id:uniqid(), url:'Q4-20'}
    ],
    data : null,
    img : null,
    companyData: null
    };
    
  componentDidMount() {
    let sortedData;
    console.log(this.props.match.params.period_of_report)
    console.log(this.props.match.params.cusip)

    axios.get('https://investlikethebest.herokuapp.com/company/'+this.props.match.params.cusip +'/'+this.props.match.params.period_of_report+'/institutional-ownership')
    .then((response)=> {
      console.log(response.data)
      let newArray = [];
        for(let i = 0; i < response.data.length; i++) {

          // if the investors have numerous listings for the same stock we must consolidate them
          
          if ( newArray.length>=1 && newArray[newArray.length - 1].investor === response.data[i].investor) {
                newArray[newArray.length - 1].shares += response.data[i].shares;
                newArray[newArray.length - 1].value += response.data[i].value;
            } else {newArray.push(response.data[i])}
        }
        sortedData = newArray.sort((a,b)=>(b.shares - a.shares));
      
      })
      .then(result => {        
        for(let i=0;i < sortedData.length; i++) {
          axios.get('https://investlikethebest.herokuapp.com/funds/'+sortedData[i].CIK+'/'+sortedData[i].period_of_report)
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
      .then((result)=> {
          axios.get('https://investlikethebest.herokuapp.com/company/'+ this.props.match.params.cusip +"/ticker")
            .then(response=>{
              this.setState({
                companyData:response.data.results[0]
              });
        
        })
      }
      )
}
  componentDidUpdate(prevProps) {
    let sortedData;
    if (this.props.match.params.period_of_report !== prevProps.match.params.period_of_report ) {
      axios.get('https://investlikethebest.herokuapp.com/company/'+this.props.match.params.cusip +'/Q3-21/institutional-ownership')
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
            axios.get('https://investlikethebest.herokuapp.com/funds/'+sortedData[i].CIK+'/'+sortedData[i].period_of_report)
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
      
        if ( !this.state.companyData) {
            return <div class="loader"></div>
        }  
    
    return <div>
      <Header />
      <Hero dropDown={this.state.dropDown} params={`company/${this.props.match.params.cusip}`}/>
      <SpecificCompanyHeader price={this.state.price} companyData={this.state.companyData} img={this.state.img} cusip={this.props.match.params.cusip}/>
      
      <div className='tab-container'>
        <NavLink className='page-tab' activeClassName='page-tab--active' to={`/company/${this.props.match.params.cusip}/stats`}>Statistics</NavLink>
        <NavLink className='page-tab' activeClassName='page-tab--active' to={`/company/${this.props.match.params.cusip}/news`}>News</NavLink>
        <NavLink className='page-tab' activeClassName='page-tab--active' to={`/company/${this.props.match.params.cusip}/ownership`}>Ownership</NavLink>
        <NavLink className='page-tab' activeClassName='page-tab--active' to={`/company/${this.props.match.params.cusip}/valuation`}>Valuation</NavLink>
      </div>  

      <Switch>
        <Route exact path='/company/:cusip/ownership/'>  
          <FundOwnership  cusip={this.props.match.params.cusip} companyData={this.state.companyData} fundOwnership={this.state.fundOwnership}/>
        </Route>
        <Route exact path='/company/:cusip/news'>
          <CompanyNews ticker={this.state.companyData.ticker} />
        </Route>   
        <Route exact path='/company/:cusip/stats'>
          <CompanyStats cusip={this.props.match.params.cusip} />
        </Route> 
        <Route exact path='/company/:cusip/valuation'>
          <CompanyValuation ticker={this.state.companyData.ticker} />
        </Route> 
      </Switch>
      </div>;
  }
}
