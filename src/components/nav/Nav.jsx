import React from 'react'
import {FaTachometerAlt} from 'react-icons/fa'
import {SiAboutdotme, SiExpertsexchange} from 'react-icons/si'
import {FcServices} from 'react-icons/fc'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaPeopleCarry} from 'react-icons/fa'
import {MdOutlinePermContactCalendar} from 'react-icons/md'

import './nav.scss'

const Nav = () => {
  return (
    <div className='navbar'>
    <a href="#home" className='active'><FaTachometerAlt /><span>Home</span></a>
    <a href="#about"><SiAboutdotme /><span>About</span></a>
    <a href="#experience"><SiExpertsexchange /><span>Experience</span></a>
    <a href="#service"><FcServices /><span>Services</span></a>
    <a href="#portfolio"><AiOutlineFundProjectionScreen /><span>Portfolio</span></a>
    <a href="#testimonial"><FaPeopleCarry /><span>Testimonials</span></a>
    <a href="#contact"><MdOutlinePermContactCalendar /><span>Contact</span></a>
    </div>
  )
}

export default Nav
