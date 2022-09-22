import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { GetPokemonResponseI } from '../../../../../shared/interfaces/pokemon-response'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardPokemon from './CardPokemon/CardPokemon'

interface AccordionPokemonProps {
  pokemons: GetPokemonResponseI[]
}

export const AccordionPokemon = ({ pokemons }: AccordionPokemonProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  if (pokemons.length == 0) {
    return <Typography sx={{ width: '100%' }}>Add a pokemon :D</Typography>
  }

  const accordionList = pokemons.map((pokemon) => {
    return (
      <Accordion
        key={pokemon.id}
        expanded={expanded === pokemon.name + pokemon.id}
        onChange={handleChange(pokemon.name + pokemon.id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${pokemon.name}-content`}
          id={`panel-${pokemon.name}-header`}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{pokemon.name}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{pokemon.id}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardPokemon pokemon={pokemon} />
        </AccordionDetails>
      </Accordion>
    )
  })

  return <>{accordionList}</>
}
