import { createStore, applyMiddleware } from 'redux'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { AnyAction } from 'redux';
import { persistStore } from "redux-persist";
import { persistedReducer } from './RootReducer';
import { ThunkDispatch } from 'redux-thunk';
import thunk from 'redux-thunk'
import rootReducer from './RootReducer';


export const store = createStore(
    persistedReducer, applyMiddleware(thunk)
)

export type State = ReturnType<typeof rootReducer>

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<State>>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const persistor = persistStore(store);