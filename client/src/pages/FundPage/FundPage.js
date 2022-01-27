import React, { Component } from 'react';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TableComponent from '../../components/TableComponent/TableComponent';

// const data = [
//   { value: 40 },
//   { value: 25 },
//   { value: 15 },
//   { value: 8 },
//   { value: 2 }
// ];

// const sumval = this.state.fund.holdings
// .map((holding) => (holding.value))
// .reduce((prev, curr) => prev + curr, 0);
// console.log(sumval);
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
        value: 37491,
        shares: 165320,

    },
    {
        name: "Bank of America Corp",
        cusip: "060505104",
        value: 94829,
        shares: 2300000,

    },
    {
        name: "Posco ADR",
        cusip: "693483109",
        value: 748,
        shares: 9745,

    },
    {
        name: "US Bancorp",
        cusip: "902973304",
        value: 7976,
        shares: 140000,

    },
    {
        name: "Wells Fargo & Co",
        cusip: "949746101",
        value: 72093,
        shares: 1591800,

    }
    ]

  }
   };

  

  render() {

    return <div>
      <Header />
      <Hero />
      <ChartComponent data={this.state.fund.holdings}/>
      <TableComponent fund={this.state.fund}/>
    </div>;
  }
}
