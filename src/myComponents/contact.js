import React from 'react'
import email from '../images/email.png'
import call from '../images/call.png'
import message from '../images/message.png'
import location from '../images/location.png'
import arrow from '../images/arrow.png'

export default function ContactUs() {
  return (
    <div id='contact' className='contact container'>
      <p className='head-p'>Contact Us</p>
      <h2 className='main-h2'>Get in Touch</h2>
      <div className='contact-main'>
        <div className='cnt-info'>
          <h3>Send us a message</h3>
          <img className='msg' src={message} />
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li>
              <img src={email} />
              <p>Contact@GreatStack.dev</p>
            </li>
            <li>
              <img src={call} />
              <p>+1 123-456-7890</p>
            </li>
            <li>
              <img src={location} />
              <p>77 Massachusetts Ave, Cambridge
                MA 02139, United States</p>
            </li>
          </ul>
        </div>
        <div className='cnt-form'>
          <form>
            <label htmlFor='name'>Your name</label>
            <input placeholder='Enter your name' type='text' />
            <label htmlFor='phone'>Phone Number</label>
            <input placeholder='Enter your phone' type='phone' />
            <label htmlFor='email'>Your Email</label>
            <input placeholder='Enter your email' type='email' />
            <label htmlFor='message'>Write your messages here</label>
            <textarea placeholder='Enter your message' ></textarea>
            <div className='submit-button'>
              <a className="button2" href="#">Submit now<img className='arr-img' src={arrow} /></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
