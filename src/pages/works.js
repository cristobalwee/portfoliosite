import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import SlopeCommand from '../images/slope_command.png';
import Freely from '../images/freely.png';
import Nabla from '../images/nabla.png';
import GoDaddy from '../images/godaddy.png';
import Menu from '../components/menu';
import '../styles/index.scss';

const WorksPage = () => (
  <div className='works page'>
    <SEO title="Cristobal Grana | Works" />
    <Menu />
    <div className='header-subtitle'>
      <span className='subtitle'>Works</span>
      <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
    </div>
    <div className='works-container'>
      <Link to='/slope-command'><div className='work-item'>
        <img src={ SlopeCommand }></img>
        <h3>Slope Command</h3>
        <p>UX Design, 2021</p>
      </div></Link>
      <div className='work-item'>
        <img src={ Freely }></img>
        <h3>Freely</h3>
        <p>UX Design, 2019</p>
      </div>
      <div className='work-item'>
        <img src={ Nabla }></img>
        <h3>Nabla</h3>
        <p>UI/UX + Logo Design, 2019</p>
      </div>
      <div className='work-item'>
        <img src={ GoDaddy }></img>
        <h3>GoDaddy</h3>
        <p>UX Engineering, 2018 - now</p>
      </div>
    </div>
  </div>
)

export default WorksPage;
