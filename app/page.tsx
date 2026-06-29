const serif = "Georgia, 'Times New Roman', serif"
const sans = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

const CONTACTS = [
  { label: 'Email', href: 'mailto:sparsh.shah@uwaterloo.ca' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sparshshahh/' },
  { label: 'GitHub', href: 'https://github.com/sparshshah19' },
]

function co(name: string, href: string) {
  return (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: '#333', textDecoration: 'underline', textUnderlineOffset: 3, fontFamily: sans }}
    >
      {name}
    </a>
  )
}

export default function Page() {
  return (
    <main style={{ maxWidth: 620, margin: '64px auto', padding: '0 32px', background: '#fff', minHeight: '100vh' }}>

      <h1 style={{ fontFamily: serif, fontSize: 26, fontWeight: 400, color: '#111', margin: '0 0 12px', lineHeight: 1.1 }}>Sparsh Shah</h1>

      <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
        {CONTACTS.map(c => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            style={{ fontFamily: sans, fontSize: 15, color: '#333', textDecoration: 'underline', textUnderlineOffset: 3 }}
          >
            {c.label}
          </a>
        ))}
      </div>

      <p style={{ fontFamily: sans, fontSize: 15, color: '#333', lineHeight: 1.75, margin: '0 0 48px' }}>
        Year 2 at the University of Waterloo studying Management Engineering. Currently working as a data engineer at{' '}
        {co('Modern Niagara', 'https://modernniagara.com/')}. Previously at{' '}
        {co('Boardy', 'https://www.boardy.ai/')} as a scout,{' '}
        {co('Cybersphere', 'https://getcybersphere.com/')} working in AI automation, and{' '}
        {co('Hands', 'https://handsforu.com/')} as a software engineer working on RAG and shipping full-stack features.
      </p>

      <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, color: '#111', margin: '0 0 10px' }}>Research</p>
      <a
        href="/blog/adaptive-guardrails"
        style={{ fontFamily: sans, fontSize: 15, color: '#333', textDecoration: 'underline', textUnderlineOffset: 3 }}
      >
        Adaptive Guardrails: Code-form attacks on retrieval-based AI safety memory
      </a>
    </main>
  )
}
