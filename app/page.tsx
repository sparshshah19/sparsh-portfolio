const CONTACTS = [
  { label: 'sparsh.shah@uwaterloo.ca', href: 'mailto:sparsh.shah@uwaterloo.ca' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sparshshahh/' },
  { label: 'GitHub', href: 'https://github.com/sparshshah19' },
]

export default function Page() {
  return (
    <main style={{ maxWidth: 560, margin: '72px auto', padding: '0 28px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: '#111', margin: '0 0 6px' }}>Sparsh Shah</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginBottom: 36 }}>
        {CONTACTS.map(c => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            style={{ fontSize: 13, color: '#555', textDecoration: 'none', borderBottom: '1px solid #ccc', paddingBottom: 1 }}
          >
            {c.label}
          </a>
        ))}
      </div>

      <p style={{ fontSize: 14, color: '#333', lineHeight: 1.75, margin: '0 0 48px' }}>
        Year two engineering student at the University of Waterloo. Currently working as a data engineer at{' '}
        <strong style={{ fontWeight: 600, color: '#111' }}>Modern Niagara</strong>. Previously at{' '}
        <strong style={{ fontWeight: 600, color: '#111' }}>Boardy</strong> as a scout,{' '}
        <strong style={{ fontWeight: 600, color: '#111' }}>Cybersphere</strong> working in AI automation, and{' '}
        <strong style={{ fontWeight: 600, color: '#111' }}>Hands</strong> as a software engineer working on RAG and shipping full-stack features.
      </p>

      <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#999', textTransform: 'uppercase', margin: '0 0 14px' }}>Writing</h2>
      <a
        href="/blog/adaptive-guardrails"
        style={{ fontSize: 14, color: '#111', textDecoration: 'none', borderBottom: '1px solid #111', paddingBottom: 1 }}
      >
        Adaptive Guardrails: Code-form attacks on retrieval-based AI safety memory ↗
      </a>
    </main>
  )
}
