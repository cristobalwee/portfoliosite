import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import anime from 'animejs/lib/anime.es.js';

import SEO from '../components/seo';
import Menu from '../components/menu';
import Button from '../components/button';
import Portrait from '../images/portrait_short.jpg';
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
      duration: 1000,
      delay: (el, i) => 1500 + 18 * i
    }).add({
      targets: '.portrait',
      translateY: [50,0],
      translateZ: 0,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 1000,
    }, '-=1100').add({
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
      <SEO title="Cristobal Grana" />
      <Menu />
      <div className='header-subtitle'>
        <span className='subtitle'>Cristobal Grana</span>
        <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
      </div>
      <h1>HELLO THERE.</h1>
      <img className='portrait' src={ Portrait }></img>
      <p className='about-section'>
        Welcome to my site, my name Cristobal Grana and I’m currently a User Experience engineer at <span>GoDaddy</span>.
        I love learning about <span>things that don’t matter</span> and doing stuff with the web. I like to think I belong
        to the group of people who have the ability to solve design problems via code. <span><Link to='/about'>Read more</Link></span>
      </p>
      <div className='works-section section'>
        <div className='subtitle'>Featured works</div>
        <Link to='/slope-command'><div className='work-list-item'>
          <h2>Slope Command</h2>
          <span className='work-detail'>
            <img src={ SlopeCommand }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Design</div>
              <div className='subtitle'>2021</div>
            </div>
          </span>
        </div></Link>
        <br></br>
        <div className='work-list-item'>
          <h2>Freely</h2>
          <span className='work-detail'>
            <img src={ Freely }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Design, Logo Design</div>
              <div className='subtitle'>2019</div>
            </div>
          </span>
        </div>
        <br></br>
        <div className='work-list-item'>
          <h2>Nabla</h2>
          <span className='work-detail'>
            <img src={ Nabla }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Design, Logo Design</div>
              <div className='subtitle'>2019</div>
            </div>
          </span>
        </div>
        <br></br>
        <div className='work-list-item'>
          <h2>GoDaddy</h2>
          <span className='work-detail'>
            <img src={ GoDaddy }></img>
            <div className='work-detail-content'>
              <div className='subtitle'>UX Engineering</div>
              <div className='subtitle'>2018 - now</div>
            </div>
          </span>
        </div>
      </div>
      <div className='contact-section section'>
        <div className='subtitle'>Contact</div>
        <Button title='Drop a line' />
        <Button title='Linkedin' dark />
        <Button title='Twitter' dark />
        <Button title='Dribbble' dark />
      </div>
      <div className='copyright'>
        <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
      </div>
    </div>
  )
}

export default IndexPage
