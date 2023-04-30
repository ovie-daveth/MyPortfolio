import React, { useEffect } from 'react'

const CourseHeader = () => {
    useEffect(()=> {
        const header = document.getElementById('header')
        window.addEventListener('scroll', ()=> {
            if(window.pageYOffset >= 50){
                header.classList.add('sticky')
            } else{
                header.classList.remove('sticky')
            }
        })
    }, [])
  return (
    <div className='header' id='header'>
        <div className='header__title'>
            <h1>Daveton <span>Academy</span></h1>
            <a href="#courses">Our Program</a>
            <a href="#testify">Testimonials</a>
            <a href="#faq">FAQs</a>
        </div>
        <div className='contact'>
            <button>Contact Me</button>
        </div>
    </div>
  )
}

export default CourseHeader
