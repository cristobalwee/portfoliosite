import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import anime from 'animejs/lib/anime.es.js';
import Reveal from 'react-reveal/Reveal';
import classnames from 'classnames';

import SEO from '../components/seo';
import Menu from '../components/menu';
import Button from '../components/button';
import Loader from '../components/loader';
import WorkItem from '../components/workItem';
import LinkFade from '../components/linkFade';
import viewQuery from '../helpers/viewQuery';
import Portrait from '../images/portrait_short.jpg';
import PortraitMobile from '../images/portrait.jpg';
import SlopeCommand from '../images/slope_command.png';
import Freely from '../images/freely.png';
import Nabla from '../images/nabla.png';
import GoDaddy from '../images/godaddy.png';
import DarkArrow from '../images/right_arrow_dark.svg';
import '../styles/index.scss';

// https://kasunvimu8.medium.com/stateful-gatsby-with-redux-261e68139ec7

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  // Scroll observers
  const index = useRef(null);
  const aboutSection = useRef(null);
  const worksSection = useRef(null);
  const contactSection = useRef(null);
  const workList = [
    { title: 'Slope Command', role: 'UX Design', period: '2021', color: '#3E575B', link: '/slope-command', img: SlopeCommand },
    { title: 'Freely', role: 'UX Design', period: '2019', color: '#A78A8A', link: '/freely', img: Freely },
    { title: 'Nabla', role: 'UI/UX + logo design', period: '2019', color: '#0E0E0E', link: '/nabla', img: Nabla },
    { title: 'GoDaddy', role: 'UX Engineering', period: '2018 - now', color: '#135457', link: '/godaddy', img: GoDaddy }
  ];

  const setupObserver = (node, intersection=0.2) => {
    const threshold = viewQuery('(max-width: 520px)') ? 0.15 : intersection;
    if (typeof window.IntersectionObserver === `function`) {
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (node.current && node.current.className && node.current.className.indexOf('visible') !== -1) return;

            node.current.className = node.current.className + ' visible';
          }
        });
      }, {
        threshold
      });

      observer.observe(node.current);
    }
  }

  useEffect(() => {
    // const textWrapper = document.querySelector('h1');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    setTimeout(() => {
      setLoading(false);
    }, 2500);

    setupObserver(aboutSection, 0.5);
    setupObserver(worksSection);
    setupObserver(contactSection, 0.8);
  });

  return (
    <React.Fragment>
      <div className='index page' ref={ index }>
        <SEO title='Cristobal Gra&ntilde;a' />
        <Menu loading={ loading } />
        <Loader loading={ loading }/>
        <div className={ classnames('header-subtitle', { 'loading': loading }) }>
          <span className='subtitle'>Cristobal Gra&ntilde;a</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className={ classnames('landing-hero', { 'loading': loading }) }>
          <h1>HELLO THERE.</h1>
          <img className='portrait' src={ Portrait }></img>
          <img className='portrait-mobile' src={ PortraitMobile }></img>
        </div>
        <div className='about-section' ref={ aboutSection }>
          <h2>Welcome to my site</h2>
          <p className='about-paragraph'>
            My name is Cristobal Gra&ntilde;a and I’m currently a User Experience engineer at <span><a target='_blank' rel='noopener noreferrer' href='https://www.godaddy.com/'>GoDaddy</a></span>.
            I love learning about <span><a target='_blank' rel='noopener noreferrer' href='https://en.wikipedia.org/wiki/Trivia'>things that don’t matter</a></span> and doing stuff with the web.
            And I like to think I belong to the group of people who have the ability to solve design problems via code. <br></br>
            <LinkFade url='/about'><Button title='Read more' dark /></LinkFade>
          </p>
        </div>
        <div className='works-section section' ref={ worksSection }>
          <div className='subtitle'>Featured works</div>
          <div className='work-list-container'>
            { workList.map((work, i) => {
              const { title, role, period, color, img, link } = work;
              return (
                <div className={ 'works-item add-delay-' + i }>
                  <LinkFade url={ link }>
                    <WorkItem title={ title } role={ role } period={ period } color={ color } img={ img } index={ i } />
                  </LinkFade>
                </div>
              );
            })}
          </div>
          <div className='see-all-link add-delay-4'><Link to='/works'><Button title='See all' dark /></Link></div>
        </div>
      </div>
      <div className='footer'>
        <div className='contact-section section' ref={ contactSection }>
          <div className='subtitle'>Contact me</div>
          <a className='add-delay-0' target='_blank' rel='noopener noreferrer' href='mailto:hellothere@cristobalgrana.me'><h2>Drop a line <img src={ DarkArrow }></img></h2></a><br/>
          <a className='add-delay-1' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/cristobal-grana-samanez/'><Button title='Linkedin' dark /></a>
          <a className='add-delay-2' target='_blank' rel='noopener noreferrer' href='https://twitter.com/cristo_grana'><Button title='Twitter' dark /></a>
          <a className='add-delay-3' target='_blank' rel='noopener noreferrer' href='https://dribbble.com/cristobalgrana'><Button title='Dribbble' dark /></a>
        </div>
        <div className='copyright'>
          <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
        </div>
      </div>
    </React.Fragment>
  )
}

export default IndexPage
