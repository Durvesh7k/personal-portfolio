import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Langauges</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C</h4>
                <small className='text_light'>Intermediate</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C++</h4>
                <small className='text_light'>Intermediate</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text_light'>Intermediate</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className='text_light'>Beginner</small>

              </div>
            </article>



          </div>


        </div>
        <div className="experience__Backend">
          <h3>Web Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text_light'>Intermediate</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text_light'>Beginner</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text_light'>Beginner</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className='text_light'>Beginner</small>

              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience