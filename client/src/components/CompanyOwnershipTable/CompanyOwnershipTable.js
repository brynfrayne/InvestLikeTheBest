import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function CompanyOwnershipTable({data}) {

  const sumval = data
  .map((holding) => (holding.stockvalue))
  .reduce((prev, curr) => prev + curr, 0);

  
    return <Table>
       <thead>
          <tr>           
           <td>Investor</td><td>Fund</td><td>Shares</td><td>Value</td>
           </tr>
          </thead>
          <tbody>
          
            {data.map((holding) => ( 
               <tr key={uniqid()}  >
                  <td  >{holding.investor}</td>
                  <td  >{holding.fund}</td>
                  <td  >{holding.shares}</td>
                  <td  >{holding.value}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

