import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/experiences/Experience'
import Services from './Components/services/Services'
import Education from './Components/education/Education'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Slider from './Components/Projects/Slider'

const App = () => {
  return (
    <>
      < Header />
      < Nav />
      < About />
      < Education />
      < Experience />
      < Services />
      < Slider />
      < Contact />
      < Footer />
    </>
  )
}

export default App