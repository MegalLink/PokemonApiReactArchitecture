import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { APP_INIT_STATE } from '../../../shared/constants/app-initial-state'

export const appSlice = createSlice({
  name: 'ApiState',
  initialState:APP_INIT_STATE,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
})

export const { setLoading } = appSlice.actions

export default appSlice.reducer
