import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function TableComponent({fund}) {

  const sumval = fund
  .map((holding) => (holding.value))
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
                  <td >{holding.name}</td>
                  <td >{holding.shares}</td>
                  <td >{(holding.value/sumval).toFixed(2)*100+'%'}</td> 
                  <td >{holding.value}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

