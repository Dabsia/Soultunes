import React from 'react'
import Header from '../Header/Header'
import { useAppDispatch } from '../../Redux/Store'
import { hideMusicComponent } from '../../Redux/Actions'
import { useAppSelector } from '../../Redux/Store'
import { State } from '../../Redux/Store'

import './MusicSection.css'

const MusicSection:React.FC= () => {

    // const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const activeMusic = useAppSelector((state: State) => state.data.activeMusic)

    const {previewURL, name, artistName} = activeMusic

    const dispatch = useAppDispatch()

    const audio = new Audio(previewURL);

    const closeMusicComp = () => {
        dispatch(hideMusicComponent())
        pause()
    }
    const play = () => {
        audio.play();
    }

    const pause = () => {
    audio.pause()
  }

  return (
    <div>
          <Header />
          <p className='backButton' onClick={closeMusicComp}><i className="ri-arrow-left-s-line backArrow"></i>Back</p>
          <div className = 'musicSection'>
              <div className='musicBox'>
                  
              </div>
              <div className='rightMusicBox'>
                  <div className='musicDetails'>
                      <div className='music'>
                          <h1 className='MusicName'>{name}</h1>
                          <p className='artistName'>{artistName}</p>
                          {/* <small className='timesPlayed'>Used over 2k times</small> */}
                      </div>
                      <div>
                          <div className='songIcons'>
                <div className='playBox'>
                    <i onClick={play} className="ri-play-circle-fill playIcon"></i>
           
                </div>
                <div className='playBox'>
                  <i onClick={pause} className="ri-pause-circle-fill playIcon"></i>
                </div>
                  <div className='downloadBox'>
                        <a className='download' href= {previewURL}>
                            <i className="ri-download-2-fill downloadIcon"></i>
                        </a>
                  </div>
              </div>
                      </div>
                  </div>
                  <div>
                      <h3 className='footerAddress trackDesc'>Soundtrack Description </h3>
                      <p className='footerText trackText'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default MusicSection
