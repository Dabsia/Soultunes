import { ActionTypes } from "./ActionTypes"

export interface FetchedMusicData{
    id: string;
    name: string;
    artistName: string;
    previewURL: string
}


export interface appActions {
    type: string;
    payload?: string | FetchedMusicData 
}

interface InitialStateType{
    isModalOpen: boolean;
    tracks: FetchedMusicData[];
    isLoading: boolean,
    searchValue : string
}

const initialState = {
    isModalOpen: false,
    tracks: [],
    isLoading: false,
    searchValue: ''
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
        case ActionTypes.FETCH_ALL_SONGS_START: 
            return {
                ...state, isLoading: true
            }
        case ActionTypes.FETCH_ALL_SONGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tracks: action.payload as any
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