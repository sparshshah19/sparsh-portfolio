import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders name', () => {
    render(<Hero />)
    expect(screen.getByText('SPARSH SHAH')).toBeInTheDocument()
  })
  it('renders all three chips', () => {
    render(<Hero />)
    expect(screen.getByText('3× SWE INTERN')).toBeInTheDocument()
    expect(screen.getByText('AI RESEARCH')).toBeInTheDocument()
    expect(screen.getByText('WATERLOO ENGINEERING')).toBeInTheDocument()
  })
  it('renders contact links', () => {
    render(<Hero />)
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })
})
