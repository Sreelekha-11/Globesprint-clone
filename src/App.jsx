import React from 'react'
import About from './Components/About'
import Hero from './Components/Hero'
import Services from './Components/Services'
import CtaOne from './Components/CtaOne'
import Packages from './Components/Packages'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Services />
      <CtaOne />
      <Packages />
      <Features />
      <Footer />
    </div>
  )
}

export default App