import { render, screen } from '@testing-library/react'
import Experience from '@/components/Experience'

describe('Experience', () => {
  it('renders section heading', () => {
    render(<Experience />)
    expect(screen.getByText(/EXPERIENCE/)).toBeInTheDocument()
  })
  it('renders all 6 position titles', () => {
    render(<Experience />)
    expect(screen.getAllByText('Software Engineer Intern')).toHaveLength(2)
    expect(screen.getByText('Internal Director')).toBeInTheDocument()
    expect(screen.getByText('AI Engineer Intern')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
    expect(screen.getByText('Software Developer')).toBeInTheDocument()
  })
  it('renders all 6 company names', () => {
    render(<Experience />)
    expect(screen.getByText('Modern Niagara')).toBeInTheDocument()
    expect(screen.getByText('UW Blueprint')).toBeInTheDocument()
    expect(screen.getByText('Cybersphere')).toBeInTheDocument()
    expect(screen.getByText('Boardy')).toBeInTheDocument()
    expect(screen.getByText('Waterloo Business Review')).toBeInTheDocument()
    expect(screen.getByText('Hands')).toBeInTheDocument()
  })
})
