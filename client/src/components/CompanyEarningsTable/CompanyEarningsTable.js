import React from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function CompanyEarningsTable({earnings}) {


  
    return <Table className='table'>
       <thead>
          <tr>           
           <td className='table__data table__data--title'>Date</td>
           <td className='table__data table__data--title'>Actual Earnings</td>
           <td className='table__data table__data--title'>Est. Earnings</td>
           <td className='table__data table__data--title'>Differential %</td>

           </tr>
          </thead>
          <tbody>
          
            {earnings.map((earning) => ( 
               <tr className='table__row' key={uniqid()}>
                  <td  className='table__data table__data--date'>{earning.date}</td>
                  <td  className='table__data'>{earning.actualEarningResult}</td> 
                  <td  className='table__data'>{earning.estimatedEarning}</td> 
                  <td  className='table__data'>{Math.round((((earning.actualEarningResult)-(earning.estimatedEarning))/earning.estimatedEarning)*100)+"%"}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

