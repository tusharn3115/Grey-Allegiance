import React from 'react'
import UtilityBar from './components/utilityBar'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Footer />
    </>
  )
}

export default App