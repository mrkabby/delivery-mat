import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Contact from './components/ContactSection'
import About from './components/AboutSection'
import Features from './components/FeaturesSection'
import ShopSection from './components/ShopSection'

const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <About />\
    <Features />
    <ShopSection />
    <Contact />
    <Footer />

    </>
  )
}

export default App