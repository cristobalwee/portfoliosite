import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import LinkFade from '../components/linkFade';
import CloseButton from '../images/close_button.svg';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const GodaddyPage = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const backLink = location && location.state && location.state.fromPage;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className={ classnames('work-header', { 'loading': loading }) } style={{ backgroundColor: '#135457' }}>
        <div className='header-subtitle'>
          <span className='subtitle'>GoDaddy</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className='work-header-content'>
          <LinkFade url={ backLink || '/' }><img src={ CloseButton } /></LinkFade>
          <div>
            <div><p className='italic'>work.04</p></div>
            <h2>GoDaddy</h2>
            <div className='work-subtitle'>
              <p>UX Engineering</p>
              <p>2018 - now</p>
            </div>
          </div>
        </div>
      </div>
      <div className={ classnames('godaddy work page', { 'loading': loading }) }>
        <SEO title="Cristobal Gra&ntilde;a | GoDaddy" />
        <Menu loading={ loading } />
        <div className='work-about-focus-section add-delay-0'>
          <div className='subtitle'>About</div>
          <p>
            I did a UX design internship at GoDaddy the summer before my senior year of college. I was since
            hired as a full time UX engineer and have been working as part of the Brandbook team as a liaison
            between my team of developers and the broader design organization. Our main focus is the image
            library component consumed by a variety of GoDaddy apps, most prominent of which are the website
            builder and venture dashboard.
          </p>
        </div>
        <div className='work-about-focus-section add-delay-1'>
          <div className='subtitle'>Role</div>
          <p>UX Engineering, Level II</p>
        </div>
        <div className='work-about-focus-section add-delay-2'>
          <div className='subtitle'>Period</div>
          <p>2018 - now</p>
        </div>
        <p className='work-about-focus-item add-delay-3'>
           As an engineer, I helped develop the end to end client experience of the Website Builder Media
           Library ("Brand Book") via React, Redux, and Redux-saga. As a designer, I worked alongside the
           Independents Design team to contribute to most of the UX patterns currently in place in the
           Media Library. For privacy reasons, I'm not able to publicly show much of the designs
           I've created over my tenure, but you can access them from this <span><a target='_blank' rel='noopener noreferrer' href='https://fiddle-amethyst-k466.squarespace.com/'>password protected page</a></span>
        </p>
        <div className='work-nav work-about-focus-item add-delay-4'>
          <LinkFade url='/nabla'><Button title='Nabla' subtitle='Previous' arrowDir={ -1 } dark /></LinkFade>
          <LinkFade url='/chambi'><Button title='Chambi' subtitle='Next' dark /></LinkFade>
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

export default GodaddyPage;
