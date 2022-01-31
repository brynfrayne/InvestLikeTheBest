import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

export default function InvestorsList({investors}) {
    return <Table>
       <thead>           
           <td className='table__data'>Name</td><td className='table__data'>Fund</td>  
        </thead>
        <tbody>
          
            {investors.map((investor) => ( 
               <tr className='table__row' key={uniqid()}>
                  <td className='table__data'><Link  className='table-links' to={`/funds/${investor.CIK}/Q3-21`}>{investor.investor}</Link></td>
                  <td className='table__data'><Link  className='table-links' to={`/funds/${investor.CIK}/Q3-21`}>{investor.fund}</Link></td>
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

