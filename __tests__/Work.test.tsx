import { render, screen } from '@testing-library/react'
import Work from '@/components/Work'

describe('Work', () => {
  it('renders research card', () => {
    render(<Work />)
    expect(screen.getByText('Adaptive Guardrails: Agent Safety')).toBeInTheDocument()
  })
  it('renders READ POST button', () => {
    render(<Work />)
    expect(screen.getByText('↗ READ POST')).toBeInTheDocument()
  })
  it('READ POST links to blog route', () => {
    render(<Work />)
    const btn = screen.getByText('↗ READ POST').closest('a')
    expect(btn).toHaveAttribute('href', '/blog/adaptive-guardrails')
  })
  it('renders both project cards', () => {
    render(<Work />)
    expect(screen.getByText('Fantasy Football Trade Regret Simulator')).toBeInTheDocument()
    expect(screen.getByText('Socratic AI')).toBeInTheDocument()
  })
})
