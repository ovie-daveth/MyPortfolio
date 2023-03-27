import React from 'react'
import img1 from '../../assets/avatar1.jpg'
import img2 from '../../assets/avatar2.jpg'
import img3 from '../../assets/avatar3.jpg'
import img4 from '../../assets/avatar4.jpg'

import './testy.scss'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => { 

  const test = [
    {
      id: 1,
      name: "Omimi Joy",
      testimony: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam commodi totam sit fuga suscipit, inventore nam rem asperiores a, fugit beatae odit sapiente. Non possimus quos laudantium cum accusantium.',
      img: img1
    },
    {
      id: 2,
      name: "Rufus Moses",
      testimony: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam commodi totam sit fuga suscipit, inventore nam rem asperiores a, fugit beatae odit sapiente. Non possimus quos laudantium cum accusantium.',
      img: img2
    },
    {
      id: 3,
      name: "Omobode Precious",
      testimony: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam commodi totam sit fuga suscipit, inventore nam rem asperiores a, fugit beatae odit sapiente. Non possimus quos laudantium cum accusantium.',
      img: img3
    },
    {
      id: 4,
      name: "Maryam Griezeman",
      testimony: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam commodi totam sit fuga suscipit, inventore nam rem asperiores a, fugit beatae odit sapiente. Non possimus quos laudantium cum accusantium.',
      img: img4
    },
  ]
  return (
    <section id="testimonial">
      <h5>And yes, I have</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testi__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          test.map(item => (
            <SwiperSlide className="testi__container-item" key={item.id}>
                <img src={item.img} alt="avatar" />
                <h3>{item.name}</h3>
                <p>{item.testimony}</p>
            </SwiperSlide>
          ))
         
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
