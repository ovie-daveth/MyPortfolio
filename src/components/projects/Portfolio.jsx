import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BiLinkAlt} from 'react-icons/bi'

import img1 from '../../assets/portfolio2.jpg'
import img2 from '../../assets/portfolio1.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

import './port.scss'

const Portfolio = () => {

  const  projects = [
    {
      id: 1,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img1
    },
    {
      id: 2,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img2
    },
    {
      id: 3,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img3
    },
    {
      id: 4,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img4
    },
    {
      id: 5,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img5
    },
    {
      id: 6,
      title: 'NinjaPost - A Fullstack firebase functioning blog',
      img: img6
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
                  <p> <a href="https://www.github.com/ovie-daveth" target="_blank" rel="noreferrer"><span><BsGithub /></span><span>Github</span></a> </p>
                  <p> <a href="https://dribble.com" target="_blank" rel="noreferrer"><span><BiLinkAlt /></span> <span>Live Demo</span></a> </p>
                </div>
            </div>
          ))
         }
      </div>
    </section>
  )
}

export default Portfolio
