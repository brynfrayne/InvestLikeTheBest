import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

export default function TableComponent({fund, sumVal}) {


  
    return <Table>
       <thead>
          <tr>           
           <td className="company-ownership-table__row-item">Company</td><td className="company-ownership-table__row-item">Shares</td><td>% of Portfolio</td>
           </tr>
          </thead>
          <tbody>
          
            {fund.map((holding) => ( 
               <tr className="company-ownership-table__row" key={uniqid()}  >
                  <td className="company-ownership-table__row-item" ><Link className='table-links' to={`/company/${holding.cusip}/${holding.period_of_report}`}>{holding.name}</Link></td>
                  <td className="company-ownership-table__row-item" ><Link className='table-links' to={`/company/${holding.cusip}/${holding.period_of_report}`}>{holding.shares}</Link></td>
                  <td className="company-ownership-table__row-item" >{Math.round((holding.value/sumVal)*100)+'%'}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

