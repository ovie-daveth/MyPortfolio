import React from 'react'
import {BsTwitter, BsFacebook, BsYoutube} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'

import './Footer.scss'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer id="footer">
    <div className="container footer">
      <div className="logo">
          <h1>Daveton</h1>
        </div>
        <div className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#service">Services</a></li>
          </ul>
        </div>
        <div className="links">
        <ul>
            <li><Link to='/courses'><a href="#">Learn programming</a></Link></li>
            <li><a href="#">Collabo</a></li>
            <li><a href="#">AfriDev ({'</>'} Blog)</a></li>
          </ul>
        </div>
    </div>
    <div className="socials">
      <a href="https://www.facebook.com"><BsFacebook /></a>
      <a href="https://www.twitter.com/"><BsTwitter /></a>
      <a href="https:/www.youtube.com"><BsYoutube /></a>
      <a href="https://wwww.instagram.com"><RiInstagramFill /></a>
    </div>
    <div className="copyright">
        Created by &copy Omokefe Ovie, alright Reserved 
    </div>
    </footer>
  )
}

export default Footer
