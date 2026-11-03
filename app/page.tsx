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

      <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 15, color: '#333', lineHeight: 1.75, margin: '0 0 16px' }}>
        Hi, nice to meet you!
      </p>

      <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 15, color: '#333', lineHeight: 1.75, margin: '0 0 16px' }}>
        I am a 2nd year Engineering student at the University of Waterloo with a deep interest in the Data and AI realm. I am currently interning as a Data Analyst at{' '}
        {co('Super.com', 'https://www.super.com/')}, and am an incoming Data Science Intern at{' '}
        {co('Mackenzie Investments', 'https://www.mackenzieinvestments.com/')}. In the past, I worked as an Analytics Engineer Intern at{' '}
        {co('Modern Niagara', 'https://modernniagara.com/')}, and as an AI Engineer building internal tooling at{' '}
        {co('Cybersphere', 'https://getcybersphere.com/')}.
      </p>

      <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 15, color: '#333', lineHeight: 1.75, margin: '0 0 48px' }}>
        Outside of work, you'll usually find me out on a run or glued to a game. I recently ran the Hamilton Marathon in 4:52, and I love sports, especially hockey, football, basketball, and baseball. The saying I try to live by: be grateful, be curious, have good intentions, and keep working hard.
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
