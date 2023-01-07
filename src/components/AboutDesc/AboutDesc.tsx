import React from 'react'
import './AboutDesc.css'

const AboutUs = require("../../Assets/AboutUs.png");

const AboutDesc = () => {
  return (
      <div className='AboutDesc'>
          <div>
            <h1 className='AboutDesc__header' >How we started</h1>
            <p className='AboutDesc__text'>Easily get top, quality soundtracks or custom-made songs for your next campaigns, adverts or branding. Easily get top, quality soundtracks or custom-made songs for your next campaigns, adverts or branding.</p>
          </div>
          <div className='aboutUsBox'>
              <div>
                  <img src = {AboutUs} alt = 'About us' />
              </div>
              <div className='aboutUsBox-Right'>
                  <h1 className='AboutDesc__header' >Our Vision and mission</h1>
                  <p className='AboutDesc__text'>Easily get top, quality soundtracks or custom-made songs for your next campaigns, adverts or branding. Easily get top, quality soundtracks or custom-made songs for your next campaigns, adverts or branding.</p>
              </div>
          </div>
    </div>
  )
}

export default AboutDesc
