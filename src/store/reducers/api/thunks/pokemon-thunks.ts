import { createAsyncThunk } from '@reduxjs/toolkit'
import { PokemonListResponse } from '../../../../shared/interfaces/pokemon-list-response'
import axios from '../../../../utils/axios-util'
import { API_ROUTES } from '../../../../shared/constants/app-routes'

export const getPokemonList = createAsyncThunk<PokemonListResponse>(
  'pokemon/getPokemonList',
  async () => {
    const numberOfItems = 10
    const response = await axios.get(API_ROUTES.PokemonList(numberOfItems))

    return response.data
  },
)
