import React from 'react'
import FancyButton from '../FancyButton/FancyButton'

const Girl = require("../../Assets/Girl.png");

const RequestHeroSection: React.FC = (): JSX.Element => {
  return (
      <div className='heroSection'>
        <div className='leftContainer'>
              <h1 className='sectionHeader'>Make a soundtrack request</h1>
              <p className='sectionDesc'>Easily get top, quality soundtracks or custom-made songs for your next campaigns, adverts or branding.</p>
              <div className='btnContainers'>
                    <FancyButton text='Go to form' color='#F45B49' textColor = '#fff' width='12.0625rem' height='3.25rem' borderColor = '#000' />
              </div>
        </div>
        <div className='rightContainer'>
            <img src={Girl} alt = 'hero' />
        </div>
    </div>
  )
}

export default RequestHeroSection
