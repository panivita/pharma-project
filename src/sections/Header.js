import React from 'react';
import { InputGroup, FormControl, Nav, NavItem, NavLink, Dropdown } from 'react-bootstrap';
import DermaWorld from '../images/DermaWorld.png';
import { Search } from 'react-bootstrap-icons';
import './custom.css';

export const Header = () => {
  const menuLevel1 = [1.1, 1.2, 1.3, 1.4, 1.5];
  const menuLevel2 = [2.1, 2.2, 2.3, 2.4, 2.5];
  const menuLevel3 = [3.1, 3.2, 3.3, 4.4, 5.5];
  return (
    <>
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
      <Nav className='mainNav'>
        {menuLevel1.map((menuItem, index) => {
          return (
            <Dropdown as={NavItem} key={index}>
              <Dropdown.Toggle as={NavLink}>{`Item ${menuItem}`}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Nav justify className='secondLevelNav'>
                  <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>
                      <Nav justify>
                        {menuLevel2.map((menuItem, index) => {
                          return (
                            <Dropdown as={NavItem} key={index}>
                              <Dropdown.Toggle as={NavLink}>{`Item ${index}.${menuItem}`}</Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>
                                  <Nav justify>
                                    {menuLevel3.map((menuItem, index) => {
                                      return (
                                        <Dropdown as={NavItem} key={index}>
                                          <Dropdown.Toggle as={NavLink}>{`Item ${index}.${menuItem}`}</Dropdown.Toggle>
                                        </Dropdown>
                                      );
                                    })}
                                  </Nav>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          );
                        })}
                      </Nav>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Nav>
              </Dropdown.Menu>
            </Dropdown>
          );
        })}
      </Nav>
    </>
  );
};
