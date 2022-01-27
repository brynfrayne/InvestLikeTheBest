import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default function TableComponent({fund}) {

  const sumval = fund.holdings
  .map((holding) => (holding.value))
  .reduce((prev, curr) => prev + curr, 0);

  
    return <Table>
       <thead>           
           <td>Company</td><td>Shares</td><td>Weighting</td><td>Value</td><td>Net Change</td>
          </thead>
          <tbody>
          
            {fund.holdings.map((holding) => ( 
               <tr>
                  <td key={holding.cusip} >{holding.name}</td>
                  <td key={holding.cusip} >{holding.shares}</td>
                  <td key={holding.cusip} >{holding.value}</td> 
                  <td key={holding.cusip} >{(holding.value/sumval).toFixed(2)*100+'%'}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

