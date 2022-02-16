import React, { useState } from 'react';
import { Accordion, useAccordionButton, Nav } from 'react-bootstrap';
import IconCheck from '../../images/icon3.svg';
import './reference.css';

export const ReferencesSection = () => {
  const [panelIndex, setPanelIndex] = useState();

  const CustomToggle = ({ children, eventKey }) => {
    const customOnClick = useAccordionButton(eventKey, () => {
      setPanelIndex(eventKey === panelIndex ? null : eventKey);
    });

    return <Nav.Link onClick={customOnClick}>{children}</Nav.Link>;
  };
  return (
    <Accordion>
      <CustomToggle eventKey={1}>
        <div className='referencesContainer'>
          <div>
            <img alt='icon check' src={IconCheck} />
          </div>
          <h2>References</h2>
        </div>
      </CustomToggle>
      <Accordion.Collapse eventKey={1}>
        <div className='textReferences'>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Reference #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Reference #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Reference #3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};
