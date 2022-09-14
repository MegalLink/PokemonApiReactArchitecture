import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './reducers/api/api-reducer'
import appReducer from './reducers/app/app-reducer'

export const store = configureStore({
  reducer: {
    api: apiReducer,
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
