import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SearchBox from '../../components/SearchBox/SearchBox'
import QualitySoundtrack from '../../components/QualitySoundtrack/QualitySoundtrack'
import SoundtrackHeroSection from '../../components/SoundtrackHeroSection/SoundtrackHeroSection'
import AllMusic from '../../components/AllMusic/AllMusic'
import { useAppSelector } from '../../Redux/Store'
import { State } from '../../Redux/Store'
import MusicSection from '../../components/MusicSection/MusicSection'

const Soundtracks:React.FC = ():JSX.Element => {

  const showMusicComp = useAppSelector((state:State)=> state.data.showMusicComp)

  return (
    <div>
      <div>
        
        {showMusicComp ? <MusicSection /> : 
        <>
            <div className='homeContainer'>  
          <Header />    
              <SoundtrackHeroSection />
          </div>
          <SearchBox />
          <AllMusic />
        </>
      }
      </div>
      <QualitySoundtrack />
      <Footer />
    </div>
  )
}

export default Soundtracks
