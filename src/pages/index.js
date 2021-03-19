import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import anime from 'animejs/lib/anime.es.js';
import Reveal from 'react-reveal/Reveal';

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

  useEffect(() => {
    const textWrapper = document.querySelector('h1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    introAnims();
  });

  return (
    <div className='index page'>
      <SEO title='Cristobal Gra&ntilde;a' />
      <Menu />
      <div className='header-subtitle'>
        <span className='subtitle'>Cristobal Gra&ntilde;a</span>
        <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
      </div>
      <h1>HELLO THERE.</h1>
      <img className='portrait' src={ Portrait }></img>
      <img className='portrait-mobile' src={ PortraitMobile }></img>
      <Reveal effect='fade'><p className='about-section'>
        Welcome to my site, my name Cristobal Gra&ntilde;a and I’m currently a User Experience engineer at <span><a target='_blank' rel='noopener noreferrer' href='https://www.godaddy.com/'>GoDaddy</a></span>.
        I love learning about <span><a target='_blank' rel='noopener noreferrer' href='https://en.wikipedia.org/wiki/Trivia'>things that don’t matter</a></span> and doing stuff with the web.
        I like to think I belong to the group of people who have the ability to solve design problems via code. <br></br>
        <span><Link to='/about'>Read more</Link></span>
      </p></Reveal>
      <div className='works-section section'>
        <Reveal effect='fade'><div className='subtitle'>Featured works</div></Reveal>
        <Reveal effect='fade'><Link to='/slope-command'><div className='work-list-item'>
          <h2>Slope Command</h2>
          {/*<span className='work-detail'>
            <img src={ SlopeCommand }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Design</div>
              <div className='subtitle'>2021</div>
            </div>
          </span>*/}
        </div></Link></Reveal>
        <br></br>
        <Reveal effect='fade'><Link to='/freely'><div className='work-list-item'>
          <h2>Freely</h2>
          {/*<span className='work-detail'>
            <img src={ Freely }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Design, Logo Design</div>
              <div className='subtitle'>2019</div>
            </div>
          </span>*/}
        </div></Link></Reveal>
        <br></br>
        <Reveal effect='fade'><Link to='/nabla'><div className='work-list-item'>
          <h2>Nabla</h2>
          {/*<span className='work-detail'>
            <img src={ Nabla }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Design, Logo Design</div>
              <div className='subtitle'>2019</div>
            </div>
          </span>*/}
        </div></Link></Reveal>
        <br></br>
        <Reveal effect='fade'><Link to='/godaddy'><div className='work-list-item'>
          <h2>GoDaddy</h2>
          {/*<span className='work-detail'>
            <img src={ GoDaddy }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Engineering</div>
              <div className='subtitle'>2018 - now</div>
            </div>
          </span>*/}
        </div></Link></Reveal>
      </div>
      <div className='contact-section section'>
        <div className='subtitle'>Contact</div>
        <a target='_blank' rel='noopener noreferrer' href='mailto:hellothere@cristobalgrana.me'><Button title='Drop a line' arrowDir={ 0 } /></a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/cristobal-grana-samanez/'><Button title='Linkedin' arrowDir={ 0 } dark /></a>
        <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/cristo_grana'><Button title='Twitter' arrowDir={ 0 } dark /></a>
        <a target='_blank' rel='noopener noreferrer' href='https://dribbble.com/cristobalgrana'><Button title='Dribbble' arrowDir={ 0 } dark /></a>
      </div>
      <div className='copyright'>
        <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
      </div>
    </div>
  )
}

export default IndexPage
