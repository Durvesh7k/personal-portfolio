import React from 'react'
import './contact.css'
import {HiMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgfovs2', 'template_gfc726k', form.current, 'e-7KUT6J6shIV10xZ')
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <HiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dschopade7s@gmail.com</h5>
            <a href="mailto:dschopade7s@gmail.com" target="_blank">Send a Message</a>
          </article>


          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messaenger</h4>
            <h5>Durvesh S Chopade</h5>
            <a href="https://m.me//tyson.ty.376" target="_blank">Send a Message</a>
          </article>


          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>1234567689</h5>
            <a href="http://wa.me/918805364976" target="_blank">Send a Message</a>
          </article>
        </div>

        {/*End of contact options*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your mail'/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>



      </div>
    
  </section>
  )
}

export default Contact