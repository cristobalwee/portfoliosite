import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SEO from '../components/seo';
import WorkItem from '../components/workItem';
import LinkFade from '../components/linkFade';
import SlopeCommand from '../images/slope_command.png';
import Freely from '../images/freely.png';
import Nabla from '../images/nabla.png';
import GoDaddy from '../images/godaddy.png';
import Chambi from '../images/chambi.png';
import Kc from '../images/kc.png';
import Menu from '../components/menu';
import '../styles/index.scss';

const WorksPage = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setMobile] = useState(false);
  const workList = [
    { title: 'Slope Command', role: 'UX Design', period: '2021', color: '#3E575B', link: '/slope-command', img: SlopeCommand },
    { title: 'Freely', role: 'UX Design', period: '2019', color: '#A78A8A', link: '/freely', img: Freely },
    { title: 'Nabla', role: 'UI/UX + logo design', period: '2019', color: '#0E0E0E', link: '/nabla', img: Nabla },
    { title: 'GoDaddy', role: 'UX Engineering', period: '2018 - now', color: '#135457', link: '/godaddy', img: GoDaddy },
    { title: 'Chambi', role: 'UI/UX Design', period: '2019', color: '#4F0EA2', link: '/chambi', img: Chambi },
    { title: 'KC and the sun', role: 'Logo Design', period: '2018', color: '#0E3B4C', link: '/kc-and-the-sun', img: Kc }
  ];

  useEffect(() => {
    setMobile(window.matchMedia('(max-width: 520px)').matches);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  return (
    <React.Fragment>
      <div className='works page'>
        <SEO title="Cristobal Gra&ntilde;a | Works" />
        <Menu loading={ loading } />
        <div className={ classnames('header-subtitle', { 'loading': loading }) }>
          <span className='subtitle'>Works</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className={ classnames('works-container', { 'loading': loading })} >
          { workList.map((work, i) => {
            const { title, role, period, color, img, link } = work;
            return (
              <div className={ 'works-item add-delay-' + i}>
                <LinkFade url={ link }>
                  <WorkItem title={ title } role={ role } period={ period } color={ color } img={ img } index={ i } fullWidth={ !isMobile } />
                </LinkFade>
              </div>
            );
          })}
        </div>
      </div>
      <div className='footer'>
        <div className='copyright'>
          <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WorksPage;
