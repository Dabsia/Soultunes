import React from 'react'
import FancyButton from '../FancyButton/FancyButton'
import './QualitySoundtrack.css'

const QualitySoundtrack:React.FC = (): JSX.Element => {
  return (
    <div className='qualitySoundTrack'>
          <h1 className='qualitySoundText'>Getting quality soundtrack starts here</h1>
          <FancyButton color='#fff' textColor='#F45B49' width='14.475rem' height='3.9rem' text = 'Make a request' borderColor = '#fff' />
    </div>
  )
}

export default QualitySoundtrack
