import React from 'react'
import './Brands.css'

const Face = require("../../Assets/Face.png");
const Star = require("../../Assets/Star.png");
const brands = require("../../Assets/brands.png");

const Brands = () => {
  return (
    <div className='brands'>
        <div className='brands__images'>
              <img src={Face} alt='face' className='sparkles' />
              <h2 className='trustedBrands'>Trusted by top brands</h2>
              <img src = {Star} alt = 'star' className='sparkles' />
          </div>
          <div className='brandListContainer'>  
            <img className='brandList' src={brands} alt = 'brands' />
      </div>
      <div className = 'brandTextContainer'>
          <p className='brandText'>All over the world, top agencies, brands, campaigns find Soultunes essential for their work process. Soultunes helps businesses engage a new audience and increase brand recognition</p>
      </div>
    </div>
  )
}

export default Brands
