import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Rebillet from '../images/rebillet.png';
import BonIver from '../images/auatc.png';
import Whiskey from '../images/whiskey.png';
import Menu from '../components/menu';
import '../styles/index.scss';

const AboutPage = () => (
  <div className='about page'>
    <SEO title="Cristobal Grana | About me" />
    <Menu />
    <div className='header-subtitle'>
      <span className='subtitle'>About</span>
      <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
    </div>
    <p>
      I’m a Peruvian-born interaction engineer with a passion for minimalist styles and delightful experiences.
      I see myself as someone who can contribute at the intersect of design and development – a designer who works
      with developers to implement the latest prototypes, and an engineer who develops wireframes and contributes
      to design reviews.  
      <br></br>
      <br></br>

      I have a Bachelor’s degree in Mathematics and Computer Science from the University of Illinois at Urbana-Champaign,
      obtained in 2018. I’ve since been working as a User Experience Engineer at GoDaddy, toeing the line between web
      design and development.
    </p>

    <div className='album-section'>
      <span className='subtitle'>Currently on repeat &#9834;</span>
      <div className='album-section-inner'>
        <div className='about-album'>
          <img src={ Rebillet }></img>
          <h3>One More Time</h3>
          <p>Marc Rebillet</p>
        </div>
        <div className='about-album'>
          <img src={ BonIver }></img>
          <h3>AUATC</h3>
          <p>Bon Iver</p>
        </div>
        <div className='about-album'>
          <img src={ Whiskey }></img>
          <h3>Whiskey Whiskey</h3>
          <p>Joshua Burnside</p>
        </div>
      </div>
    </div>
    <div className='copyright'>
      <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
    </div>
  </div>
)

export default AboutPage;
