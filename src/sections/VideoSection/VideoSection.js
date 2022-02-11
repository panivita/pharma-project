import React from 'react';
import Iframe from 'react-iframe';
import { Row, Col } from 'react-bootstrap';
import './video.css';

export const VideoSection = () => {
  const videos = ['zGGqxT-oMGg', 'rlM5pgSU1Ag', 'F7d2oTpkM-0', 'jCYWnPuO3YM'];
  return (
    <Row className='videoContainer'>
      <h3>KOL Videos - get expert insights here</h3>
      <p className='text2'>See what Key opinion leaders have to say about their experiences with Adtralza® </p>
      <Row xs={1} md={2} className='g-4'>
        {videos.map((videoUrl, idx) => (
          <Col className='videoContent'>
            <Iframe
              width='50%'
              url={`https://www.youtube.com/embed/${videoUrl}`}
              title='Atopic Eczema'
            />
            <div className='videoText'>
              <p className='text1'>Video title</p>
              <p className='tex2'>
                Short description of the contents or subject of the video. You can upload a screen from the video as
                thumbnail image
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Row>
  );
};
