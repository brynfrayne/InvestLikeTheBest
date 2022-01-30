import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// below is a template for the investors info ill need passed in 
// const investors = [
//     {name:'', fund:'',CIK:''}
// ]

export default function InvestorsList({investors}) {
 console.log(investors)
    return <Table>
       <thead>           
           <td>Name</td><td>Fund</td>  
        </thead>
        <tbody>
          
            {investors.map((investor) => ( 
               <tr>
                  <td><Link to={`/funds/${investor.CIK}`}>{investor.investor}</Link></td>
                  <td><Link to={`/funds/${investor.CIK}`}>{investor.fund}</Link></td>
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }
