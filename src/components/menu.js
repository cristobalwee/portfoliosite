import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

import MenuIcon from '../images/menu_icon.svg';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className={ classnames('menu', { 'open': open }) }>
      <div className='menu-content'>
        <div className='content-inner'>
          <div className='subtitle'>Menu</div>
          <Link to='/'><h3>Home</h3></Link>
          <hr></hr>
          <Link to='/about'><h3>About</h3></Link>
          <hr></hr>
          <Link to='/works'><h3>Works</h3></Link>
        </div>
      </div>
      <div className='menu-btn' onClick={ toggleMenu }>
        <img className='menu-icon' src={ MenuIcon }></img>
      </div>
    </div>
  );
};

export default Menu;