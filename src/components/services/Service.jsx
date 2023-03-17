import React from 'react'
import {FcCheckmark} from 'react-icons/fc'

import './service.scss'

const webdev = [
  {
    id: 1,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 2,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 3,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 4,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 5,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
]
const database = [
  {
    id: 1,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 2,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 3,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 4,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 5,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 6,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  
]
const content = [
  {
    id: 1,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 2,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 3,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 4,
    content: 'Create beautifull UIs and UX for all type of websites'
  },
  {
    id: 5,
    content: 'Create beautifull UIs and UX for all type of websites'
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
                <h2>Web development</h2>
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
                <h2>Database Management</h2>
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
                <h2>Technical Writing</h2>
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
