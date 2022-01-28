import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


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
     <Dropdown.Item as={Link} to={`/${item.url}`} key={item.id}>{item.title}</Dropdown.Item>     )}
    
  </Dropdown.Menu>
</Dropdown>
  </div>;
}
