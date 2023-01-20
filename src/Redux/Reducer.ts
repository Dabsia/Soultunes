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
    isLoading: boolean;
    searchValue: string;
    showMusicComp: boolean;
    activeMusic: FetchedMusicData;
    errMsg: string;
    postMsg: string;
    hasSentRequest : boolean
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
    showMusicComp: false,
    errMsg: '',
    activeMusic: { id: '', name: '', previewURL: '', artistName: '' },
    postMsg: '',
    hasSentRequest: false
}




const reducer = (state: InitialStateType = initialState, action: appActions): InitialStateType => {
    switch (action.type) {
        case ActionTypes.OPEN_FORM:
            return {
                ...state, isModalOpen: true
            }
        case ActionTypes.CLOSE_FORM:
            return {
                ...state, isModalOpen: false, postMsg: ''
            }
        case ActionTypes.SHOW_MUSIC_COMPONENT:
            return {
                ...state, showMusicComp: true, isLoading:false
            }
        case ActionTypes.HIDE_MUSIC_COMPONENT:
            return {
                ...state, showMusicComp: false, isLoading:false
            }
        case ActionTypes.FETCH_ALL_SONGS_START: 
            return {
                ...state, isLoading: true
            }
        case ActionTypes.FETCH_ALL_SONGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tracks: action.payload as FetchedMusicData[],
                errMsg: ''
            }
        case ActionTypes.FETCH_ALL_SONGS_FAILED:
            return {
                ...state,
                activeMusic: { id: '', name: '', previewURL: '', artistName: '' },
                tracks: [],
                errMsg: action.payload as string
            }
        case ActionTypes.SEARCH_TEXT:
            return {
                ...state, searchValue: action.payload as string
            }
        case ActionTypes.GET_SINGLE_MUSIC:
            return {
                ...state, activeMusic: action.payload as FetchedMusicData
            }
        case ActionTypes.POST_MUSIC_REQUEST_START:
            return {
                ...state, isLoading: true, postMsg: ''
            }
        case ActionTypes.POST_MUSIC_REQUEST_SUCCESS:
            return {
                ...state, isLoading: false, postMsg: action.payload as string, hasSentRequest: true
            }
        case ActionTypes.POST_MUSIC_REQUEST_FAILED:
            return {
                ...state, isLoading: false, postMsg: action.payload as string, hasSentRequest: false
            }
        default:
            return state
        
    }
}

export default reducer