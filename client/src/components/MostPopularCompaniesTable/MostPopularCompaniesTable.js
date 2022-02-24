import React from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import "./MostPopularCompaniesTable.scss";

export default function MostPopularCompaniesTable({stocks}) {


  
    return <Table className='table'>
       <thead>
          <tr>           
           <td className='table__data table__data--title'>Company</td>
           <td className='table__data table__data--title'># Funds Who Own</td>
           </tr>
          </thead>
          <tbody>
          
            {stocks.map((stock) => ( 
               <tr className='table__row' key={uniqid()}>
                  <td  className='table__data'><Link className='table-links' to={`/company/${stock.cusip}/${stock.period_of_report}`}>{stock.name}</Link></td>
                  <td  className='table__data'><Link className='table-links' to={`/company/${stock.cusip}/${stock.period_of_report}`}>{stock.stockCount}</Link></td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

