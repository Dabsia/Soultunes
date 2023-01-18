import React from 'react'

import FancyButton from '../FancyButton/FancyButton'

const Group = require("../../Assets/Group.png");

const SoundtrackHeroSection: React.FC = (): JSX.Element => {

  return (
    <div className='heroSection'>
        <div className='leftContainer'>
              <h1 className='sectionHeader'>Turn up the sound!</h1>
              <p className='sectionDesc'>Easily get top, quality soundtracks or custom-made songs for your next campaigns, adverts or branding.</p>
              <div className='btnContainers'>
                    <FancyButton text='Make a request' color='#F45B49' textColor = '#fff' width='12.0625rem' height='3.25rem' borderColor = '#000' />
              </div>
        </div>
        <div className='rightContainer'>
            <img src={Group} alt = 'hero' className='illustrationImage' />
        </div>
    </div>
  )
}

export default SoundtrackHeroSection