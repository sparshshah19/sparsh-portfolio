import { render } from '@testing-library/react'
import Cursor from '@/components/Cursor'

describe('Cursor', () => {
  it('renders the ferrari SVG', () => {
    render(<Cursor />)
    expect(document.querySelector('#ferrari-cursor')).toBeInTheDocument()
  })
  it('is fixed position and pointer-events-none', () => {
    render(<Cursor />)
    const el = document.querySelector('#ferrari-cursor') as HTMLElement
    expect(el.style.position).toBe('fixed')
  })
})
