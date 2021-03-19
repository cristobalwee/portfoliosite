import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../images/nabla_header.png';
import NablaLanding from '../images/nabla_landing.png';
import Nabla1 from '../images/nabla1.png';
import Nabla2 from '../images/nabla2.png';
import Nabla3 from '../images/nabla3.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const NablaPage = () => (
  <div className='nabla work page'>
    <SEO title="Cristobal Gra&ntilde;a | Nabla" />
    <Menu />
    <div className='header-subtitle'>
      <span className='subtitle'>Nabla</span>
      <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
    </div>
    <div className='header-img' style={{ backgroundImage: `url(${Header})` }}></div>
    <div className='subtitle'>About</div>
    <p>
      As part of one of GoDaddy’s company-wide hackathons, I wanted to take a deep dive
      into the available data surrounding diversity and inclusion within the tech industry.
      I didn’t have a particular aim in mind, but I knew that I wanted to learn about the
      state of the industry as a whole while expanding my expertise in design and motion.
    </p>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Role</div>
      <p>UI/UX Design, Frontend Web Development, Logo Design</p>
    </div>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Period</div>
      <p>2019</p>
    </div>
    <p>
      I was able to mostly implement the bulk of the designed screens, but the limited
      hackathon time precluded me from actually deploying the site, so I was happy to just
      post some screens to <span><a target='_blank' rel='noopener noreferrer' href='https://dribbble.com/shots/6604830-Nabla-diversity-graph-animation'>dribbble</a></span>.
    </p>
    <div className='work-image-section'>
      <img src={ NablaLanding }></img>
      <img src={ Nabla1 }></img>
    </div>
    <div className='work-image-section'>
      <img src={ Nabla2 }></img>
      <img src={ Nabla3 }></img>
    </div>
    <div className='work-nav'>
      <Link to='/freely'><Button title='Freely' subtitle='Previous' arrowDir={ -1 } dark /></Link>
      <Link to='/godaddy'><Button title='GoDaddy' subtitle='Next' dark /></Link>
    </div>
    <div className='copyright'>
      <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
    </div>
  </div>
)

export default NablaPage;
