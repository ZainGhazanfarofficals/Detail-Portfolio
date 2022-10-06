import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMarkEmailUnread className='contact_option-icon' />
            <h4>Email</h4>
            <h5>zainghazanfar169205@outlook.com</h5>
            <a href="mailto:zainghazanfar169205@outlook.com" target="_blank"> Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+923344491675</h5>
            <a href="https://wa.me/%2B923344491675?text=Hi%2C%20I%20am%20Zain%20Ghazanfar.%20How%20can%20I%20help%20you%3F%20Looking%20forward%20to%20hearing%20from%20you.%20Thanks%20for%20your%20time%20and%20consideration." target="_blank"> Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact