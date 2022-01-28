import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default function DropDown({dropDown, params}) {
  
  
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
     <Dropdown.Item as={Link} to={`/${params}/${item.url}`} key={item.id}>{item.title}</Dropdown.Item>     )}
    
  </Dropdown.Menu>
</Dropdown>
  </div>;
}
