import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

import MenuIcon from '../images/menu_icon.svg';
import Arrow from '../images/right_arrow.svg';
import DarkArrow from '../images/right_arrow_dark.svg';

const Button = ({ title, dark, subtitle, arrowDir }) => {
  return (
    <div className={ classnames('button', { 'dark': dark }) }>
      <h3>{ title }</h3>
      <img src={ dark ? DarkArrow : Arrow }></img>
    </div>
  );
};

export default Button;
