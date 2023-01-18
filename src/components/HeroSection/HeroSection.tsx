import React from 'react'
import FancyButton from '../FancyButton/FancyButton'
import './HeroSection.css'

const heroImage = require("../../Assets/HeroImage.png");

const HeroSection: React.FC = (): JSX.Element => {
  return (
    <div className='heroSection'>
        <div className='leftContainer'>
              <h1 className='sectionHeader'>There’s a soundtrack for every event!</h1>
              <p className='sectionDesc'>Easily get top, quality soundtracks or custom-made songs for your next campaigns, adverts or branding.</p>
              <div className='btnContainers'>
                    <FancyButton text='Make a request' color='#F45B49' textColor = '#fff' width='12.0625rem' height='3.25rem' borderColor = '#000' />
                    <button className='learnMoreBtn'>Learn More</button>
              </div>
        </div>
        <div className='rightContainer'>
            <img className='illustrationImage' src={heroImage} alt = 'hero' />
        </div>
    </div>
  )
}

export default HeroSection
