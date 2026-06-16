const STUDS = ['#E3000B', '#FFD700', '#006CB7', '#00A650']
const CHIPS = [
  { label: '3× SWE INTERN',       bg: '#E3000B', color: '#FFF' },
  { label: 'AI RESEARCH',          bg: '#006CB7', color: '#FFF' },
  { label: 'WATERLOO ENGINEERING', bg: '#FFD700', color: '#1A1A1A' },
]
const CONTACTS = [
  { label: 'Email',    underline: '#E3000B', href: 'mailto:sparsh.shah@uwaterloo.ca' },
  { label: 'LinkedIn', underline: '#006CB7', href: 'https://www.linkedin.com/in/sparshshahh/' },
  { label: 'GitHub',   underline: '#1A1A1A', href: 'https://github.com/sparshshah19' },
]
const STRIP = ['#E3000B', '#FFD700', '#006CB7', '#00A650', '#1A1A1A']
const STRIP_FLEX = [3, 2, 2, 1, 4]

export default function Hero() {
  return (
    <section id="home" style={{ background: '#F7F3EE', paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
      <div style={{ padding: '52px 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Stud row */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {STUDS.map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, border: '2px solid rgba(0,0,0,0.12)' }} />
          ))}
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 52, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: -1, marginBottom: 18 }}>
          SPARSH SHAH
        </h1>

        {/* Tagline */}
        <p style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 22, maxWidth: 380 }}>
          Every skill, every role,{' '}
          <span style={{ color: '#E3000B', fontWeight: 600 }}>another brick in the build.</span>
        </p>

        {/* Chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          {CHIPS.map(chip => (
            <span
              key={chip.label}
              style={{ background: chip.bg, color: chip.color, fontFamily: "'The Seasons', Georgia, serif", fontSize: 9, fontWeight: 700, padding: '6px 14px', borderRadius: 3, letterSpacing: 1 }}
            >
              {chip.label}
            </span>
          ))}
        </div>

        {/* Contact links */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 44 }}>
          {CONTACTS.map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 10, fontWeight: 600, color: '#999', textDecoration: 'none', borderBottom: `2px solid ${c.underline}`, paddingBottom: 2 }}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* Color strip */}
      <div style={{ height: 5, display: 'flex' }}>
        {STRIP.map((c, i) => (
          <div key={i} style={{ flex: STRIP_FLEX[i], background: c }} />
        ))}
      </div>
    </section>
  )
}
