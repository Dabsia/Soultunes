import { createStore, applyMiddleware } from 'redux'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { AnyAction } from 'redux';

import { ThunkDispatch } from 'redux-thunk';
import thunk from 'redux-thunk'
import rootReducer from './RootReducer'


export const store = createStore(
    rootReducer, {}, applyMiddleware(thunk)
)

export type State = ReturnType<typeof rootReducer>

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<State>>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;