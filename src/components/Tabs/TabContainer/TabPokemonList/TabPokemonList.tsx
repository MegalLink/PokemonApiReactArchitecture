import React, { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import {
  getPokemonByName,
  getPokemonList,
} from '../../../../store/reducers/api/thunks/pokemon-thunks'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import { PokemonInfoI } from '../../../../shared/interfaces/pokemon-list-response'

export const TabListPokemon: React.FC = () => {
  const dispatch = useAppDispatch()
  const { pokemonList } = useAppSelector((store) => {
    return store.api
  })

  useEffect(() => {
    dispatch(getPokemonList())
  }, [])

  if (pokemonList.results.length == 0) {
    return <div>Loading</div>
  }

  const handleClickAddIconButton = (name: string) => {
    dispatch(getPokemonByName(name))
  }

  const listItems = pokemonList.results.map((pokemon: PokemonInfoI) => (
    <ListItem key={pokemon.url}>
      <ListItemButton>
        <ListItemText>{pokemon.name}</ListItemText>
        <Stack direction='row' spacing={1}>
          <IconButton
            onClick={() => {
              handleClickAddIconButton(pokemon.name)
            }}
            color='primary'
            aria-label='add to shopping cart'
          >
            <AddIcon />
          </IconButton>
        </Stack>
      </ListItemButton>
    </ListItem>
  ))

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List>{listItems}</List>
      <Divider />
    </Box>
  )
}
