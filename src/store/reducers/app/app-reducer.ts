import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { APP_INIT_STATE } from '../../../shared/constants/app-initial-state'
import { SnackBarI } from '../../../shared/interfaces/snackbar'

export const appSlice = createSlice({
  name: 'ApiState',
  initialState: APP_INIT_STATE,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    showSnackBar: (state, { payload }: PayloadAction<SnackBarI>) => {
      state.snackBar = payload
    },
  },
})

export const { setLoading, showSnackBar } = appSlice.actions

export default appSlice.reducer
