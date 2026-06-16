import { render } from '@testing-library/react'
import SectionHeading from '@/components/SectionHeading'

describe('SectionHeading', () => {
  it('renders a span per letter', () => {
    render(<SectionHeading text="WORK" color="#006CB7" studColor="#006CB7" />)
    const letters = document.querySelectorAll('[data-letter]')
    expect(letters).toHaveLength(4)
  })
  it('renders the stud', () => {
    render(<SectionHeading text="WORK" color="#006CB7" studColor="#006CB7" />)
    expect(document.querySelector('[data-stud]')).toBeInTheDocument()
  })
})
