import { render, screen } from '@testing-library/react'
import SurrenderPost from '@/app/writing/surrender/page'
import Page from '@/app/page'

describe('Writing: surrender', () => {
  it('renders the title', () => {
    render(<SurrenderPost />)
    expect(screen.getByRole('heading', { level: 1, name: 'Qualities I Want to Bring in My Life: Surrender' })).toBeInTheDocument()
  })
  it('renders a back link to home', () => {
    render(<SurrenderPost />)
    expect(screen.getByText(/← back/i)).toBeInTheDocument()
  })
  it('is linked from the homepage Writing section', () => {
    render(<Page />)
    expect(screen.getByText('Writing')).toBeInTheDocument()
    expect(screen.getByText('Qualities I Want to Bring in My Life: Surrender').closest('a')).toHaveAttribute('href', '/writing/surrender')
  })
})
