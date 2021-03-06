import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
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

const SlopeCommandPage = ({ location }) => (
  <React.Fragment>
    <div className='work-header' style={{ backgroundColor: '#3E575B' }}>
      <div className='work-header-content'>
        <Link to={ location.state.fromPage || '/' }><img src={ CloseButton } /></Link>
        <div><p className='italic'>work.01</p></div>
        <h2>Slope Command</h2>
        <div className='work-subtitle'>
          <p>UX Design</p>
          <p>2021</p>
        </div>
      </div>
    </div>
    <div className='slope-command work page'>
      <SEO title="Cristobal Gra&ntilde;a | Slope Command" />
      <Menu />
      <div className='work-about-focus-section'>
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
      <div className='work-about-focus-section'>
        <div className='subtitle'>Role</div>
        <p>UI/UX Design, Logo Design (collaborative)</p>
      </div>
      <div className='work-about-focus-section'>
        <div className='subtitle'>Period</div>
        <p>2021, ongoing</p>
      </div>
      <div className='work-process-section'>
        <h3>Branding</h3>
        <p>
          After we decided roughly what we wanted out of the blog, I started exploring
          logo and naming options, later convening with my friend <span><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/syntantics'>Will</a></span> to refine the
          concepts and center the brand. I had initially drawn up a few logo prototypes that used
          the names <i>Subfive2k</i> and <i>Slope command</i> from our collective brainstorming.
        </p>
        <div className='work-image-section center-screen-lg'>
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
        The final logo pulled the mountain pictogram Will designed and the lettering I selected,
        and we decided <i>Slope command</i> was the name we wanted. The rest of the work involved
        defining the brand and design guidelines, and putting together UI screens.
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
        <Link to='/freely'><Button title='Freely' subtitle='Next' dark /></Link>
      </div>
    </div>
    <div className='footer'>
      <div className='copyright'>
        <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
      </div>
    </div>
  </React.Fragment>
)

export default SlopeCommandPage;
