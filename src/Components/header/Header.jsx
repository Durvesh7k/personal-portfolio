import React from 'react'
import './header.css'
import Cta from './Cta'
import Headersocial from './Headersocial'
import ME from '../../assets/avt.png'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Durvesh Chopade</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta/>
        <Headersocial/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    
    </header>
  )
}

export default header