import { ActionTypes } from "./ActionTypes"

export interface FetchedMusicData{
    id: string;
    name: string;
    artistName: string;
    previewURL: string
}




interface InitialStateType{
    isModalOpen: boolean;
    tracks: FetchedMusicData[];
    isLoading: boolean,
    searchValue: string,
    showMusicComp : boolean
}

export interface appActions {
    type: string;
    payload?: string | FetchedMusicData[] | FetchedMusicData
}

const initialState = {
    isModalOpen: false,
    tracks: [],
    isLoading: false,
    searchValue: '',
    showMusicComp: false
}




const reducer = (state: InitialStateType = initialState, action: appActions): InitialStateType => {
    switch (action.type) {
        case ActionTypes.OPEN_FORM:
            return {
                ...state, isModalOpen: true
            }
        case ActionTypes.CLOSE_FORM:
            return {
                ...state, isModalOpen: false
            }
        case ActionTypes.SHOW_MUSIC_COMPONENT:
            return {
                ...state, showMusicComp: true
            }
        case ActionTypes.HIDE_MUSIC_COMPONENT:
            return {
                ...state, showMusicComp: false
            }
        case ActionTypes.FETCH_ALL_SONGS_START: 
            return {
                ...state, isLoading: true
            }
        case ActionTypes.FETCH_ALL_SONGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tracks: action.payload as FetchedMusicData[]
            }
        case ActionTypes.SEARCH_TEXT:
            return {
                ...state, searchValue: action.payload as string
            }
        default:
            return state
        
    }
}

export default reducer