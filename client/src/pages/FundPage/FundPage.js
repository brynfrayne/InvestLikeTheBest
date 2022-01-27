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
   state = {
     data : [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 }
  ],
  fund : {
    investor:"Bill Ackman",
    fund:"Pershing Square Capital Management",
    period_of_report: "Q1-21",
    holdings: [
      {
        name: "Alibaba Group Holding Ltd",
        cusip: "01609W102",
        value: "37,491",
        shares: "165,320",

    },
    {
        name: "Bank of America Corp",
        cusip: "060505104",
        value: "94,829",
        shares: "2,300,000",

    },
    {
        name: "Posco ADR",
        cusip: "693483109",
        value: "748",
        shares: "9,745",

    },
    {
        name: "US Bancorp",
        cusip: "902973304",
        value: "7,976",
        shares: "140,000",

    },
    {
        name: "Wells Fargo & Co",
        cusip: "949746101",
        value: "72,093",
        shares: "1,591,800",

    }
    ]

  }
   };

  render() {

    return <div>
      <Header />
      <Hero />
      <ChartComponent data={this.state.data}/>
      <TableComponent fund={this.state.fund}/>
    </div>;
  }
}
