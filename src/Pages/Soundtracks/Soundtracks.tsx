import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import QualitySoundtrack from '../../components/QualitySoundtrack/QualitySoundtrack'
import SoundtrackHeroSection from '../../components/SoundtrackHeroSection/SoundtrackHeroSection'

const Soundtracks = () => {
  return (
    <div>
        <div className='homeContainer'>    
            <Header />
            <SoundtrackHeroSection />
        </div>
        <QualitySoundtrack />
        <Footer />
    </div>
  )
}

export default Soundtracks
