import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import LinkFade from '../components/linkFade';
import CloseButton from '../images/close_button.svg';
import NablaLanding from '../images/nabla_landing.png';
import Nabla1 from '../images/nabla1.png';
import Nabla2 from '../images/nabla2.png';
import Nabla3 from '../images/nabla3.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const NablaPage = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const backLink = location && location.state && location.state.fromPage;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className={ classnames('work-header', { 'loading': loading }) } style={{ backgroundColor: '#0E0E0E' }}>
        <div className='header-subtitle'>
          <span className='subtitle'>Nabla</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className='work-header-content'>
          <LinkFade url={ backLink || '/' }><img src={ CloseButton } /></LinkFade>
          <div>
            <div><p className='italic'>work.03</p></div>
            <h2>Nabla</h2>
            <div className='work-subtitle'>
              <p>UI/UX + logo design</p>
              <p>2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className={ classnames('nabla work page', { 'loading': loading }) }>
        <SEO title="Cristobal Gra&ntilde;a | Nabla" />
        <Menu loading={ loading }/>
        <div className='work-about-focus-section add-delay-0'>
          <div className='subtitle'>About</div>
          <p>
            As part of one of GoDaddy’s company-wide hackathons, I wanted to take a deep dive
            into the available data surrounding diversity and inclusion within the tech industry.
            I didn’t have a particular aim in mind, but I knew that I wanted to learn about the
            state of the industry as a whole while expanding my expertise in design and motion.
          </p>
        </div>
        <div className='work-about-focus-section add-delay-1'>
          <div className='subtitle'>Role</div>
          <p>UI/UX Design, Frontend Web Development, Logo Design</p>
        </div>
        <div className='work-about-focus-section add-delay-2'>
          <div className='subtitle'>Period</div>
          <p>2019</p>
        </div>
        <p className='work-about-focus-item add-delay-3'>
          I was able to mostly implement the bulk of the designed screens, but the limited
          hackathon time precluded me from actually deploying the site, so I was happy to just
          post some screens to <span><a target='_blank' rel='noopener noreferrer' href='https://dribbble.com/shots/6604830-Nabla-diversity-graph-animation'>dribbble</a></span>.
        </p>
        <div className='work-about-focus-item work-image-section add-delay-4'>
          <img src={ NablaLanding }></img>
          <img src={ Nabla1 }></img>
        </div>
        <div className='work-about-focus-item work-image-section add-delay-5'>
          <img src={ Nabla2 }></img>
          <img src={ Nabla3 }></img>
        </div>
        <div className='work-nav'>
          <LinkFade url='/freely'><Button title='Freely' subtitle='Previous' arrowDir={ -1 } dark /></LinkFade>
          <LinkFade url='/godaddy'><Button title='GoDaddy' subtitle='Next' dark /></LinkFade>
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

export default NablaPage;
