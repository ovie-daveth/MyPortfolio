import React from 'react'
import {FcCheckmark} from 'react-icons/fc'

import './service.scss'

const webdev = [
  {
    id: 1,
    content: 'Create beautifull and responsive UIs for all type of websites'
  },
  {
    id: 2,
    content: 'Code testing, code maintenance for user interfaces of web applications'
  },
  {
    id: 3,
    content: 'Optimization of web Apps for speed and performance. '
  },
  {
    id: 4,
    content: 'Available for both part-time and full-time gigs'
  },
 
]
const database = [
  {
    id: 1,
    content: 'Develop and maintain server-side codes using node.js, express & python'
  },
  {
    id: 2,
    content: 'Design and manage databases (mySql, postgresql, mongodb and firestore)'
  },
  {
    id: 3,
    content: 'Ensure scalability and performance'
  },
  {
    id: 4,
    content: 'Creation and maintenance of RESTful APIs'
  },
  {
    id: 5,
    content: 'Available for part-time and full-time gigs'
  },
  
]
const content = [
  {
    id: 1,
    content: 'Educate and Train students in web development online and onsite'
  },
  {
    id: 2,
    content: 'Organizes Web development Bootcamps'
  },
  {
    id: 3,
    content: 'Technical writing for blogs and brands (Check out my blog!)'
  },
  {
    id: 4,
    content: 'Open to talk shows and seminar presentations on tech related programs'
  },
 
]

const Service = () => {
  return (
    <section id="service" >
      <h5>See what I offer as</h5>
      <h2>Services</h2>
      <div className="container service__conatainer">
          <div className="service__container-item">
              <div className="service__container-header">
                <h2>Frontend Development</h2>
              </div>
              <ul>
                {
                  webdev.map(item => (
                    <li key={item.id}>
                      <span><FcCheckmark className="icons" /> </span>
                      <small>{item.content}</small>
                    </li>
                  ))
                }
              </ul>
          </div>
          <div className="service__container-item">
              <div className="service__container-header">
                <h2>Backend and API Development</h2>
              </div>
              <ul>
                {
                  database.map(item => (
                    <li key={item.id}>
                      <span><FcCheckmark /></span>
                      <small>{item.content}</small>
                    </li>
                  ))
                }
              </ul>
          </div>
          <div className="service__container-item">
              <div className="service__container-header">
                <h2>Miscellaneous</h2>
              </div>
              <ul>
                {
                  content.map(item => (
                    <li key={item.id}>
                      <span><FcCheckmark /></span>
                      <small>{item.content}</small>
                    </li>
                  ))
                }
              </ul>
          </div>
      </div>
    </section>
  )
}

export default Service
