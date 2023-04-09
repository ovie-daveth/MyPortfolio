import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BiLinkAlt} from 'react-icons/bi'

import img1 from '../../assets/portfolio2.png'
import img2 from '../../assets/portfolio1.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

import './port.scss'

const Portfolio = () => {

  const  projects = [
    {
      id: 1,
      title: 'TechTime - A landing page for an LMS site',
      img: img2,
      live: 'https://dynamic-meerkat-610c40.netlify.app/',
      github: 'https://github.com/ovie-daveth/TechTime.git',
    },
    {
      id: 2,
      title: 'SpaceTravel - A Space Tourism multi-page website',
      img: img1,
      live: 'https://spacetravel-zeta.vercel.app/',
      github: 'https://github.com/ovie-daveth/SpaceTravel.git',
    },
    {
      id: 3,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img3,
      live: 'https://dave-media-15g378tui-ovie-daveth.vercel.app/',
      github: 'https://github.com/ovie-daveth/DaveMedia.git',
    },
    {
      id: 4,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img4,
      live: '',
      github: '',
    },
    {
      id: 5,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img5,
      live: '',
      github: '',
    },
    {
      id: 6,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img6,
      live: '',
      github: '',
    },
  ]

  return (
    <section id="portfolio">
      <h5>Some of my latest</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
         {
          projects.map(item => (
            <div className="project" key={item.id}>
              <div className="project__img">
                <img src={item.img} alt="project1" />
              </div>
                <h2>{item.title}</h2>
                <div className="icons">
                  <p> <a href={item.github} target="_blank" rel="noreferrer"><span><BsGithub /></span><span>Github</span></a> </p>
                  <p> <a href={item.live} rel="noreferrer" target="_blank"><span><BiLinkAlt /></span> <span>Live Demo</span></a> </p>
                </div>
            </div>
          ))
         }
      </div>
    </section>
  )
}

export default Portfolio
