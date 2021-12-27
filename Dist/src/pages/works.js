import React from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import SEO from '../components/seo';
import WorkItem from '../components/workItem';
import SlopeCommand from '../images/slope_command.png';
import Freely from '../images/freely.png';
import Nabla from '../images/nabla.png';
import GoDaddy from '../images/godaddy.png';
import Chambi from '../images/chambi.png';
import Kc from '../images/kc.png';
import Menu from '../components/menu';
import '../styles/index.scss';

const WorksPage = () => {
  const workList = [
    { title: 'Slope Command', role: 'UX Design', period: '2021', color: '#3E575B', link: '/slope-command', img: SlopeCommand },
    { title: 'Freely', role: 'UX Design', period: '2019', color: '#A78A8A', link: '/freely', img: Freely },
    { title: 'Nabla', role: 'UI/UX + logo design', period: '2019', color: '#0E0E0E', link: '/nabla', img: Nabla },
    { title: 'GoDaddy', role: 'UX Engineering', period: '2018 - now', color: '#135457', link: '/godaddy', img: GoDaddy },
    { title: 'Chambi', role: 'UI/UX Design', period: '2019', color: '#4F0EA2', link: '/chambi', img: Chambi },
    { title: 'KC and the sun', role: 'Logo Design', period: '2018', color: '#0E3B4C', link: '/kc-and-the-sun', img: Kc }
  ];

  return (
    <React.Fragment>
      <div className='works page'>
        <SEO title="Cristobal Gra&ntilde;a | Works" />
        <Menu />
        <div className='header-subtitle'>
          <span className='subtitle'>Works</span>
          <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
        </div>
        <div className='works-container'>
          { workList.map((work, i) => {
            const { title, role, period, color, img, link } = work;
            return (
              <div className={ 'add-delay-' + i}>
                <AniLink cover direction='up' bg='#2c2c2c' to={ link } exit={{ length: 0.5 }} state={{ fromPage: '/works' }}>
                  <WorkItem title={ title } role={ role } period={ period } color={ color } img={ img } index={ i } fullWidth={ !window.matchMedia('(max-width: 520px)').matches } />
                </AniLink>
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
