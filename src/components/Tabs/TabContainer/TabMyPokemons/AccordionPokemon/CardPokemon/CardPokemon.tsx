import React, { useEffect } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { GetPokemonResponseI } from '../../../../../../shared/interfaces/pokemon-response'
import { useCardPokemon } from './hooks/use-card-pokemon'

interface CardPokemonProps {
  pokemon: GetPokemonResponseI
}

const styles = {
  media: { objectFit: 'contain' },
}

export default function CardPokemon({ pokemon }: CardPokemonProps) {
  const { handleDelete, handleUpdate } = useCardPokemon(pokemon)

  useEffect(() => {
    console.log('CardPokeomn', pokemon)
  }, [])

  return (
    <Card>
      <CardMedia
        sx={styles.media}
        component='img'
        height='280'
        image={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {pokemon.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => handleUpdate(pokemon.name)}>
          Modificar
        </Button>
        <Button size='small' onClick={handleDelete}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  )
}
