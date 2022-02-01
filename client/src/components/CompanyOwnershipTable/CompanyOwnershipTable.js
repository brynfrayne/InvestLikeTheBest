import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import './CompanyOwnershipTable.scss';

export default function CompanyOwnershipTable({data}) {

   data.sort((a,b)=>((b.value/b.portfolioValue)-(a.value/a.portfolioValue)))

    return <Table >
       <thead>
          <tr>           
           <td className="company-ownership-table__row-item">Investor</td><td className="company-ownership-table__row-item">Fund</td><td className="company-ownership-table__row-item">Portfolio %</td>
           </tr>
          </thead>
          <tbody>
          
            {data.map((holding) => ( 
               
               <tr className="company-ownership-table__row" key={uniqid()}  >
                  <td   className="company-ownership-table__row-item">{holding.investor}</td>
                  <td   className="company-ownership-table__row-item">{holding.fund}</td>
                  <td className="company-ownership-table__row-item">{Math.round((holding.value/holding.portfolioValue)*100) +'%'}</td>
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

