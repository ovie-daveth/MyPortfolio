import React from 'react'
import cv from '../../assets/cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
      <a className='btn ' href={cv} download>Downlaod CV</a>
      <a className='btn btn-primary' href="#contact">Let's talk</a>
    </div>
  )
}

export default Cta
