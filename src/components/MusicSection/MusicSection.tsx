import React from 'react'
import Header from '../Header/Header'
import { useAppDispatch } from '../../Redux/Store'
import { hideMusicComponent } from '../../Redux/Actions'

const MusicSection = () => {

    const dispatch = useAppDispatch()

    const closeMusicComp = () => {
        dispatch(hideMusicComponent())
    }

  return (
    <div>
          <Header />
          
          <p onClick={closeMusicComp}>Back</p>
    </div>
  )
}

export default MusicSection
