import React from 'react'
import about from '../../assets/mypic61.jpg'
import {FaAward} from "react-icons/fa"
import './about.scss'

const About = () => {
  return (
    <section id="about" class="about">
      <h5>Let's Talk</h5>
      <h2>About me</h2>
      <div className="container about__container">
          <div className="about__me-img">
             <div className="img">
             <img src={about} alt="about me" />
             </div>
          </div>
          <div className="about__me-desc">
            <div className="about_skills">
              <article>
                  <FaAward className="icons"/>
                  <h5>Experience</h5>
                  <small>3+ years working</small>
              </article>
              <article>
                  <FaAward className="icons"/>
                  <h5>Experience</h5>
                  <small>3+ years working</small>
              </article>
              <article>
                  <FaAward className="icons"/>
                  <h5>Experience</h5>
                  <small>3+ years working</small>
              </article>
            </div>
            <p>As a fullstack Javascript developer, I have expertise in both frontend and backend web development using modern tools and frameworks such as React, Angular, Node.js, and Express. With a strong understanding of software engineering principles and a passion for building elegant and efficient solutions, I enjoy bringing ideas to life by crafting scalable, maintainable, and user-friendly web applications. My skills in database design, server configuration, and RESTful API development, coupled with a keen eye for UI/UX design, allow me to deliver end-to-end solutions that meet the needs of clients and end-users alike.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
