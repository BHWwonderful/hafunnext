// hooks
import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

// reducers
import { langReducer } from './slices/langSlice'

// Root reducer를 사용하는 대신, 각 slice의 reducer를 할당한다.
const makeStore = () => configureStore({
  reducer: {
    lang: langReducer
  },
  devTools: true,
})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)