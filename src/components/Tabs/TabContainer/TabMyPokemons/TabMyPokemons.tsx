import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Stack } from '@mui/material'
import { useAppSelector } from '../../../../store/hooks'
import { AccordionPokemon } from './AccordionPokemon/AccordionPokemon'
import CreateIcon from '@mui/icons-material/Create'

export const TabMyPokemons = () => {
  const { savedPokemons } = useAppSelector((store) => store.api)
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Stack direction='row' spacing={2} sx={{ pb: '10px' }}>
        <Button
          sx={{ width: '100%' }}
          variant='outlined'
          onClick={() => {
            navigate('create')
          }}
          startIcon={<CreateIcon />}
        >
          Create own pokemon
        </Button>
      </Stack>
      <AccordionPokemon pokemons={savedPokemons} />
    </React.Fragment>
  )
}
