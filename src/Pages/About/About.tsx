import React from 'react'
import AboutDesc from '../../components/AboutDesc/AboutDesc'
import AboutHeroSection from '../../components/AboutHeroSection/AboutHeroSection'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import QualitySoundtrack from '../../components/QualitySoundtrack/QualitySoundtrack'

const About: React.FC = (): JSX.Element => {
  return (
    <div>
        <div className='homeContainer'>    
            <Header />
            <AboutHeroSection />
        </div>
        <AboutDesc />  
        <QualitySoundtrack />
        <Footer />
    </div>
  )
}

export default About
