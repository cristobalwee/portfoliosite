import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../images/kc_header.png';
import KcLanding from '../images/kc_landing.png';
import Kc from '../images/kc_and_the_sun.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const NablaPage = () => (
  <div className='kc work page'>
    <SEO title="Cristobal Gra&ntilde;a | KC and the Sun" />
    <Menu />
    <div className='header-subtitle'>
      <span className='subtitle'>KC and the Sun</span>
      <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
    </div>
    <div className='header-img' style={{ backgroundImage: `url(${Header})` }}></div>
    <div className='subtitle'>About</div>
    <p>
      My mom started a small clothing company that operates mostly through <span><a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/kcandthesun.pe/'>Instagram</a></span> and
      Whatsapp, and she asked me if I could whip her up a logo. It was my first
      foray into any sort of logo/brand design at the time, but I was satisfied with the
      final product overall, and would love to expand it further – maybe even implement a full
      website with an online shop (I also made a concept for a landing page because, if
      you don't know by now, I like making landing pages).
    </p>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Role</div>
      <p>Logo Design</p>
    </div>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Period</div>
      <p>2018</p>
    </div>
    <div className='work-image-section'>
      <img src={ Kc }></img>
      <img src={ KcLanding }></img>
    </div>
    <div className='work-nav'>
      <Link to='/chambi'><Button title='Chambi' subtitle='Previous' arrowDir={ -1 } dark /></Link>
    </div>
    <div className='copyright'>
      <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
    </div>
  </div>
)

export default NablaPage;
