import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import CloseButton from '../images/close_button.svg';
import Landing from '../images/chambi_landing.png';
import Ui from '../images/chambi_ui.png';
import LandingAlt from '../images/chambi_landing_alt.png';
import UiAlt from '../images/chambi_ui_alt.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const NablaPage = ({ location }) => (
  <React.Fragment>
    <div className='work-header' style={{ backgroundColor: '#4F0EA2' }}>
      <div className='work-header-content'>
        <Link to={ location.state.fromPage || '/' }><img src={ CloseButton } /></Link>
        <div><p className='italic'>work.05</p></div>
        <h2>Chambi</h2>
        <div className='work-subtitle'>
          <p>UI/UX Design</p>
          <p>2018</p>
        </div>
      </div>
    </div>
    <div className='chambi work page'>
      <SEO title="Cristobal Gra&ntilde;a | Chambi" />
      <Menu />
      <div className='work-about-focus-section'>
        <div className='subtitle'>About</div>
        <p>
          As a quick design experiment, I explored a concept my uncle talked to me about around
          a <i>LinkedIn</i>-style web app specifically focused on the construction industry in Peru.
          It was nice exercise to have in my repertoire that I just didn't have enough time to
          develop into an actual product.
        </p>
      </div>
      <div className='work-about-focus-section'>
        <div className='subtitle'>Role</div>
        <p>UI/UX Design</p>
      </div>
      <div className='work-about-focus-section'>
        <div className='subtitle'>Period</div>
        <p>2019</p>
      </div>
      <div className='work-image-section'>
        <img src={ Landing }></img>
        <img src={ Ui }></img>
      </div>
      <div className='work-image-section'>
        <img src={ LandingAlt }></img>
        <img src={ UiAlt }></img>
      </div>
      <div className='work-nav'>
        <Link to='/godaddy'><Button title='GoDaddy' subtitle='Previous' arrowDir={ -1 } dark /></Link>
        <Link to='/kc-and-the-sun'><Button title='KC and the Sun' subtitle='Next' dark /></Link>
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
