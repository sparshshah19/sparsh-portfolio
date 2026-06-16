import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Sparsh Shah')).toBeInTheDocument()
  })
  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Personal')).toBeInTheDocument()
  })
  it('renders Get In Touch CTA', () => {
    render(<Navbar />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })
  it('CTA links to mailto', () => {
    render(<Navbar />)
    const cta = screen.getByText('Get In Touch').closest('a')
    expect(cta).toHaveAttribute('href', 'mailto:sparsh.shah@uwaterloo.ca')
  })
})
