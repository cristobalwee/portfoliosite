import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import CloseButton from '../images/close_button.svg';
import KcLanding from '../images/kc_landing.png';
import Kc from '../images/kc_and_the_sun.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const NablaPage = ({ location }) => (
  <React.Fragment>
    <div className='work-header' style={{ backgroundColor: '#0E3B4C' }}>
      <div className='work-header-content'>
        <Link to={ location.state.fromPage || '/' }><img src={ CloseButton } /></Link>
        <div><p className='italic'>work.06</p></div>
        <h2>KC and the sun</h2>
        <div className='work-subtitle'>
          <p>Logo design</p>
          <p>2019</p>
        </div>
      </div>
    </div>
    <div className='kc work page'>
      <SEO title="Cristobal Gra&ntilde;a | KC and the Sun" />
      <Menu />
      <div className='work-about-focus-section'>
        <div className='subtitle'>About</div>
        <p>
          My mom started a small clothing company that operates mostly through <span><a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/kcandthesun.pe/'>Instagram</a></span> and
          Whatsapp, and she asked me if I could whip her up a logo. It was my first
          foray into any sort of logo/brand design at the time, but I was satisfied with the
          final product overall, and would love to expand it further – maybe even implement a full
          website with an online shop (I also made a concept for a landing page because, if
          you don't know by now, I like making landing pages).
        </p>
      </div>
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
    </div>
    <div className='footer'>
      <div className='copyright'>
        <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
      </div>
    </div>
  </React.Fragment>
)

export default NablaPage;
