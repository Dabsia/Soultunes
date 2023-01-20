import React, { useEffect} from 'react'
import { useAppDispatch } from '../../Redux/Store'
import {useSelector} from 'react-redux'
import { State } from '../../Redux/Store'
import { fetchMusic } from '../../Redux/Actions'
import MusicCard from '../MusicCard/MusicCard'
import { FetchedMusicData } from '../../Redux/Reducer'
import './AllMusic.css'
import { TailSpin } from 'react-loading-icons'

const AllMusic: React.FC = () => {

    const tracks = useSelector((state: State) => state.data.tracks)

    const searchValue = useSelector((state: State) => state.data.searchValue)
    const errMsg = useSelector((state: State) => state.data.errMsg)

    console.log(errMsg)

    const isLoading = useSelector((state: State) => state.data.isLoading)
    // const errMsg = useSelector((state: State) => state.data.errMsg)

    const filteredTracks = tracks.filter(track => {
    return track.name.toLowerCase().includes(searchValue.toLowerCase())
  })
    

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMusic())
    }, [dispatch])

    
    let response = null
    
    if (tracks.length > 0) {
        response =  <div className='musicCardList'>
                {
                    filteredTracks.map((track:FetchedMusicData )=> {
                        return (
                            <MusicCard key={track.id} id ={track.id} name = {track.name} artistName = {track.artistName} previewURL = {track.previewURL} />
                        )
                    })
                }
            </div>
    }
    else if (tracks.length === 0) {
        response = <p className='errMsg'>{errMsg}</p>
    }


    return (
        <>
            {isLoading ?<div className='loadingContainer'>
                            <TailSpin stroke="#F45B49" />
                    </div> : response }
        </>
    )
}

export default AllMusic