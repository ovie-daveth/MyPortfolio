import React from 'react'
import Cta from './Cta'
import me from '../../assets/me.png'
import './header.scss'
import HeaderSocials from './HeaderSocials'
import {BsArrowRight} from 'react-icons/bs'


const Header = () => {
  return (
    <section id="home" className='.section'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Omokefe David</h1>
        <h5 className='text-light'>Full Stack developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down <span><BsArrowRight /></span></a>

      </div>
    </section>
  )
}

export default Header
