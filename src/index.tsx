import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreatePokemon } from './components/Pages/CreatePokemon/CreatePokemon'
import { MainPokemon } from './components/Pages/MainPokemon/MainPokemon'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilsConfigurator } from './utils/snackbar/snackbar-util-configurator'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={5} autoHideDuration={2000}>
        <SnackbarUtilsConfigurator />
        <BrowserRouter>
          <Routes>
            <Route index element={<MainPokemon />} />
            <Route path='/create' element={<CreatePokemon />} />
            <Route path='/update' element={<CreatePokemon />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
