import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function TableComponent({fund, sumVal}) {


  
    return <Table>
       <thead>
          <tr>           
           <td className="company-ownership-table__row-item">Company</td><td className="company-ownership-table__row-item">Shares</td><td>Weighting</td><td className="company-ownership-table__row-item">Net Change</td>
           </tr>
          </thead>
          <tbody>
          
            {fund.map((holding) => ( 
               <tr className="company-ownership-table__row" key={uniqid()}  >
                  <td className="company-ownership-table__row-item" >{holding.name}</td>
                  <td className="company-ownership-table__row-item" >{holding.shares}</td>
                  <td className="company-ownership-table__row-item" >{Math.round((holding.value/sumVal)*100)+'%'}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

