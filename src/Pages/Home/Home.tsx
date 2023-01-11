import React from 'react'
import Brands from '../../components/Brands/Brands'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import QualitySoundtrack from '../../components/QualitySoundtrack/QualitySoundtrack'

import './Home.css'

const Home: React.FC = (): JSX.Element => {
  return (
      <div>
      
          <div className='homeContainer'>    
            <Header />
            <HeroSection />
          </div>
      <Brands />
      
          <QualitySoundtrack />
      <Footer />
    </div>
  )
}

export default Home
