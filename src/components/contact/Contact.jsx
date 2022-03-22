import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_et0ju8s', 'template_yiu270k', form.current, 'AwiXWH4nzGdD_hkU_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>nggihming123@gmail.com</h5>
            <a href="mailto:nggihming123@gmail.com" target='_blank'>Email a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerFill className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Gih Ming</h5>
            <a href="https://m.me/gihming" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+6010-5159602</h5>
            <a href="https://api.whatsapp.com/send?phone=+60105159602" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact