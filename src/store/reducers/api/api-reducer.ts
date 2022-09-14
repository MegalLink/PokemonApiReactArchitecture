import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PokemonListResponse } from '../../../shared/interfaces/pokemon-list-response'
import { API_INIT_STATE } from '../../../shared/constants/api-initial-state'
import { getPokemonList } from './thunks/pokemon-thunks'
import { ApiState } from '../../../shared/interfaces/reducers/api-state'

export const apiSlice = createSlice({
  name: 'ApiState',
  initialState:API_INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPokemonList.fulfilled,
      (state: ApiState, { payload }: PayloadAction<PokemonListResponse>) => {
        state.pokemonList = payload
      },
    )
  },
})

export default apiSlice.reducer
