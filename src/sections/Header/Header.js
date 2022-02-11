import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import DermaWorld from '../../images/DermaWorld.png';
import { Search } from 'react-bootstrap-icons';
import './header.css';

export const Header = () => {
  return (
      <div className='flexContainer'>
        <div className='imageContainer'>
          <img alt='derma world' src={DermaWorld} />
        </div>
        <InputGroup className='inputContainer'>
          <FormControl placeholder='Search' />
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
        </InputGroup>
      </div>
  );
};
