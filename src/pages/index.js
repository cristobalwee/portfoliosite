import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import anime from 'animejs/lib/anime.es.js';
import Reveal from 'react-reveal/Reveal';
import TransitionLink from 'gatsby-plugin-transition-link';

import SEO from '../components/seo';
import Menu from '../components/menu';
import Button from '../components/button';
import Portrait from '../images/portrait_short.jpg';
import PortraitMobile from '../images/portrait.jpg';
import SlopeCommand from '../images/slope_command.png';
import Freely from '../images/freely.png';
import Nabla from '../images/nabla.png';
import GoDaddy from '../images/godaddy.png';
import '../styles/index.scss';

const IndexPage = () => {
  const introAnims = () => {
    anime.timeline()
    .add({
      targets: '.letter',
      translateY: [30,0],
      translateZ: 0,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 1100,
      delay: (el, i) => 1500 + 18 * i
    }).add({
      targets: ['.portrait', '.portrait-mobile'],
      translateY: [65,0],
      translateZ: 0,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 1200,
    }, '-=1200').add({
      targets: ['.index .header-subtitle', '.index .menu'],
      opacity: [0,1],
      easing: 'linear',
      duration: 300
    }, '-=400');
  }

  // Scroll observers
  const index = useRef(null);
  const aboutSection = useRef(null);
  const worksSection = useRef(null);
  const contactSection = useRef(null);

  const setupObserver = (node) => {
    if (typeof window.IntersectionObserver === `function`) {
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            node.current.className = node.current.className + ' visible';
          }
        });
      }, {
        threshold: 0.5
      });

      observer.observe(node.current);
    }
  }

  useEffect(() => {
    const textWrapper = document.querySelector('h1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    introAnims();
    setupObserver(aboutSection);
    setupObserver(worksSection);
    setupObserver(contactSection);
  });

  return (
    <div className='index page' ref={ index }>
      <SEO title='Cristobal Gra&ntilde;a' />
      <Menu />
      <div className='header-subtitle'>
        <span className='subtitle'>Cristobal Gra&ntilde;a</span>
        <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
      </div>
      <h1>HELLO THERE.</h1>
      <img className='portrait' src={ Portrait }></img>
      <img className='portrait-mobile' src={ PortraitMobile }></img>
      <p className='about-section' ref={ aboutSection }>
        Welcome to my site, my name is Cristobal Gra&ntilde;a and I’m currently a User Experience engineer at <span><a target='_blank' rel='noopener noreferrer' href='https://www.godaddy.com/'>GoDaddy</a></span>.
        I love learning about <span><a target='_blank' rel='noopener noreferrer' href='https://en.wikipedia.org/wiki/Trivia'>things that don’t matter</a></span> and doing stuff with the web.
        And I like to think I belong to the group of people who have the ability to solve design problems via code. <br></br>
        <span><Link to='/about'>Read more</Link></span>
      </p>
      <div className='works-section section' ref={ worksSection }>
        <div className='subtitle'>Featured works</div>
        <div className='work-list-item add-delay-0'>
          <TransitionLink to='/slope-command' exit={{ length: 0.5 }}>
            <h2>Slope Command</h2>
          </TransitionLink>
        </div>
        <br></br>
        <div className='work-list-item add-delay-1'><Link to='/freely'>
          <h2>Freely</h2>
        </Link></div>
        <br></br>
        <div className='work-list-item add-delay-2'><Link to='/nabla'>
          <h2>Nabla</h2>
        </Link></div>
        <br></br>
        <div className='work-list-item add-delay-3'><Link to='/godaddy'>
          <h2>GoDaddy</h2>
          {/*<span className='work-detail'>
            <img src={ GoDaddy }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Engineering</div>
              <div className='subtitle'>2018 - now</div>
            </div>
          </span>*/}
        </Link></div>
      </div>
      <div className='contact-section section' ref={ contactSection }>
        <div className='subtitle'>Contact</div>
        <a className='add-delay-0' target='_blank' rel='noopener noreferrer' href='mailto:hellothere@cristobalgrana.me'><Button title='Drop a line' arrowDir={ 0 } /></a>
        <a className='add-delay-1' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/cristobal-grana-samanez/'><Button title='Linkedin' arrowDir={ 0 } dark /></a>
        <a className='add-delay-2' target='_blank' rel='noopener noreferrer' href='https://twitter.com/cristo_grana'><Button title='Twitter' arrowDir={ 0 } dark /></a>
        <a className='add-delay-3' target='_blank' rel='noopener noreferrer' href='https://dribbble.com/cristobalgrana'><Button title='Dribbble' arrowDir={ 0 } dark /></a>
      </div>
      <div className='copyright'>
        <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
      </div>
    </div>
  )
}

export default IndexPage
