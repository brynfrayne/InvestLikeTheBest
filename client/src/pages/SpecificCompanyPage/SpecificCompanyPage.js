import React, { Component } from 'react';
import BarChart from '../../components/BarChart/BarChart';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import axios from 'axios';
export default class CompanyPage extends Component {

  componentDidMount() {
    axios.get('http://localhost:8000/company/:cusip')
    .then((response)=> {
      console.log(response.data)
    })
  }
    
    render() {
    return <div>
      <Header />
      {/* <Hero dropDown={this.state.dropDown} params={this.props.match.params.CIK}/> */}
        {/* <BarChart data={this.data}/> */}
      {/* <DrawBarChart data={data}/> */}
    </div>;
  }
}
