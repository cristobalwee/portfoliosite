import React from 'react';
import LinkArrow from '../images/link_arrow.svg';

const AboutTrack = ({ trackLink, image, title, artist }) => {
  return (
    <a target='_blank' rel='noopener noreferrer' href={ trackLink }>
      <div className='about-album'>
        <img className='link-arrow' src={ LinkArrow } />
        <img src={ image }></img>
        <div className='about-album-content'>
          <h3>{ title }</h3>
          <p>{ artist }</p>
        </div>
      </div>
    </a>
  );
};

export default AboutTrack;
