import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../images/freely_header.png';
import Page1 from '../images/freely_page1.png';
import Page2 from '../images/freely_page2.png';
import Page3 from '../images/freely_page3.png';
import Page4 from '../images/freely_page4.png';
import Logo from '../images/freely_logo.png';
import LogoDark from '../images/freely_logo_dark.png';
import Assets from '../images/freely_assets.png';
import Screens from '../images/freely_screens.png';
import Landing from '../images/freely_landing.png';
import Footer from '../images/freely_footer.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const FreelyPage = () => (
  <div className='freely work page'>
    <SEO title="Cristobal Gra&ntilde;a | Freely" />
    <Menu />
    <div className='header-subtitle'>
      <span className='subtitle'>Freely</span>
      <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
    </div>
    <div className='header-img' style={{ backgroundImage: `url(${Header})` }}></div>
    <div className='subtitle'>About</div>
    <p>
      I found a prompt about easing the complexity of event planning with friends
      on <span><a target='_blank' rel='noopener noreferrer' href='http://iwishtherewasanappfor.com'>iwishtherewasanappfor.com</a></span> that
      drove me to explore potential solutions. Basically, the idea is that planning
      a night out with multiple friends often involves a lot of effort and seldom pans out
      as desired. So I set out to design an end-to-end app experience and implement it
      (though I didn’t get to that last part, but at least I enjoyed experimenting with the
      design aspect of it).
    </p>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Role</div>
      <p>UI/UX Design, Logo Design</p>
    </div>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Period</div>
      <p>2019</p>
    </div>
    <p>
      I wanted to actually dive deep into the UX of it – formulate a problem, conduct research, and
      come up with solutions to specific user problems. So I started writing.
    </p>
    <div className='work-image-section'>
      <img src={ Page1 }></img>
      <img src={ Page2 }></img>
    </div>
    <p>
      The approach I took mainly consisted of a flow of consciousness where I just thought of everything
      that could be relevant towards the new app, so it wasn't super sophisticated. But I really enjoyed
      taking the time to write all my thoughts down and trying to develop them into an actual usable
      experience.
    </p>
    <div className='work-image-section'>
      <img src={ Page3 }></img>
      <img src={ Page4 }></img>
    </div>
    <p>
      There was a lot to unpack, but the initial brainstorming session was done – so I moved on to something
      more foreign to me: logos and branding. I didn’t want anything too complex, just a simple, clean-looking
      typeface with some nice colors.
    </p>
    <div className='work-image-section'>
      <img src={ Logo }></img>
      <img src={ LogoDark }></img>
    </div>
    <img src={ Assets }></img>
    <p>
      With that out of the way, it was time to go to the flows. I lost a lot of the lo-fi flows I wrote down,
      but I still worked mostly with the high fidelity screens.
    </p>
    <img src={ Screens }></img>
    <p>
      And, of course, I messed around with a landing page for it to potentially promote the app once we got it
      fully implemented.
    </p>
    <div className='work-image-section'>
      <img src={ Landing }></img>
      <img src={ Footer }></img>
    </div>
    <div className='work-nav'>
      <Link to='/slope-command'><Button title='Slope Command' subtitle='Previous' arrowDir={ -1 } dark /></Link>
      <Link to='/nabla'><Button title='Nabla' subtitle='Next' dark /></Link>
    </div>
    <div className='copyright'>
      <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
    </div>
  </div>
)

export default FreelyPage;
