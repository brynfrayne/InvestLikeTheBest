import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Doughnut from '../../components/Doughnut/Doughnut';
import ChartComponent from '../../components/ChartComponent/ChartComponent';

export default class ChartsPage extends Component {
   data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 }
  ];
  render() {
    return <div>
        <Header />
        <Hero />
        <ChartComponent data={this.data}/>

    </div>;
  }
}
