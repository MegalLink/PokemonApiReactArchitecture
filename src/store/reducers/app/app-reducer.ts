import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AppState {
  isLoading: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  isLoading: false,
}

export const appSlice = createSlice({
  name: 'ApiState',

  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
})

export const { setLoading } = appSlice.actions

export default appSlice.reducer
