import React from 'react';
import { NavDropdown, Nav, Container, Navbar, Offcanvas } from 'react-bootstrap';
import './navBar.css';

export const NavBar = () => {
  const menuLevel1 = ['Bedingungen', 'Behandlungen', 'Veranstaltungen', 'Werkzeuge', 'Forschung und Erkenntnisse'];
  const menuLevel2 = [
    'Adtralza',
    'Diavonex',
    'Diavobet',
    'Enstilar',
    'Fucidin',
    'Kyntheum',
    'Protopic',
    'Skinoren',
    'Tralokinumab',
    'Xamiol',
  ];
  const menuLevel3 = ['Overview', 'Action', 'Efficacy', 'Quality', 'Safety', 'Dosing', 'News', 'Technical Information'];

  return (
    <>
      <ul className='navContainer'>
        {menuLevel1.map((menuItem, index) => {
          return (
            <li key={index} className='navItem1'>
              <a href={menuItem} className='drop'>
                {menuItem}
              </a>
              <ul className='secondLevelMenu'>
                {menuLevel2.map((menuItem, index) => {
                  return (
                    <li key={index} className='navItem2'>
                      <a href={menuItem} className='navBorder'>
                        {menuItem}
                      </a>
                      <ul className='lastLevelMenu'>
                        {menuLevel3.map((menuItem, index) => {
                          return (
                            <li key={index} className='navItem3'>
                              <a href={menuItem}>{menuItem}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <Navbar bg='light' expand={false} className='mobileNavContainer'>
        <Container fluid>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3 custom-nav'>
                {menuLevel1.map((menuItem, index) => {
                  return (
                    <NavDropdown title={menuItem} id='offcanvasNavbarDropdown' key={index}>
                      {menuLevel2.map((menuItem, index) => {
                        return (
                          <NavDropdown.Item href={menuItem} key={index}>
                            {menuItem}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  );
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
