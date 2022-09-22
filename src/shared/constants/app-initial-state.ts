import { AppStateI } from '../interfaces/reducers/app-state'

export const APP_INIT_STATE: AppStateI = {
  isLoading: false,
  snackBar: { show: false, message: '' },
}
