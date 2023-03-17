import React from 'react'
import about from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import './about.scss'

const About = () => {
  return (
    <section id="about" class="about">
      <h5>Let's Talk</h5>
      <h2>About me</h2>
      <div className="container about__container">
          <div className="about__me-img">
              <img src={about} alt="about me" />
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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla minima explicabo architecto iusto temporibus voluptate corporis accusamus sunt doloremque libero. Cupiditate perspiciatis dolores consectetur ducimus nostrum laudantium ad, nesciunt eum?</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
