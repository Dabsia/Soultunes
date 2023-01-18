import { combineReducers } from 'redux'
import reducer from './Reducer'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    blackList: ['data']

}

const rootReducer = combineReducers({
    data: reducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer);


export default rootReducer