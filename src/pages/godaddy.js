import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../images/godaddy_header.png';
import Menu from '../components/menu';
import Button from '../components/button';
import '../styles/index.scss';

const GodaddyPage = () => (
  <div className='godaddy work page'>
    <SEO title="Cristobal Gra&ntilde;a | GoDaddy" />
    <Menu />
    <div className='header-subtitle'>
      <span className='subtitle'>GoDaddy</span>
      <span className='subtitle'>&mdash; &nbsp; Portfolio 2021</span>
    </div>
    <div className='header-img' style={{ backgroundImage: `url(${Header})` }}></div>
    <div className='subtitle'>About</div>
    <p>
      I did a UX design internship at GoDaddy the summer before my senior year of college. I was since
      hired as a full time UX engineer and have been working as part of the Brandbook team as a liaison
      between my team of developers and the broader design organization. Our main focus is the image
      library component consumed by a variety of GoDaddy apps, most prominent of which are the website
      builder and venture dashboard.
    </p>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Role</div>
      <p>UX Engineering, Level II</p>
    </div>
    <div className='work-about-focus-section'>
      <div className='subtitle'>Period</div>
      <p>2018 - now</p>
    </div>
    <p>
       As an engineer, I helped develop the end to end client experience of the Website Builder Media
       Library ("Brand Book") via React, Redux, and Redux-saga. As a designer, I worked alongside the
       Independents Design team to contribute to most of the UX patterns currently in place in the
       Media Library. For privacy reasons, I'm not able to publicly show much of the designs
       I've created over my tenure, but you can access them from this <span><a target='_blank' rel='noopener noreferrer' href='https://fiddle-amethyst-k466.squarespace.com/'>password protected page</a></span>
    </p>
    <div className='work-nav'>
      <Link to='/nabla'><Button title='Nabla' subtitle='Previous' arrowDir={ -1 } dark /></Link>
      <Link to='/chambi'><Button title='Chambi' subtitle='Next' dark /></Link>
    </div>
    <div className='copyright'>
      <h3>Cristobal Grana Samanez <span>&copy;2021</span></h3>
    </div>
  </div>
)

export default GodaddyPage;
