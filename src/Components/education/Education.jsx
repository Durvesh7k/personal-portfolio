import React from 'react'
import './Education.css'
import {FaSchool} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'


const education = () => {
  return (
    <section id='education'>
      <h5>where I Learn</h5>
      <h2>Education</h2>
      <div className="container education__container">
        <div className="education__content">


          <article className='education__details'>
          <FaSchool className='education__content-icon'/>
          <div>
             <h3>Nutan Vidyalaya Malkapur</h3>
             <h5>Upto 10th class</h5>
          </div>
          </article>
        


      
        <article className='education__details'>
          <MdSchool className='education__content-icon'/>
          <div>
             <h3>Government Polytechnic Amravati</h3>
             <h5>Diploma in Mechanical Engineering</h5>
          </div>
        </article>
      


        
        <article className='education__details'>
          <MdSchool className='education__content-icon'/>
          <div>
             <h3>XYZ College of Engineering Pune</h3>
             <h5>B.tech in abc Engineering</h5>
          </div>
        </article>


      </div>
    </div>

    </section>
  )
}

export default education