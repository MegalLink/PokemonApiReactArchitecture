import React, { useEffect } from "react";
import { Button, Grid, Typography, Box, CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLoading } from "../../store/reducers/app/app-reducer";
import { getPokemonList } from "../../store/reducers/api/thunks/pokemon-thunks";
import { isEmpty } from "lodash";

export const MainPokemon = () => {
  const { isLoading } = useAppSelector((store) => store.app);
  const { pokemonList } = useAppSelector((store) => store.api);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid color="primary">
      <Typography>Hellow world</Typography>
      <Button
        onClick={() => {
          dispatch(setLoading(true));
        }}
      >
        Show loading
      </Button>
      <Button
        onClick={() => {
          dispatch(setLoading(false));
        }}
      >
        Dismiss loading
      </Button>
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {!isEmpty(pokemonList.results) &&
        pokemonList.results.map((pokemon) => (
          <Typography key={pokemon.name}>{pokemon.name}</Typography>
        ))}
    </Grid>
  );
};
