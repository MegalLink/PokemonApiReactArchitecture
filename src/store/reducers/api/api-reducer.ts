import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PokemonListResponse } from '../../../shared/interfaces/pokemon-list-response'
import { DEFAULT_POKEMON_LIST } from './api-initial-state'
import { getPokemonList } from './thunks/pokemon-thunks'

interface ApiState {
  pokemonList: PokemonListResponse
}

const initialState: ApiState = {
    pokemonList:DEFAULT_POKEMON_LIST,
}

export const apiSlice = createSlice({
  name: 'ApiState',

  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.fulfilled, (state: ApiState, {payload}: PayloadAction<PokemonListResponse>) => {
        state.pokemonList = payload;
      })
  },
})

export default apiSlice.reducer