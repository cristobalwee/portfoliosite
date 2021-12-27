import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import LinkFade from '../components/linkFade';
import CloseButton from '../images/close_button.svg';
import Landing from '../images/chambi_landing.png';
import Ui from '../images/chambi_ui.png';
import LandingAlt from '../images/chambi_landing_alt.png';
import UiAlt from '../images/chambi_ui_alt.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const ChambiPage = ({ location }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className={ classnames('work-header', { 'loading': loading }) } style={{ backgroundColor: '#4F0EA2' }}>
        <div className='header-subtitle'>
          <span className='subtitle'>Chambi</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className='work-header-content'>
          <LinkFade url={ location.state.fromPage || '/' }><img src={ CloseButton } /></LinkFade>
          <div>
            <div><p className='italic'>work.05</p></div>
            <h2>Chambi</h2>
            <div className='work-subtitle'>
              <p>UI/UX Design</p>
              <p>2018</p>
            </div>
          </div>
        </div>
      </div>
      <div className={ classnames('chambi work page', { 'loading': loading }) }>
        <SEO title="Cristobal Gra&ntilde;a | Chambi" />
        <Menu loading={ loading } />
        <div className='work-about-focus-section add-delay-0'>
          <div className='subtitle'>About</div>
          <p>
            As a quick design experiment, I explored a concept my uncle talked to me about around
            a <i>LinkedIn</i>-style web app specifically focused on the construction industry in Peru.
            It was nice exercise to have in my repertoire that I just didn't have enough time to
            develop into an actual product.
          </p>
        </div>
        <div className='work-about-focus-section add-delay-1'>
          <div className='subtitle'>Role</div>
          <p>UI/UX Design</p>
        </div>
        <div className='work-about-focus-section add-delay-2'>
          <div className='subtitle'>Period</div>
          <p>2019</p>
        </div>
        <div className='work-about-focus-item work-image-section add-delay-3'>
          <img src={ Landing }></img>
          <img src={ Ui }></img>
        </div>
        <div className='work-about-focus-item work-image-section add-delay-4'>
          <img src={ LandingAlt }></img>
          <img src={ UiAlt }></img>
        </div>
        <div className='work-nav'>
          <LinkFade url='/godaddy'><Button title='GoDaddy' subtitle='Previous' arrowDir={ -1 } dark /></LinkFade>
          <LinkFade url='/kc-and-the-sun'><Button title='KC and the Sun' subtitle='Next' dark /></LinkFade>
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

export default ChambiPage;
