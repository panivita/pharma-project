import React, { useState, useEffect } from 'react';
import './navBar.css';

export const NavBar = () => {
  const menuLevel1 = ['Bedingungen', 'Behandlungen', 'Veranstaltungen', 'Werkzeuge', 'Forschung-Erkenntnisse'];
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
  const menuLevel3 = ['Overview', 'Action', 'Efficacy', 'Quality', 'Safety', 'Dosing', 'News', 'Technical-Information'];
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  return (
    <ul className='navContainer'>
      {menuLevel1.map((menuItem, index) => {
        return (
          <li key={index} className='navItem1'>
            <a href={menuItem} className='drop'>
              {menuItem}
            </a>
            <ul className='secondLevelMenu'>
              {menuLevel2.map((menuItem, index) => {
                return (
                  <li key={index} className='navItem2'>
                    <a href={menuItem} className='navBorder'>
                      {menuItem}
                    </a>
                    <ul className='lastLevelMenu'>
                      {menuLevel3.map((menuItem, index) => {
                        return (
                          <li key={index} className='navItem3'>
                            <a href={menuItem}>{menuItem}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
      {/*<ul className='firstLevelMenu'>
        {menuLevel1.map((menuItem, index) => {
          const href = `/${menuItem}`;
          return (
            <li key={index} className={path === href ? 'navActive1' : 'navItem'}>
              <a href={href}>{menuItem}</a>
            </li>
          );
        })}
      </ul>
      <ul className='secondLevelMenu'>
        {menuLevel2.map((menuItem, index) => {
          const href = `/${menuItem}`;
          return (
            <li key={index} className={path === href ? 'navActive2' : 'navItem'}>
              <a href={menuItem} className={path === href && 'navActiveBorder'}>
                {menuItem}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='lastLevelMenu'>
        {menuLevel3.map((menuItem, index) => {
          const href = `/${menuItem}`;
          return (
            <li key={index} className={path === href ? 'navActive3' : 'navItem'}>
              <a href={menuItem}>{menuItem}</a>
            </li>
          );
        })}
      </ul>*/}
    </ul>
  );
};
