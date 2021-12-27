import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import LinkFade from '../components/linkFade';
import Loader from '../components/loader';
import CloseButton from '../images/close_button.svg';
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

const FreelyPage = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const backLink = location && location.state && location.state.fromPage;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className={ classnames('work-header', { 'loading': loading }) } style={{ backgroundColor: '#A78A8A' }}>
        <div className='header-subtitle'>
          <span className='subtitle'>Freely</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className='work-header-content'>
          <LinkFade url={ backLink || '/' }><img src={ CloseButton } /></LinkFade>
          <div>
            <div><p className='italic'>work.02</p></div>
            <h2>Freely</h2>
            <div className='work-subtitle'>
              <p>UX Design</p>
              <p>2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className={ classnames('freely work page', { 'loading': loading }) }>
        <SEO title="Cristobal Gra&ntilde;a | Freely" />
        <Menu loading={ loading } />
        <div className='work-about-focus-section add-delay-0'>
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
        </div>
        <div className='work-about-focus-section add-delay-1'>
          <div className='subtitle'>Role</div>
          <p>UI/UX Design, Logo Design</p>
        </div>
        <div className='work-about-focus-section add-delay-2'>
          <div className='subtitle'>Period</div>
          <p>2019</p>
        </div>
        <div className='work-process-section add-delay-3'>
          <h3>Brainstorming</h3>
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
        </div>
        <div className='work-about-focus-section'>
          <div className='subtitle'>Problem</div>
          <p>
            Arranging a night out with friends can sometimes be a complicated process mainly involving messaging/texting
            multiple people separately, only to have them say no or even ignore the message all together. While
            one person may be excited about the prospect of going out to eat/drink/etc., another may be caught up
            in work/school or simply not feeling up for it - there’s just no easy and quick way to gauge who’s down
            and at what times.
          </p>
        </div>
        <div className='work-process-section'>
          <h3>Branding</h3>
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
        </div>
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
          <LinkFade url='/slope-command'><Button title='Slope Command' subtitle='Previous' arrowDir={ -1 } dark /></LinkFade>
          <LinkFade url='/nabla'><Button title='Nabla' subtitle='Next' dark /></LinkFade>
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

export default FreelyPage;
