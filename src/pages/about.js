import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import LinkFade from '../components/linkFade';
import Portrait from '../images/about_portrait.png';
import PortraitLong from '../images/about_portrait_long.png';
import Rebillet from '../images/rebillet.png';
import BonIver from '../images/auatc.png';
import Jyocho from '../images/jyocho.png';
import Kendrick from '../images/kendrick.png';
import LinkArrow from '../images/link_arrow.svg';
import Menu from '../components/menu';
import Button from '../components/button';
import AboutTrack from '../components/aboutTrack';
import viewQuery from '../helpers/viewQuery';
import '../styles/index.scss';

// https://github.com/thelinmichael/spotify-web-api-node#usage

const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const tracks = [
    {
      trackLink: 'https://open.spotify.com/track/6QcsVmeFQX6zt2TeVu9uQW?si=a30a24c6a5fb4997',
      image: Rebillet,
      title: 'One More Time',
      artist: 'Marc Rebillet'
    },
    {
      trackLink: 'https://open.spotify.com/track/2X1PJ3l0wM4D42EiEdVh5W?si=d6fdd7cccef14d04',
      image: BonIver,
      title: 'AUATC',
      artist: 'Bon Iver'
    },
    {
      trackLink: 'https://open.spotify.com/track/7o5bBd0ycONA0dTWVPXyxE?si=a4612514e05a483b',
      image: Jyocho,
      title: 'つづくいのち',
      artist: 'JYOCHO'
    },
    {
      trackLink: 'https://open.spotify.com/track/1gXH8hT9dxsBqbRy7h2iC8?si=823c36df4a7d44ac',
      image: Kendrick,
      title: 'F*ck Your Ethnicity',
      artist: 'Kendrick Lamar'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className='about page'>
        <SEO title="Cristobal Gra&ntilde;a | About me" />
        <Menu loading={ loading } />
        <div className='spotify-player'>
          <iframe src="https://open.spotify.com/embed/track/2X1PJ3l0wM4D42EiEdVh5W" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className={ classnames('header-subtitle', { 'loading': loading }) }>
          <span className='subtitle'>About</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className={ classnames('about-hero', { 'loading': loading }) }>
          <h2>HERE'S MORE ABOUT ME</h2>
          <div className='about-header-content'>
            <img src={ viewQuery('(max-width: 520px)') ? PortraitLong : Portrait } />
            <p>
              I’m a Peruvian-born interaction engineer with a passion for minimalist styles and delightful experiences.
              I see myself as someone who can contribute at the intersect of design and development – a designer who works
              with developers to implement the latest prototypes, and an engineer who develops wireframes and contributes
              to design reviews.  

              <br/>
              <br/>

              I have a Bachelor’s degree in Mathematics and Computer Science from the University of Illinois at Urbana-Champaign,
              obtained in 2018. I’ve since been working as a User Experience Engineer at GoDaddy, toeing the line between web
              design and development.
            </p>
          </div>
        </div>
        <div className='misc-section'>
          <div className='misc-section-inner'>
            <div>
              <span className='subtitle'>Based out of:</span>
              <h3>Vancouver, BC, Canada <span className='live-dot'></span></h3>
            </div>
            <div>
              <span className='subtitle'>Favorite punctuation mark:</span>
              <h3>Em dash &nbsp; &#8212;</h3>
            </div>
          </div>
          <div className='misc-section-inner'>
            <div>
              <span className='subtitle'>Watching:</span>
              <h3>Succession, Season 3</h3>
            </div>
            <div>
              <span className='subtitle'>Reading:</span>
              <h3>The UX Team of One, Leah Buley</h3>
            </div>
          </div>
        </div>
        <div className='album-section'>
          <span className='subtitle'>Currently on repeat &#9834;:</span>
          <div className='album-section-inner'>
            { tracks.map((track, i) => (
              <AboutTrack
                trackLink={ track.trackLink }
                image={ track.image }
                title={ track.title }
                artist={ track.artist }
              />
            ))}
          </div>
        </div>
        <div className='work-nav'>
          <LinkFade url='/works'><Button title='Check out my works' subtitle="If you haven't already," dark /></LinkFade>
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

export default AboutPage;
