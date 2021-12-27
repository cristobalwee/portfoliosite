import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import LinkFade from '../components/linkFade';
import CloseButton from '../images/close_button.svg';
import KcLanding from '../images/kc_landing.png';
import Kc from '../images/kc_and_the_sun.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const KCPage = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const backLink = location && location.state && location.state.fromPage;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className={ classnames('work-header', { 'loading': loading }) } style={{ backgroundColor: '#0E3B4C' }}>
        <div className='header-subtitle'>
          <span className='subtitle'>KC and the sun</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className='work-header-content'>
          <LinkFade url={ backLink || '/' }><img src={ CloseButton } /></LinkFade>
          <div>
            <div><p className='italic'>work.06</p></div>
            <h2>KC and the sun</h2>
            <div className='work-subtitle'>
              <p>Logo design</p>
              <p>2018</p>
            </div>
          </div>
        </div>
      </div>
      <div className={ classnames('kc work page', { 'loading': loading }) }>
        <SEO title="Cristobal Gra&ntilde;a | KC and the Sun" />
        <Menu loading={ loading } />
        <div className='work-about-focus-section add-delay-0'>
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
        <div className='work-about-focus-section add-delay-1'>
          <div className='subtitle'>Role</div>
          <p>Logo Design</p>
        </div>
        <div className='work-about-focus-section add-delay-2'>
          <div className='subtitle'>Period</div>
          <p>2018</p>
        </div>
        <div className='work-image-section work-about-focus-item add-delay-3'>
          <img src={ Kc }></img>
          <img src={ KcLanding }></img>
        </div>
        <div className='work-nav work-about-focus-item add-delay-4'>
          <LinkFade url='/chambi'><Button title='Chambi' subtitle='Previous' arrowDir={ -1 } dark /></LinkFade>
        </div>
      </div>
      <div className='footer'>
        <div className='copyright'>
          <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default KCPage;
