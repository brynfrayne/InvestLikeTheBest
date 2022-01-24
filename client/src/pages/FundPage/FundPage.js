import React, { Component } from 'react';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TableComponent from '../../components/TableComponent/TableComponent';

const data = [
  { value: 40 },
  { value: 25 },
  { value: 15 },
  { value: 8 },
  { value: 2 }
];
export default class FundPage extends Component {
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
      <ChartComponent data={data}/>
      <TableComponent/>
    </div>;
  }
}
