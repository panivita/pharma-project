/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ToolsImage1 from '../images/section-image-1.png';
import ToolsImage2 from '../images/section-image-2.png';
import { Card, Row, Col } from 'react-bootstrap';
import './custom.css';

export const ToolsSection = () => {
  return (
    <Row className='cardsContainer'>
      <h3>Clinical tools - at a glance</h3>
      <Col xs={12} md={6} className='mainText'>
        <Card className='cardContent'>
          <Card.Img variant='top' src={ToolsImage1} />
          <Card.Body>
            <Card.Title>Dosing guide</Card.Title>
            <Card.Text className='cardTextContent'>
              Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1).
            </Card.Text>
            <a href='#' className='linkStyling'>
              Learn more about application and dosing
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6} className='mainText'>
        <Card className='cardContent'>
          <Card.Img variant='top' src={ToolsImage2} />
          <Card.Body>
            <Card.Title>Patient injection made simple</Card.Title>
            <Card.Text>
              This step by step video guide shows the patient how to self inject using the two syringes that come in the
              Adtralza® carton.
            </Card.Text>
            <a className='linkStyling' href='#'>
              Watch the video
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
