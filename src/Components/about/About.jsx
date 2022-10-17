import React from 'react'
import './about.css'
import ME from '../../assets/new.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {ImFolderOpen} from 'react-icons/im'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">


            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Beginner</small>
            </article>


            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>clients</small>
            </article>


            <article className='about__card'>
              <ImFolderOpen className='about__icon'/>
              <h5>Projets</h5>
              <small>10+ projetcs</small>
            </article>
          </div>
          <div className='about__bio'>
          <p>
              Hi I am Durvesh Chopade. I'm beginner in the field of UI/UX design. In a nutshell, I create this website that help me to introduce myself to others. The main languages in my tech stack are JavaScript, React, and of course HTML/CSS. I’m a lifelong learner (currently taking a course on building AI chatbots with Python!) and love to make things out of scratch.          
          </p>
          </div>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>


      </div>
    </section>
  )
}

export default about