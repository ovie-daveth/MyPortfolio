import React from 'react'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Service from '../components/services/Service'
import Portfolio from '../components/projects/Portfolio'
import Testimonial from '../components/testimonials/Testimonial'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'

const Home = () => {
    return (
        <>
            <Header />
             <About />
            <Experience />
            <Service />
            <Portfolio />
            <Testimonial />
            <Contact />
        </>
    )
}

export default Home