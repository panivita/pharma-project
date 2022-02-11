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
        <div>Here will be list of references</div>
      </Accordion.Collapse>
    </Accordion>
  );
};
