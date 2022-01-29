import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function TableComponent({fund}) {

  const sumval = fund
  .map((holding) => (holding.value))
  .reduce((prev, curr) => prev + curr, 0);

  
    return <Table>
       <thead>           
           <td>Company</td><td>Shares</td><td>Weighting</td><td>Value</td><td>Net Change</td>
          </thead>
          <tbody>
          
            {fund.map((holding) => ( 
               <tr>
                  <td key={uniqid()} >{holding.name}</td>
                  <td key={uniqid()} >{holding.shares}</td>
                  <td key={uniqid()} >{holding.value}</td> 
                  <td key={uniqid()} >{(holding.value/sumval).toFixed(2)*100+'%'}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

