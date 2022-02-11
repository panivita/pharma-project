import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Cover from '../../images/Cover.png';
import Logo from '../../images/Adtralza-logo.png';
import PharmaBox from '../../images/pharma.jpg';
import './hero.css';

export const HeroSection = () => {
  return (
    <div style={{ background: '#FAFAFA' }}>
      <section style={{ backgroundImage: `url(${Cover})` }} className='section1'>
        <div className='textContainer'>
          <div className='logoContainer'>
            <img alt='Adtralza logo' src={Logo} />
          </div>
          <p className='info1'>
            Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are
            candidates for systemic therapy.
          </p>
        </div>
      </section>
      <Row className='textContainer2'>
        <Col xs={12} md={6} className='imgContainer'>
          <img alt='Adtralza box' src={PharmaBox} />
        </Col>
        <Col xs={12} md={6} className='infoContainer'>
          <p className='info2'>
            It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic
            dermatitis signs and symptoms(1,2)
          </p>
          <a className='info3' href='adtralza-works'>Learn more about how Adtralza® works and how to use it in treatment.</a>
        </Col>
      </Row>
    </div>
  );
};
