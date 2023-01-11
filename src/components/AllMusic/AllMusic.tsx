import React, { useEffect} from 'react'
import { useAppDispatch } from '../../Redux/Store'
import {useSelector} from 'react-redux'
import { State } from '../../Redux/Store'
import { fetchMusic } from '../../Redux/Actions'
import MusicCard from '../MusicCard/MusicCard'
import { FetchedMusicData } from '../../Redux/Reducer'
import './AllMusic.css'

const AllMusic: React.FC = () => {

    const {tracks} = useSelector((state: State) => state.data)

    const searchValue = useSelector((state: State) => state.data.searchValue)

    const isLoading = useSelector((state: State) => state.data.isLoading)

    console.log(searchValue)

    console.log(tracks)

    const filteredTracks = tracks.filter(track => {
    return track.name.toLowerCase().includes(searchValue.toLowerCase())
  })
    

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMusic())
    }, [dispatch])


    return (
        <div className='musicCardList'>
            {
                isLoading ? <p>Loading...</p> :
                filteredTracks.map((track:FetchedMusicData )=> {
                    return (
                        <MusicCard key={track.id} id ={track.id} name = {track.name} artistName = {track.artistName} previewURL = {track.previewURL} />
                    )
                })
            }
        </div>
    )
}

export default AllMusic