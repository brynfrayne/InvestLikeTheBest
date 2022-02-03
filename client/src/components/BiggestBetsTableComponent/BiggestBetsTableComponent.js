import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

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
                  <td className="company-ownership-table__row-item" ><Link  className='table-links' to={`/funds/${holding.CIK}/Q3-21`}>{holding.investor}</Link></td>
                  <td className="company-ownership-table__row-item" ><Link className='table-links' to={`/company/${holding.cusip}/${holding.period_of_report}`}>{holding.name}</Link></td>
                  <td className="company-ownership-table__row-item" >{Math.round((holding.value/holding.portfolioValue)*100)+'%'}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

