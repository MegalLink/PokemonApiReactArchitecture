import { render, screen } from '@testing-library/react'
import React from 'react'
import { MainPokemon } from './MainPokemon'

describe('Test MainPokemon component', () => {
  const renderComponent = () => {
    render(<MainPokemon />)
  }
  it('should render component', () => {
    renderComponent()
    expect(screen.getByText('Hellow world')).toBeInTheDocument()
  })
})
