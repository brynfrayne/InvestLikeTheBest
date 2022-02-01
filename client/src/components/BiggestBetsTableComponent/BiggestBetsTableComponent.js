import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function BiggestBetsTableComponent({fund}) {
let sortedFund= fund.sort((a,b)=> ((b.value/b.portfolioValue) - (a.value/a.portfolioValue)));


  
    return <Table>
       <thead>
          <tr>           
           <td className="company-ownership-table__row-item">Company</td><td className="company-ownership-table__row-item">Shares</td><td>Weighting</td>
           </tr>
          </thead>
          <tbody>
          
            {sortedFund.map((holding) => ( 
               <tr className="company-ownership-table__row" key={uniqid()}  >
                  <td className="company-ownership-table__row-item" >{holding.investor   }</td>
                  <td className="company-ownership-table__row-item" >{holding.name}</td>
                  <td className="company-ownership-table__row-item" >{Math.round((holding.value/holding.portfolioValue)*100)+'%'}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }
