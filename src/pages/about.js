import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Portrait from '../images/about_portrait.png';
import Rebillet from '../images/rebillet.png';
import BonIver from '../images/auatc.png';
import Jyocho from '../images/jyocho.png';
import Kendrick from '../images/kendrick.png';
import LinkArrow from '../images/link_arrow.svg';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const AboutPage = () => (
  <React.Fragment>
    <div className='about page'>
      <SEO title="Cristobal Gra&ntilde;a | About me" />
      <Menu />
      <div className='spotify-player'>
        <iframe src="https://open.spotify.com/embed/track/2X1PJ3l0wM4D42EiEdVh5W" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className='header-subtitle'>
        <span className='subtitle'>About</span>
        <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
      </div>
      <h2>HERE'S MORE ABOUT ME</h2>
      <div className='about-header-content'>
        <img src={ Portrait } />
        <p>
          I’m a Peruvian-born interaction engineer with a passion for minimalist styles and delightful experiences.
          I see myself as someone who can contribute at the intersect of design and development – a designer who works
          with developers to implement the latest prototypes, and an engineer who develops wireframes and contributes
          to design reviews.  
          <br></br>
          <br></br>

          I have a Bachelor’s degree in Mathematics and Computer Science from the University of Illinois at Urbana-Champaign,
          obtained in 2018. I’ve since been working as a User Experience Engineer at GoDaddy, toeing the line between web
          design and development.
        </p>
      </div>
      <div className='album-section'>
        <span className='subtitle'>Currently on repeat &#9834;</span>
        <div className='album-section-inner'>
          <a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/track/6QcsVmeFQX6zt2TeVu9uQW?si=a30a24c6a5fb4997'>
            <div className='about-album'>
              <img className='link-arrow' src={ LinkArrow } />
              <img src={ Rebillet }></img>
              <div className='about-album-content'>
                <h3>One More Time</h3>
                <p>Marc Rebillet</p>
              </div>
            </div>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/track/2X1PJ3l0wM4D42EiEdVh5W?si=d6fdd7cccef14d04'>
            <div className='about-album'>
              <img className='link-arrow' src={ LinkArrow } />
              <img src={ BonIver }></img>
              <div className='about-album-content'>
                <h3>AUATC</h3>
                <p>Bon Iver</p>
              </div>
            </div>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/track/7o5bBd0ycONA0dTWVPXyxE?si=a4612514e05a483b'>
            <div className='about-album'>
              <img className='link-arrow' src={ LinkArrow } />
              <img src={ Jyocho }></img>
              <div className='about-album-content'>
                <h3>つづくいのち</h3>
                <p>JYOCHO</p>
              </div>
            </div>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/track/1gXH8hT9dxsBqbRy7h2iC8?si=823c36df4a7d44ac'>
            <div className='about-album'>
              <img className='link-arrow' src={ LinkArrow } />
              <img src={ Kendrick }></img>
              <div className='about-album-content'>
                <h3>F*ck Your Ethnicity</h3>
                <p>Kendrick Lamar</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='work-nav'>
        <Link to='/works'><Button title='Check out my works' subtitle="If you haven't already," dark /></Link>
      </div>
    </div>
    <div className='footer'>
      <div className='copyright'>
        <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
      </div>
    </div>
  </React.Fragment>
)

export default AboutPage;
