import React from 'react'
import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/omokefe-ovie/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/ovie-daveth" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://twitter.com/ovie_omokefe" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials
