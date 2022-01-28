import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default function DropDown({dropDown}) {
  return <div>
      <Dropdown>
  <Dropdown.Toggle
    variant="success"
    id="dropdown-basic"
  >
    Follow your heart ❤️ 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {dropDown.map(item => 
     <Dropdown.Item key={item[1]}>{item[0]}</Dropdown.Item>     )}
    
  </Dropdown.Menu>
</Dropdown>
  </div>;
}
