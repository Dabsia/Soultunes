import { ActionTypes } from "./ActionTypes"
import { Dispatch } from "redux"
import { appActions } from "./Reducer"
import { FetchedMusicData } from "./Reducer"

export interface RequestData{
    genre: string;
    name: string;
    email: string;
    number: string;
    message: string
}

const openModalAction = () => ({
    type: ActionTypes.OPEN_FORM
})

const closeModalAction = () => ({
    type: ActionTypes.CLOSE_FORM
})

const showMusicComponentAction = () => ({
    type: ActionTypes.SHOW_MUSIC_COMPONENT
})

const hideMusicComponentAction = () => ({
    type: ActionTypes.HIDE_MUSIC_COMPONENT
})




export const openModal = () => (dispatch:Dispatch<appActions>) => {
    dispatch(openModalAction())
}

export const closeModal = () => (dispatch:Dispatch<appActions>) => {
    dispatch(closeModalAction())
}

export const showMusicComponent = () => (dispatch: Dispatch<appActions>) => {
    dispatch(showMusicComponentAction())
}
export const hideMusicComponent = () => (dispatch: Dispatch<appActions>) => {
    dispatch(hideMusicComponentAction())
    
}

export const searchText = (text: string) => (dispatch:Dispatch<appActions>)  => {
    dispatch(
        {
            type: ActionTypes.SEARCH_TEXT,
            payload: text
        }
    )
}

export const getSingleMusic = (payload: FetchedMusicData) => (dispatch: Dispatch<appActions>) => {
    dispatch(
        {
            type: ActionTypes.GET_SINGLE_MUSIC,
            payload: payload
        }
    )
}



const fetchMusicStart = () => ({
  type: ActionTypes.FETCH_ALL_SONGS_START,
});

const fetchMusicSuccess = (payload: FetchedMusicData) => ({
    type: ActionTypes.FETCH_ALL_SONGS_SUCCESS,
    payload: payload
})

const fetchMusicFailed = (message: string) => ({
    type: ActionTypes.FETCH_ALL_SONGS_FAILED,
    payload: message
})

const postMusicRequestStart = () => ({
    type: ActionTypes.POST_MUSIC_REQUEST_START
})

const postMusicRequestSuccess = (message: string) => ({
    type: ActionTypes.POST_MUSIC_REQUEST_SUCCESS,
    payload: message
})

const postMusicRequestFailed = (message: string) => ({
    type: ActionTypes.POST_MUSIC_REQUEST_FAILED,
    payload: message
})

export const postMusicRequest = (messageRequest: RequestData) => async (dispatch: Dispatch<appActions>) => {
    try {
        dispatch(postMusicRequestStart())
        const res = await fetch('https://soultunes-774c9-default-rtdb.firebaseio.com/request.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageRequest)
        })
        
        const data = await res.json()
        console.log(data)
        dispatch(postMusicRequestSuccess('Your request has been sent successfully'))
    }
    catch (err) {
        console.log(err)
        dispatch(postMusicRequestFailed('Please check your internet connection'))
    }
}


export const fetchMusic = () => async(dispatch: Dispatch<appActions>) => {
    try {
        
        dispatch(fetchMusicStart())
        const res = await fetch('https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm', {
            method: 'GET'
        })
        const data = await res.json()
        dispatch(fetchMusicSuccess(data.tracks))
    }
    catch(err) {
        console.log(err)
        dispatch(fetchMusicFailed('Please check your internet Connection'))
        dispatch(postMusicRequestFailed(''))
    }
    
}

