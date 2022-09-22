import { PokemonListResponseI } from '../../../../shared/interfaces/pokemon-list-response'
import axios from '../../../../utils/axios-util'
import { getPokemonList } from './pokemon-thunks'
import { store } from '../../../store'

jest.mock('../../../../utils/axios-util')

describe('pokemon thunk tests', () => {
  it('should call axios.post successfully when getNodeInfo thunk is called', async () => {
    const expectedResponse: Partial<PokemonListResponseI> = {
      count: 0,
      next: 'test',
      results: [],
    }

    ;(axios.get as jest.Mock).mockResolvedValue({ expectedResponse })
    await store.dispatch(getPokemonList())
    expect(axios.get).toBeCalled()
  })
})
