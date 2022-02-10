import React from 'react';
import IconCheck from '../images/icon3.svg';
import './custom.css';

export const ReferencesSection = () => {
  return (
    <div className='referencesContainer'>
      <div>
        <img alt='icon check' src={IconCheck} />
      </div>
      <h2>References</h2>
    </div>
  );
};
