export interface PokemonInfoI {
  name: string
  url: string
}

export interface PokemonListResponseI {
  count: number
  next: string
  previous?: string
  results: PokemonInfoI[]
}
