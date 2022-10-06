import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {BsAward} from 'react-icons/bs'
import {RiUserStarLine} from 'react-icons/ri'
import {HiOutlineDocumentReport} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Im a Developer</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <HiOutlineDocumentReport className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>

            <article className='about__card'>
              <RiUserStarLine className='about__icon' />
              <h5>Company</h5>
              <small>LeetCode/Educative.io/Confiz</small>
            </article>
          </div>

          <p>
          Seeking a Software Developer position in a fast-growing organization to utilize expertise in software development and testing, as well as deployment and support. Coming with well-honed skills in computer science in addition to excellent communication skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Reach Me</a>
        </div>
      </div>
    </section>
  )
}

export default About