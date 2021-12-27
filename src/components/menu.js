import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import LinkFade from '../components/linkFade';
import MenuIcon from '../images/menu_icon.svg';
import CloseIcon from '../images/close_icon.svg';
import '../fonts/SharpGroteskMedium09.woff';
import '../fonts/SharpGroteskMedium21.woff';
import '../fonts/SharpGroteskMedium09.woff2';
import '../fonts/SharpGroteskMedium21.woff2';
import '../fonts/SharpGroteskMedium09.eot';
import '../fonts/SharpGroteskMedium21.eot';

const Menu = ({ loading }) => {
  const [open, setOpen] = useState(false);
  const buttonIcon = open ? CloseIcon : MenuIcon;
  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className={ classnames('menu', { 'open': open, 'loading': loading }) }>
      <div className='menu-content'>
        <div className='content-inner'>
          <div className='subtitle'>Menu</div>
          <LinkFade url='/'><h3>Home</h3></LinkFade>
          <hr></hr>
          <LinkFade url='/about'><h3>About</h3></LinkFade>
          <hr></hr>
          <LinkFade url='/works'><h3>Works</h3></LinkFade>
        </div>
      </div>
      <div className='menu-btn' onClick={ toggleMenu }>
        <img className='menu-icon' src={ buttonIcon }></img>
      </div>
    </div>
  );
};

export default Menu;
