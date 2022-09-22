import { createAsyncThunk } from '@reduxjs/toolkit'
import { PokemonListResponseI } from '../../../../shared/interfaces/pokemon-list-response'
import axios from '../../../../utils/axios-util'
import { API_ROUTES } from '../../../../shared/constants/api-routes'
import { GetPokemonResponseI } from '../../../../shared/interfaces/pokemon-response'

export const getPokemonList = createAsyncThunk<PokemonListResponseI>(
  'pokemon/getPokemonList',
  async () => {
    const numberOfItems = 10
    const response = await axios.get(API_ROUTES.PokemonList(numberOfItems))

    return response.data
  },
)

export const getPokemonByUrl = createAsyncThunk<GetPokemonResponseI, string>(
  'pokemon/getPokemon',
  async (url: string) => {
    const response = await axios.get(url)
    return response.data
  },
)

export const getPokemonByName = createAsyncThunk<GetPokemonResponseI, string>(
  'pokemon/getPokemonByName',
  async (name: string) => {
    const response = await axios.get(API_ROUTES.PokemonByName(name))
    return response.data
  },
)
