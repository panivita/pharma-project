/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from '../../images/imageSection.jpg';

import './fact.css';

export const FactSection = () => {
  return (
    <Row className='twoColumnContainer'>
      <Col xs={12} md={6} lg={4} className='mainText'>
        <p>Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</p>
        <div>
          <p>
            By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and
            prevents IL-13-induced inflammatory responses in the skin(1,2).
          </p>
          <p>Adtralza® selectively modulates the dysregulated immune system by(1):</p>
          <p>
            - Reducing markers of skin inflammation
            <br />
            - Improving markers of skin barrier integrity
            <br />
            - Reducing epidermal thickness
          </p>
        </div>
        <div className='margin'><a href='#' className='btnWatch'>Watch the video</a></div>
        <span>Duration: 2:43</span>
      </Col>
      <Col xs={12} md={6} lg={7} className='cellularImageContainer'>
        <img alt='cellular structure' src={Image} className='cellularImage'/>
      </Col>
    </Row>
  );
};
