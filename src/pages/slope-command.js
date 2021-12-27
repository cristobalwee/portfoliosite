import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import LinkFade from '../components/linkFade';
import CloseButton from '../images/close_button.svg';
import SlopeLogo from '../images/slope_command_header2.png';
import Concept1 from '../images/subfive_concept.png';
import Concept2 from '../images/slope_concept.png';
import SlopeLanding from '../images/slope_landing.png';
import SlopeAbout from '../images/slope_about.png';
import SlopeArticle from '../images/slope_article.png';
import SlopeList from '../images/slope_list.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const SlopeCommandPage = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const backLink = location && location.state && location.state.fromPage;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className={ classnames('work-header', { 'loading': loading }) } style={{ backgroundColor: '#3E575B' }}>
        <div className='header-subtitle'>
          <span className='subtitle'>Slope Command</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className='work-header-content'>
          <LinkFade url={ backLink || '/' }><img src={ CloseButton } /></LinkFade>
          <div>
            <div><p className='italic'>work.01</p></div>
            <h2>Slope Command</h2>
            <div className='work-subtitle'>
              <p>UX Design</p>
              <p>2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className={ classnames('slope-command work page', { 'loading': loading }) }>
        <SEO title="Cristobal Gra&ntilde;a | Slope Command" />
        <Menu loading={ loading } />
        <div className='work-about-focus-section add-delay-0'>
          <div className='subtitle'>About</div>
          <p>
            Throughout 2020, my friends and I dedicated ourselves to two of the few
            things that were still available to us amidst the global turmoil: the
            outdoors and the stock market. The new knowledge we gained drove some of us
            to start writing a blog, and – while I haven't yet personally partaken
            in the content creation aspect – I wanted to use the opportunity to dabble
            in branding and design systems.
          </p>
        </div>
        <div className='work-about-focus-section add-delay-1'>
          <div className='subtitle'>Role</div>
          <p>UI/UX Design, Logo Design (collaborative)</p>
        </div>
        <div className='work-about-focus-section add-delay-2'>
          <div className='subtitle'>Period</div>
          <p>2021, ongoing</p>
        </div>
        <div className='work-process-section add-delay-3'>
          <h3>Branding</h3>
          <p>
            After we decided roughly what we wanted out of the blog, I started exploring
            logo and naming options, later convening with my friend <span><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/syntantics'>Will</a></span> to refine the
            concepts and center the brand. I had initially drawn up a few logo prototypes that used
            the names <i>Subfive2k</i> and <i>Slope command</i> from our collective brainstorming.
          </p>
          <div className='work-image-section center-screen-lg add-delay-4'>
            <img src={ Concept1 }></img>
            <img src={ Concept2 }></img>
          </div>
          <p>
            I’ve not really had a lot of experience designing logos or brands, but this was a great
            opportunity to learn more about it and collaborate on something we cared about. The final
            logo pulled the mountain pictogram Will designed and the lettering I selected, and we
            decided <i>Slope command</i> was the name we wanted:
          </p>
          <img src={ SlopeLogo }></img>
        </div>
        <p>
          The rest of the work involved defining the brand and design guidelines, and putting together UI screens.
        </p>
        <div className='work-image-section'>
          <img src={ SlopeLanding }></img>
          <img src={ SlopeAbout }></img>
        </div>
        <div className='work-image-section'>
          <img src={ SlopeArticle }></img>
          <img src={ SlopeList }></img>
        </div>
        <p>
          In order to expedite the blog posting and get the content out there, the group decided
          to just host the site on <span><a target='_blank' rel='noopener noreferrer' href='https://www.slopecommand.com/'>squarespace</a></span> for
          the foreseeable future, and just implement the full site with no rush once it's ready to go.
        </p>
        <div className='work-nav'>
          <LinkFade url='/freely'><Button title='Freely' subtitle='Next' dark /></LinkFade>
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

export default SlopeCommandPage;
