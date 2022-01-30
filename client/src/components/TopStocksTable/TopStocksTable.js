import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function TableComponent({fund}) {

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
               <tr>
                  <td key={uniqid()} >{holding.name}</td>
                  <td key={uniqid()} >{holding.shares}</td>
                  <td key={uniqid()} >{(holding.stockvalue/sumval).toFixed(2)*100+'%'}</td> 
                  <td key={uniqid()} >{holding.stockvalue}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

