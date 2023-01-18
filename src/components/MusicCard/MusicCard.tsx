import React from 'react'
import './MusicCard.css'
import { FetchedMusicData } from '../../Redux/Reducer'
import { useAppDispatch } from '../../Redux/Store';
import { getSingleMusic, showMusicComponent } from '../../Redux/Actions';



const MusicCard:React.FC<FetchedMusicData> = ({name, previewURL, artistName, id}) => {

  const dispatch = useAppDispatch()

  const musicInfo = {
    name, previewURL, artistName, id
  }

  const fetSingleMusic = () => {
    dispatch(getSingleMusic(musicInfo))
    dispatch(showMusicComponent())
  }
  

  return (
    <div className='musicCard'>
        <div className='ImageCard'>

        </div>
        <div className='songInfoBox'>
              <div className='SongDetails'>
                  <p className='songName'>{name}</p>
                  <p className='songArtists'>{artistName}</p>
                  {/* <p className='noOfTimesPlayed'>Played 3.5k</p> */}
              </div>  
              <div className='songIcons'>
                <div className='playBox'>
                    <i onClick={fetSingleMusic}
                  className="ri-play-circle-fill playIcon"></i>
           
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
