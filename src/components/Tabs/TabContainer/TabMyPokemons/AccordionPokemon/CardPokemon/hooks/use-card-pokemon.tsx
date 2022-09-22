import { useNavigate } from 'react-router-dom'
import { GetPokemonResponseI } from '../../../../../../../shared/interfaces/pokemon-response'
import { useAppDispatch } from '../../../../../../../store/hooks'

interface UseCardPokemon {
  handleUpdate: (pokemonName: string) => void
  handleDelete: () => void
}

export const useCardPokemon = (pokemon: GetPokemonResponseI): UseCardPokemon => {
  // const navigate = useNavigate()
  // const dispatch = useAppDispatch()
  const handleUpdate = (pokemonName: string) => {
    //  navigate(APP_ROUTE.UPDATE_POKEMON_NAVIGATE(pokemonName));
    console.log(pokemonName)
  }
  const handleDelete = () => {
    //  dispatch(deletePokemon(pokemon));
    console.log(pokemon)
  }

  return {
    handleDelete,
    handleUpdate,
  }
}
