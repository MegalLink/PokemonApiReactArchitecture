import { AnyAction } from '@reduxjs/toolkit'
import appReducer,{setLoading} from './app-reducer'
import { APP_INIT_STATE } from '../../../shared/constants/app-initial-state'

describe('test appReducer', () => {
  it('should return the app initial state', () => {
    expect(appReducer(undefined, {} as AnyAction)).toEqual(APP_INIT_STATE)
  })

  it("should change state of isLoading when setLoading is called", () => {
    const newIsLoading=true
    expect(appReducer(APP_INIT_STATE, setLoading(newIsLoading))).toEqual({
      ...APP_INIT_STATE,
      isLoading:newIsLoading
    });
  });
})
