import React from 'react'
import UtilityBar from './components/utilityBar'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
    </>
  )
}

export default App