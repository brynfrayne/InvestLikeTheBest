import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default function TableComponent({fund}) {
  console.log(typeof(fund));
  console.log(fund);

    return <Table>
       <thead>           
           <td>Company</td><td>Shares</td><td>Weighting</td><td>Value</td><td>Net Change</td>
          </thead>
          <tbody>
          <tr>
             {fund.holdings.map((holding) => ( 
                <td key={holding.cusip} >{holding.name}</td>
                <td key={holding.cusip} >{holding.shares}</td> 
             )
             )
             }
                         
              
       </tr>
       </tbody>

    </Table>
   ;

  }

