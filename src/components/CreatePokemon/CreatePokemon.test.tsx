import { render, screen } from '@testing-library/react'
import { CreatePokemon } from './CreatePokemon'

describe('Test CreatePokemon component', () => {
  const renderComponent = () => {
    render(<CreatePokemon />)
  }

  it('should render component', () => {
    renderComponent()
    expect(screen.getByText('Create Pokemon')).toBeInTheDocument()
  })
})
