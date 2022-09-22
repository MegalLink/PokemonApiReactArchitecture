import { LOCAL_STORAGE_KEYS } from '../../shared/enums/local-storage-keys-enum'
import { GetPokemonResponseI } from '../../shared/interfaces/pokemon-response'

export const getLocalPokemons = (): GetPokemonResponseI[] => {
  const emptyListring = '[]'
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.PokemonInfo) ?? emptyListring)
}

export const setLocalPokemon = (newValue: GetPokemonResponseI) => {
  const currentValues: GetPokemonResponseI[] = getLocalPokemons()
  const exist = currentValues.find((value) => JSON.stringify(value) == JSON.stringify(newValue))

  if (!exist) {
    currentValues.push(newValue)
  }

  localStorage.setItem(LOCAL_STORAGE_KEYS.PokemonInfo, JSON.stringify(currentValues))
}

export const deleteLocalPokemon = (deleteValue: GetPokemonResponseI) => {
  const currentValues: GetPokemonResponseI[] = getLocalPokemons()
  const filteredValues = currentValues.filter(
    (value) => JSON.stringify(value) !== JSON.stringify(deleteValue),
  )

  localStorage.setItem(LOCAL_STORAGE_KEYS.PokemonInfo, JSON.stringify(filteredValues))
}
