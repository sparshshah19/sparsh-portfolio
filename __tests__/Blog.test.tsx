import { render, screen } from '@testing-library/react'
import BlogPost from '@/app/blog/adaptive-guardrails/page'

describe('Blog post', () => {
  it('renders the post title', () => {
    render(<BlogPost />)
    expect(screen.getAllByText(/Code-form attacks/i).length).toBeGreaterThan(0)
  })
  it('renders a back link to home', () => {
    render(<BlogPost />)
    expect(screen.getByText(/← Back/i)).toBeInTheDocument()
  })
})
