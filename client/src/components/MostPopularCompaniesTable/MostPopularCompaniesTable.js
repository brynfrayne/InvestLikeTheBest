import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function MostPopularCompaniesTable({stocks}) {


  
    return <Table>
       <thead>
          <tr>           
           <td>Company</td><td>Shares</td><td># Funds Who Own</td>
           </tr>
          </thead>
          <tbody>
          
            {stocks.map((stock) => ( 
               <tr>
                  <td key={uniqid()} >{stock.name}</td>
                  <td key={uniqid()} >{stock.shares}</td>
                  <td key={uniqid()} >{stock.stockCount}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

