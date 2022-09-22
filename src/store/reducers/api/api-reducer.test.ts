import apiReducer from './api-reducer'
import { AnyAction } from '@reduxjs/toolkit'
import { API_INIT_STATE } from '../../../shared/constants/api-initial-state'
import { PokemonListResponseI } from '../../../shared/interfaces/pokemon-list-response'
import { getPokemonList } from './thunks/pokemon-thunks'

describe('test apiReducer', () => {
  it('should return the api initial state', () => {
    expect(apiReducer(undefined, {} as AnyAction)).toEqual(API_INIT_STATE)
  })

  it('should set nodeInfo when getNodeInfoResponse is fulFilled', () => {
    const pokemonListResponse: PokemonListResponseI = {
      count: 1,
      next: 'test',
      results: [],
    }
    const action = {
      payload: pokemonListResponse,
      type: getPokemonList.fulfilled.type,
    }

    expect(apiReducer(API_INIT_STATE, action)).toEqual({
      ...API_INIT_STATE,
      pokemonList: pokemonListResponse,
    })
  })
})
