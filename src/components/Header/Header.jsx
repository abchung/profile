import './Header.css';

import { useContext } from 'react';

import WindowContext from '../../context/WindowContext';

import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

import { Link, NavLink } from 'react-router-dom';
import { MdLogin } from 'react-icons/md';

//Desktop: 3 sections
//left:logo
//center: menu
//right: login

//Mobile: 3 sections
//left: menu
//center: log
//right: login

function Header() {
  const { windowData } = useContext(WindowContext);

  return (
    <div>
      <h1>inside header</h1>
      {windowData ? <HeaderDesktop /> : <HeaderMobile />}
    </div>
  );
}

export default Header;
