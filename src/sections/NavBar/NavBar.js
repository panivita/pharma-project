import React from 'react';
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
  const menuLevel3 = [
    'Overview',
    'Mode of Action',
    'Efficacy',
    'Quality of Life',
    'Safety',
    'Dosing',
    'News',
    'Technical Information',
  ];
  return (
    <>
      <ul className='firstLevelMenu'>
        {menuLevel1.map((menuItem, index) => {
          return (
            <li key={index}>
              <a href='default.asp'>{menuItem}</a>
            </li>
          );
        })}
      </ul>
      <ul className='secondLevelMenu'>
        {menuLevel2.map((menuItem, index) => {
          return (
            <li key={index}>
              <a href='default.asp'>{menuItem}</a>
            </li>
          );
        })}
      </ul>
      <ul className='lastLevelMenu'>
        {menuLevel3.map((menuItem, index) => {
          return (
            <li key={index}>
              <a href='default.asp'>{menuItem}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
