import { PokemonListResponseI } from '../pokemon-list-response'
import { GetPokemonResponseI } from '../pokemon-response'
import { SnackBarI } from '../snackbar'

export interface ApiStateI {
  pokemonList: PokemonListResponseI
  savedPokemons: GetPokemonResponseI[]
  pokemonInformation: GetPokemonResponseI
}
