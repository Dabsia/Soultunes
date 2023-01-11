import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SearchBox from '../../components/SearchBox/SearchBox'
import QualitySoundtrack from '../../components/QualitySoundtrack/QualitySoundtrack'
import SoundtrackHeroSection from '../../components/SoundtrackHeroSection/SoundtrackHeroSection'
import AllMusic from '../../components/AllMusic/AllMusic'

const Soundtracks = () => {
  return (
    <div>
        <div className='homeContainer'>    
            <Header />
            <SoundtrackHeroSection />
      </div>
      <SearchBox />
      <AllMusic />
      <QualitySoundtrack />
      <Footer />
    </div>
  )
}

export default Soundtracks
