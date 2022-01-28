import React, { Component } from 'react';
import ChartComponent from '../../components/ChartComponent/ChartComponent';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import TableComponent from '../../components/TableComponent/TableComponent';
import uniqid from 'uniqid';


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
  investors : [
    'Bill Ackman - Pershing Square Capital Management',
    'Bill Miller - Miller Value Partners',
    'Carl Icahn - Icahn Capital Management',
    'Charlie Munger - Daily Journal Corp.',
    'Christopher Bloomstran - Semper Augustus',
    'Christopher Davis - Clipper Fund',
    'Chuck Akre - Akre Capital Management',
    'David Abrams - Abrams Capital Management',
    'David Einhorn - Greenlight Capital',
    'David Katz - Matrix Advisors Value',
    'David Tepper - Appaloosa Management',
    'Guy Spier - Aquamarine Capital',
    'Hillman Value Fund',
    'Howard Marks - Oaktree Capital Management',
    'John Armitage - Egerton Capital',
    'Lee Ainslie - Maverick Capital',
    'Li Lu - Himalaya Capital Management',
    'Mohnish Pabrai - Pabrai Investments',
    'Prem Watsa - Fairfax Financial Holdings',
    'Pat Dorsey - Dorsey Asset Management',
    'Ruane, Cunniff & Goldfarb - Sequoia Fund',
    'Seth Klarman - Baupost Group',
    'Thomas Gayner - Markel Asset Management',
    'ValueAct Capital',
    'Warren Buffett - Berkshire Hathaway'
]
  
   };
   

  

  render() {
    
    const sumval = this.state.fund.holdings
    .map((holding) => (holding.value))
    .reduce((prev, curr) => prev + curr, 0);

    return <div>
      <Header />
      <TableComponent fund={this.state.fund}/>
    </div>;
  }
}
