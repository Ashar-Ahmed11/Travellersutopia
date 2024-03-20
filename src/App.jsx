import React from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Carousal from './components/carousal'
import Welcome from './components/welcome'
import Featured from './components/featured'
import Holiday from './components/holiday'
import Footer from './components/footer'
import Consultation from './components/consultation'
import UnderConstruction from './components/underConstruction.jsx'
import Destionations from './components/destination.jsx'
export default function App() {
  return (
    <div>
      <Navbar />
      
        <Carousal />


        <Destionations/>
     
      {/* <div data-aos="fade-up"
        data-aos-duration="1000">
        <Welcome />
      </div>
      <Featured />

      <Holiday />
      <div className='mb-4'>
        <Consultation />
      </div> */}
      <Footer />
      {/* <UnderConstruction/> */}

    </div>
  )
}