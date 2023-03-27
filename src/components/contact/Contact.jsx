import React from 'react'
import {MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'


import './contact.scss'
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cqu0kf2', 'template_cnc0h81', form.current, '5mk5FaTyFLmh5tHZU')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully")
      }, (error) => {
          console.log(error.text);
          toast.error("Couldn't send message, pls try again in few minutes")
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>So, what will it be?</h5>
      <h2>Let's Talk</h2>
      <div className="container contact__container">
        <div className="direct">
            <article>
                <MdEmail />
                <h3>Email</h3>
                <p>oviedavid77@gmail.com</p>
                <a href="mailto:oviedavid77@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article>
                <BsTwitter />
                <h3>Twiiter</h3>
                <p>@omokefe_ovie</p>
                <a href="https://twitter.com/messages/1071323227534831616-1493110002646667267" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article>
                <RiWhatsappFill />
                <h3>WhatsApp</h3>
            
                <a href="https://api.whatsapp.com/send?phone+2348149485675" target="_blank" rel="noreferrer">Send a message</a>
            </article>
        </div>
        <form className="direct" ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" id="name" placeholder='Your fullname' />
              <input type="email" name="email" placeholder='Your email'  />
              <textarea name="message" id="message" cols="3" rows="4" placeholder='Your Message'></textarea>
              <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
