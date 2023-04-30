import React from 'react'
import './courses.scss'
import codes from '../../assets/codes.png'
import { Link, useNavigate } from 'react-router-dom'
import vidDemo from '../../assets/demo.mp4'
import web from '../../assets/web.jpg'
import backend from '../../assets/backend.jpg'
import node from '../../assets/node.jpg'
import {TbCurrencyNaira} from 'react-icons/tb'
import CourseHeader from './CourseHeader'
import Testimonial from '../testimonials/Testimonial'

const Courses = () => {
    const nav = useNavigate()
    const register = () => {
        nav('/register')
    }
    return <main>
        <CourseHeader />
        <div className="home"> 
            <div className='home-desc'>
               <h1>Become a proficient web developer, and attract high paying jobs within 6 months of good training.</h1>
                <small>We offer personalize tutorial and one on one mentorship to our students at affordable prices and optiumum results</small>
                <div className="actions">
                    <button><Link to="/">Contact me</Link></button>
                    <button><a href="#course">Available courses</a>
                    </button>
                </div>
            </div>
            <div className='home-img'>
                <img src={codes} alt="codes" width={50} />
            </div>
        </div>
        <div className="about_d" id="about">
            <div className="about__desc">
                <h1>WHO WE ARE</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis quaerat et quam rem dolorum non, laudantium inventore dolores! Quam fuga ullam alias ipsa incidunt quasi corrupti eaque? Soluta, perspiciatis.</p>
                <ul>
                    <p>What we do</p>
                    <li>Weekly Livecoding</li>
                    <li>Daily lectures</li>
                    <li>E-books tutorials</li>
                    <li>One on one mentoring</li>
                    <li>247 access to mentors</li>
                </ul>
            </div>
            <div className="about__vid">
                <video src={vidDemo} controls autoPlay muted></video>
            </div>
        </div>
        <div className="available" id="courses">
            <h2>Available courses</h2>
            <div className="course__container">
                <div className="courses">
                    <img src={web} alt="web" />
                    <div className="content">
                        <h3>Complete Frontend development Course</h3>
                        <div className="content_action">
                            <small>Duration: 3 Month</small>
                            <small>Registration Fee:  <span><TbCurrencyNaira /></span> 30, 000</small>
                        </div>
                        <p>Skills will you learn</p>
                        <ul>
                            <li>HTML and HTML5</li>
                            <li>CSS and CSS3</li>
                            <li>Javascript</li>
                            <li>Git and Github</li>
                            <li>ReactJS</li>
                            <li>Tailwind CSS</li>
                        </ul>
                        <button onClick={register}>Register Here</button>
                    </div>
                </div>
                <div className="courses">
                    <img src={backend} alt="web" />
                    <div className="content">
                        <h3>Complete backend development Course (Django)</h3>
                        <div className="content_action">
                            <small>Duration: 4 Month</small>
                            <small>Registration Fee:  <span><TbCurrencyNaira /></span> 30, 000</small>
                        </div>
                        <p>Skills will you learn</p>
                        <ul>
                            <li>Python fundamentals</li>
                            <li>Django</li>
                            <li>MongoDB</li>
                            <li>Scalability</li>
                            <li>Security</li>
                        </ul>
                        <button onClick={register}>Register Here</button>
                    </div>
                </div>
                <div className="courses">
                    <img src={node} alt="web" />
                    <div className="content">
                        <h3>Complete backend development Course(Node.Js)</h3>
                        <div className="content_action">
                            <small>Duration: 4 Month</small>
                            <small>Registration Fee:  <span><TbCurrencyNaira /></span> 30, 000</small>
                        </div>
                        <p>Skills will you learn</p>
                        <ul>
                            <li>JavaScript Fundamentals</li>
                            <li>Node.js</li>
                            <li>express.js</li>
                            <li>APIs connections</li>
                            <li>Rest APIs</li>
                            <li>Aunthentication</li>
                        </ul>
                        <button onClick={register}>Register Here</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="testify" id="testify">
        <Testimonial />
        </div>
    </main>
}

export default Courses