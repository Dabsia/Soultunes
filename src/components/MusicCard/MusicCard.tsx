import React from 'react'
import './MusicCard.css'
import { FetchedMusicData } from '../../Redux/Reducer'


const MusicCard:React.FC<FetchedMusicData> = ({name, previewURL, artistName, id}) => {
  return (
    <div className='musicCard'>
        <div className='ImageCard'>

        </div>
        <div className='songInfoBox'>
              <div className='SongDetails'>
                  <p className='songName'>{name}</p>
                  <p className='songArtists'>{artistName}</p>
                  <p className='noOfTimesPlayed'>Played 3.5k</p>
              </div>  
              <div className='songIcons'>
                  <div className='playBox'>
                    <i className="ri-play-circle-fill playIcon"></i>
                  </div>
                  <div className='downloadBox'>
                        <a className='download' href={previewURL}>
                            <i className="ri-download-2-fill downloadIcon"></i>
                        </a>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default MusicCard
