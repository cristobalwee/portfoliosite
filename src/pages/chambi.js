import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../images/chambi_header.png';
import Landing from '../images/chambi_landing.png';
import Ui from '../images/chambi_ui.png';
import LandingAlt from '../images/chambi_landing_alt.png';
import UiAlt from '../images/chambi_ui_alt.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const NablaPage = () => (
  <div className='chambi work page'>
    <SEO title="Cristobal Gra&ntilde;a | Chambi" />
    <Menu />
    <div className='header-subtitle'>
      <span className='subtitle'>Chambi</span>
      <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
    </div>
    <div className='header-img' style={{ backgroundImage: `url(${Header})` }}></div>
    <div className='subtitle'>About</div>
    <p>
      As a quick design experiment, I explored a concept my uncle talked to me about around
      a <i>LinkedIn</i>-style web app specifically focused on the construction industry in Peru.
      It was nice exercise to have in my repertoire that I just didn't have enough time to
      develop into an actual product.
    </p>
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
    <div className='copyright'>
      <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
    </div>
  </div>
)

export default NablaPage;
