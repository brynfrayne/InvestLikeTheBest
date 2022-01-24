import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class TableComponent extends Component {
  render() {
    return <Table>
       <tr>
           
           <td>Company</td><td>Shares</td><td>Weighting</td><td>Value</td><td>Net Change</td>
           {/* <td>{Company}</td><td>{Shares}</td><td>{Weighting}</td><td>{Value}</td><td>{Net Change}</td>            */}
           {/* {holdings.map((holding) => ( */}
                {/* // <TableRow key={holding.id} id={holding.id} title={holding.title} shares={holding.shares} value={holding.value} netChange={holding.netChange}/> */}
            {/* ))} */}
       </tr>
    </Table>
   ;

  }
}
