import React from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

export default function MostPopularCompaniesTable({stocks}) {


  
    return <Table>
       <thead>
          <tr>           
           <td>Company</td><td># Funds Who Own</td>
           </tr>
          </thead>
          <tbody>
          
            {stocks.map((stock) => ( 
               <tr key={uniqid()}>
                  <td ><Link to={`/company/${stock.cusip}`}>{stock.name}</Link></td>
                  <td ><Link to={`/company/${stock.cusip}`}>{stock.stockCount}</Link></td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

