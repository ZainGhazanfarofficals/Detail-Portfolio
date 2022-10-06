import React from 'react'
import './services.css'
import {FiCheckCircle} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serices__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Experience on Adobe XD</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Experience on Figma</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Experience in HTML and HTML5</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Experience with CSS3</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Experience with GSAP Animation</p>
            </li>
     
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Work with React.js</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Work with Express.js</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Work with Firebase</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Work with Wordpress</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services