/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Ellipse from '../../images/Ellipse.png';
import Line from '../../images/Line.png';
import Icon1 from '../../images/icon1.svg';
import Icon2 from '../../images/icon2.svg';
import './improvement.css';

export const ImprovementSection = () => {
  return (
    <Row className='mainContainer'>
      <Col xs={12} md={6} lg={3} className='centerContainer'>
        <div className='ellipseContainer'>
          <div className='positionContainer'>
            <img alt='ellipse' src={Ellipse} className='ellipseSize' />
          </div>
          <div className='positionContainer'>
            <div className='numberContainer'>
              <p className='numberStyling1'>9</p>
              <p className='numberStyling2'>out of 10</p>
            </div>
          </div>
          <div className='positionContainer'>
            <img alt='color line' src={Line} className='linePosition1' />
          </div>
        </div>
        <p className='text1'> Long term sustained improvement</p>
        <p className='tex2'>
          9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained
          improvements in the burden of disease(1,2, 1, 8*†‡).
        </p>
        <a className='linkStyling' href='#'>
          See efficacy and trial data
        </a>
      </Col>
      <Col xs={12} md={6} lg={3} className='centerContainer'>
        <div className='ellipseContainer'>
          <div className='positionContainer'>
            <img alt='ellipse' src={Ellipse} className='ellipseSize' />
          </div>
          <div className='positionContainer'>
            <img alt='icon hand with heart' src={Icon1} className='iconStyling' />
          </div>
          <div className='positionContainer'>
            <img alt='color line' src={Line} className='linePosition2' />
          </div>
        </div>
        <p className='text1'>Improvements in the burden of disease</p>
        <p className='tex2'>
          Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained
          improvements in burden of disease from week 16 to 32(12,13).
        </p>
        <a className='linkStyling' href='#'>
          Learn more about quality of life improvements
        </a>
      </Col>
      <Col xs={12} md={6} lg={3} className='centerContainer lastContainer'>
        <div className='ellipseContainer'>
          <div className='positionContainer'>
            <img alt='ellipse' src={Ellipse} className='ellipseSize' />
          </div>
          <div className='positionContainer'>
            <img alt='icon hand ' src={Icon2} className='iconStyling' />
          </div>
          <div className='positionContainer'>
            <img alt='color line' src={Line} className='linePosition3' />
          </div>
        </div>
        <p className='text1'>Good safety profile</p>
        <p className='tex2'>
          The overall frequency and severity of adverse events with Adtralza® were comparable to placebo at 16 weeks*
          and 52 weeks(19).
        </p>
        <a className='linkStyling' href='#'>
          See safety profile
        </a>
      </Col>
    </Row>
  );
};
