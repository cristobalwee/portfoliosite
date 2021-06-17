import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

import DarkArrow from '../images/right_arrow_dark.svg';
import LinkArrow from '../images/link_arrow.svg';

const WorkItem = ({ title, color, role, period, img, index, fullWidth }) => {
  return (
    <div className={ classnames('work-list-item', { 'full-width': fullWidth }) } style={{ backgroundColor: color }}>
      <img className='link-arrow' src={ LinkArrow } />
      <div className='work-title'>
        <div>
          <div><p>work.0{ index + 1 }</p></div>
          <h2>{ title }</h2>
          <div className='work-subtitle'>
            <p>{ role }</p>
            <p>{ period }</p>
          </div>
        </div>
        <img src={ img } />
      </div>
    </div>
  );
};

export default WorkItem;
