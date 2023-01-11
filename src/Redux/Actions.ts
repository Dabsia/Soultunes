import { ActionTypes } from "./ActionTypes"
import { Dispatch } from "redux"
import { appActions } from "./Reducer"
import { FetchedMusicData } from "./Reducer"

interface FetchMusicStartAction{
    type: ActionTypes.FETCH_ALL_SONGS_START
}

interface FetchMusicSuccessAction{
    type: ActionTypes.FETCH_ALL_SONGS_START
}

const openModalAction = () => ({
    type: ActionTypes.OPEN_FORM
})

const closeModalAction = () => ({
    type: ActionTypes.CLOSE_FORM
})

export const openModal = () => (dispatch:Dispatch<appActions>) => {
    dispatch({
    type: ActionTypes.OPEN_FORM
})
}

export const closeModal = () => (dispatch:Dispatch<appActions>) => {
    dispatch({
        type: ActionTypes.CLOSE_FORM
    })
}


const fetchMusicStart = () => ({
  type: ActionTypes.FETCH_ALL_SONGS_START,
});

const fetchMusicSuccess = (payload: FetchedMusicData) => ({
    type: ActionTypes.FETCH_ALL_SONGS_SUCCESS,
    payload: payload
})

export const searchText = (text: string) => (dispatch:Dispatch<appActions>)  => {
    dispatch(
        {
            type: ActionTypes.SEARCH_TEXT,
            payload: text
        }
    )
}

// const fetchMusicFailed = (message: string) => ({
//     type: ActionTypes.FETCH_ALL_SONGS_FAILED,
//     payload: message
// })

export const fetchMusic = () => (dispatch: Dispatch<appActions>) => {
    dispatch(fetchMusicStart())
    fetch('https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm')
    .then(res => res.json())
        .then(data => {
        dispatch(fetchMusicSuccess(data.tracks))
        })
    .catch(e => console.log(e))
}

