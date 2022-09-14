import { PokemonListResponse } from './../../shared/interfaces/pokemon-list-response'
import { ApiState } from '../interfaces/reducers/api-state'

export const DEFAULT_POKEMON_LIST: PokemonListResponse = {
  count: 0,
  next: '',
  results: [],
}

export const API_INIT_STATE: ApiState = {
  pokemonList: DEFAULT_POKEMON_LIST,
}

