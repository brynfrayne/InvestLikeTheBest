import React from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
// import "./MostPopularCompaniesTable.scss";

export default function CompanyStatsTable({stats}) {


  
    return <Table className='table'>
       <thead>
          <tr>           
           <td className='table__data table__data--title'>Date</td>
           <td className='table__data table__data--title'>P/E</td>
           <td className='table__data table__data--title'>P/S</td>
           <td className='table__data table__data--title'>ROE</td>
           <td className='table__data table__data--title'>Net Profit %</td>
           <td className='table__data table__data--title'>Gross Profit %</td>

           </tr>
          </thead>
          <tbody>
          
            {stats.map((stat) => ( 
               <tr className='table__row' key={uniqid()}>
                  <td  className='table__data table__data--date'>{stat.date}</td>
                  <td  className='table__data'>{stat.priceEarningsRatio.toFixed(2)}</td> 
                  <td  className='table__data'>{stat.priceToSalesRatio.toFixed(2)}</td> 
                  <td  className='table__data'>{Math.round((stat.returnOnEquity)*100)+'%'}</td> 
                  <td  className='table__data'>{Math.round((stat.netProfitMargin)*100)+'%'}</td> 
                  <td  className='table__data'>{Math.round((stat.grossProfitMargin)*100)+'%'}</td> 
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

