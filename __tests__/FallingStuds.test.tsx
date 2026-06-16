import { render } from '@testing-library/react'
import FallingStuds from '@/components/FallingStuds'

describe('FallingStuds', () => {
  it('renders without crashing', () => {
    const { container } = render(<FallingStuds />)
    expect(container).toBeInTheDocument()
  })
})
