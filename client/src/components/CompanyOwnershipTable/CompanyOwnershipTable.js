import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import './CompanyOwnershipTable.scss';
import { Link } from 'react-router-dom';

export default function CompanyOwnershipTable({data}) {

   data.sort((a,b)=>((b.value/b.portfolioValue)-(a.value/a.portfolioValue)))
   
    return <Table >
       <thead>
          <tr>           
           <td className="company-ownership-table__row-item company-ownership-table__row-item--title">Investor</td>
           <td className="company-ownership-table__row-item company-ownership-table__row-item--title">Fund</td>
           <td className="company-ownership-table__row-item company-ownership-table__row-item--title">Portfolio %</td>
           </tr>
          </thead>
          <tbody>
          
            {data.map((holding) => ( 
               
               <tr className="company-ownership-table__row" key={uniqid()}  >
                  <td className="company-ownership-table__row-item">
                     <Link className='table-links' to={`/funds/${holding.CIK}/Q3-21`}>{holding.investor}</Link>
                  </td>
                  <td className="company-ownership-table__row-item">
                     <Link className='table-links' to={`/funds/${holding.CIK}/Q3-21`}>{holding.fund}</Link>
                  </td>
                  <td className="company-ownership-table__row-item">
                     {Math.round((holding.value/holding.portfolioValue)*100) +'%'}
                  </td>
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

