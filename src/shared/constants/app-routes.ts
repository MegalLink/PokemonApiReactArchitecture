const BASE_ROUTE = 'https://pokeapi.co/api/v2/'

export const API_ROUTES = {
  PokemonList: (limit: number) => `${BASE_ROUTE}pokemon?limit=${limit}&offset=0`,
}
