import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function TopStocksTable({fund}) {

  const sumval = fund
  .map((holding) => (holding.stockvalue))
  .reduce((prev, curr) => prev + curr, 0);

  
    return <Table>
       <thead>
          <tr>           
           <td>Company</td><td>Shares</td><td>Weighting</td><td>Value</td><td>Net Change</td>
           </tr>
          </thead>
          <tbody>
          
            {fund.map((holding) => ( 
               <tr key={uniqid()}  >
                  <td  >{holding.name}</td>
                  <td  >{holding.shares}</td>
                  <td  >{(holding.stockvalue/sumval).toFixed(2)*100+'%'}</td> 
                  <td  >{holding.stockvalue}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

