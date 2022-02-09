import React from 'react';
import { Table } from 'react-bootstrap';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import './BuyRatingTable.scss';

export default function BuyRatingTable({ratings}) {


  
    return <Table className='ratings-table'>
       <thead>
          <tr>           
           <td className='table__data table__data--title'>Date</td>
           <td className='table__data table__data--title'>Rating Company</td>
           <td className='table__data table__data--title'>New Grade</td>
           <td className='table__data table__data--title'>Previous Grade</td>

           </tr>
          </thead>
          <tbody>
          
            {ratings.map((rating) => ( 
               <tr className='table__row' key={uniqid()}>
                  <td  className='ratings-table__data--date'>{rating.date}</td>
                  <td  className='ratings-table__company'>{rating.gradingCompany}</td> 
                  <td  className={rating.newGrade !== rating.previousGrade ? 'ratings-table__rating--updated' : 'ratings-table__rating'}>{rating.newGrade}</td> 
                  <td  className='ratings-table__rating'>{rating.previousGrade}</td>  
                </tr>
             ))
            }              
       </tbody>

    </Table>
   ;

  }

