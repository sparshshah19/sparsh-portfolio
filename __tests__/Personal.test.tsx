import { render, screen } from '@testing-library/react'
import Personal from '@/components/Personal'

describe('Personal', () => {
  it('renders RUNS label', () => {
    render(<Personal />)
    expect(screen.getByText('RUNS')).toBeInTheDocument()
  })
  it('renders 3 run photo slots', () => {
    render(<Personal />)
    expect(screen.getAllByAltText(/strava run/i)).toHaveLength(3)
  })
  it('renders LATEST BUILD label', () => {
    render(<Personal />)
    expect(screen.getByText('LATEST BUILD')).toBeInTheDocument()
  })
  it('renders Ferrari FXX K set name', () => {
    render(<Personal />)
    expect(screen.getByText('Ferrari FXX K')).toBeInTheDocument()
  })
})
