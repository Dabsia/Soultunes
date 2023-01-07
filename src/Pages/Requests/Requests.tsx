import React from 'react'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import QualitySoundtrack from '../../components/QualitySoundtrack/QualitySoundtrack'
import RequestHeroSection from '../../components/RequestsHeroSection/RequestHeroSection'


const Requests = () => {
  return (
    <div>
        <div className='homeContainer'>    
            <Header />
            <RequestHeroSection />
        </div>
        <QualitySoundtrack />
        <Footer />
    </div>
  )
}

export default Requests
