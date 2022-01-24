import React, { Component } from 'react';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
// import Doughnut from '../../components/Doughnut/Doughnut';
const data = [
  { value: 40 },
  { value: 25 },
  { value: 15 },
  { value: 8 },
  { value: 2 }
];
export default class FundPage extends Component {
  
  render() {

    return <div>
        <ChartComponent data={data}/>
    </div>;
  }
}
