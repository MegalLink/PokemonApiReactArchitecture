import { createSlice, Slice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PokemonListResponseI } from '../../../shared/interfaces/pokemon-list-response'
import { API_INIT_STATE } from '../../../shared/constants/api-initial-state'
import { getPokemonList, getPokemonByName, getPokemonByUrl } from './thunks/pokemon-thunks'
import { ApiStateI } from '../../../shared/interfaces/reducers/api-state'
import { getLocalPokemons, setLocalPokemon } from '../../../utils/local-storage/pokemon'
import SnackbarUtils from '../../../utils/snackbar/snackbar-util-configurator'

export const apiSlice = createSlice({
  name: 'ApiState',
  initialState: API_INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getPokemonList.fulfilled,
        (state: ApiStateI, { payload }: PayloadAction<PokemonListResponseI>) => {
          state.pokemonList = payload
          SnackbarUtils.success('Success 🎉')
        },
      )
      .addCase(getPokemonByName.fulfilled, (state, action) => {
        setLocalPokemon(action.payload)
        state.savedPokemons = getLocalPokemons()
      })
      .addCase(getPokemonByUrl.fulfilled, (state, action) => {
        state.pokemonInformation = action.payload
      })
  },
})

export default apiSlice.reducer
