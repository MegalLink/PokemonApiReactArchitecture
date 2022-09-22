import { PokemonListResponseI } from './../../shared/interfaces/pokemon-list-response'
import { ApiStateI } from '../interfaces/reducers/api-state'
import { GetPokemonResponseI } from '../interfaces/pokemon-response'
import { getLocalPokemons } from '../../utils/local-storage/pokemon'
import { SnackBarI } from '../interfaces/snackbar'

export const DEFAULT_POKEMON_LIST: PokemonListResponseI = {
  count: 0,
  next: '',
  results: [],
}

export const DEFAULT_POKEMON: GetPokemonResponseI = {
  height: 0,
  id: 0,
  name: '',
  weight: 0,
  sprites: { other: { dream_world: { front_default: '' } } },
  stats: [],
  types: [],
}

export const DEFAULT_SNACKBAR: SnackBarI = {
  show: false,
  message: '',
}

export const DEFAULT_SAVED_POKEMONS = getLocalPokemons()

export const API_INIT_STATE: ApiStateI = {
  pokemonList: DEFAULT_POKEMON_LIST,
  savedPokemons: DEFAULT_SAVED_POKEMONS,
  pokemonInformation: DEFAULT_POKEMON,
}
