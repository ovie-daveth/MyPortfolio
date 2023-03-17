import React from 'react'
import {MdVerified} from 'react-icons/md'

import './experience.scss'

const frontend = [
  {
    id: 1,
    title: 'HTML5',
    level: 'Experienced'
  },
  {
    id: 2,
    title: 'CSS3',
    level: 'Experienced'
  },
  {
    id: 3,
    title: 'JavaScript',
    level: 'Core'
  },
  {
    id: 4,
    title: 'React',
    level: 'Experienced'
  },
  {
    id: 5,
    title: 'Bootstrap',
    level: 'Intermediate'
  },
  {
    id: 6,
    title: 'Tailwind',
    level: 'Experienced'
  },
]
const backend = [
  {
    id: 1,
    title: 'Django',
    level: 'core'
  },
  {
    id: 2,
    title: 'Node Js',
    level: 'Core'
  },
  {
    id: 3,
    title: 'Mongo Db',
    level: 'Experienced'
  },
  {
    id: 4,
    title: 'Firebase',
    level: 'Core'
  },
  {
    id: 5,
    title: 'Mysql',
    level: 'Experienced'
  },
]

const Experience = () => {
  return (
    <section id="experience">
     <h5>Check Out My Skills</h5>
     <h2>And Experience</h2>
     <div className="container experience__container">
        <div className="frontend">
          <h2>Frontend Development</h2>
          <div className="experience__item-container">
           {
            frontend.map(item => (
              <article key={item.id}>
              <span><MdVerified /></span>
              <div className="experience__item">
                <h3>{item.title}</h3>
                <small>{item.level}</small>
              </div>
            </article>
            ))
           }
           
          </div>
        </div>
        <div className="backend">
          <h2>Backend Development</h2>
          <div className="experience__item-container">
           {
            backend.map(item => (
              <article key={item.id}>
              <span><MdVerified /></span>
              <div className="experience__item">
                <h3>{item.title}</h3>
                <small>{item.level}</small>
              </div>
            </article>
            ))
           }
           
          </div>
        </div>
     </div>
    </section>
  )
}

export default Experience
