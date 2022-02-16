/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo from '../../images/leoLogo.png';
import './footer.css';

export const Footer = () => {
  return (
    <Row className='footerContainer'>
      <Col xs={12} md={2} className='logoFooter'>
        <img alt='Leo pharma logo' src={Logo} />
      </Col>
      <Col xs={12} md={10} lg={6}className='footerContent'>
        <a href='#'>Contact</a>
        <a href='#'>Imprint</a>
        <a href='#'>Conditions</a>
        <a href='#'>Terms of use</a>
        <a href='#'>Privacy</a>
        <a href='#'>Cookie content</a>
      </Col>
      <Col xs={12} md={12} lg={2}className='alignRight'>
        <p >
          © Copyright LEO Pharma 2020
          <br />
          LEO and the LEO Lion Design are registered trademarks of LEO Pharma
          <br />
          All rights reserved
        </p>
        <a href='https://www.leo-pharma.ca/' rel="preconnect">
          LEO Pharma corporate website
        </a>
      </Col>
    </Row>
  );
};
