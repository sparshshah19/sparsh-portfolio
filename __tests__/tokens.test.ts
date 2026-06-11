import config from '../tailwind.config'
describe('tailwind tokens', () => {
  it('has lego color palette', () => {
    const colors = config.theme?.extend?.colors as Record<string, string>
    expect(colors['lego-red']).toBe('#E3000B')
    expect(colors['lego-yellow']).toBe('#FFD700')
    expect(colors['lego-blue']).toBe('#006CB7')
    expect(colors['lego-green']).toBe('#00A650')
    expect(colors['lego-base']).toBe('#F7F3EE')
    expect(colors['lego-dark']).toBe('#1A1A1A')
  })
})
