import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__Logo'>DSC</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.facebook.com/tyson.ty.376" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/its_dschopade/" target='_blank'><AiOutlineInstagram/></a>
        <a href="https://twitter.com/ChopadeDurvesh" target='_blank'><BsTwitter/></a>



      </div>

      <div className="footer__copyright">
        <small>&copy; Durvesh Chopade. All rights reserved</small>

      </div>
      
      
      
    </footer>
  )
}

export default footer