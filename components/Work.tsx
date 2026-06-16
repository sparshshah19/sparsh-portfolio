'use client'
import { useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading'

const RESEARCH_TAGS = ['Python', 'PyTorch', 'ChromaDB', 'FastAPI']
const PROJECTS = [
  {
    title: 'Fantasy Football Trade Regret Simulator',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    accent: '#E3000B',
    github: 'https://github.com/sparshshah19/trade-regret-simulator',
  },
  {
    title: 'Socratic AI',
    tags: ['React', 'Node.js', 'Gemini API'],
    accent: '#006CB7',
    github: 'https://github.com/sparshshah19/socratic-ai',
  },
]

export default function Work() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLDivElement
          const delay = parseInt(el.dataset.delay || '0')
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" style={{ background: '#F7F3EE', padding: '80px 32px' }}>
      <SectionHeading text="WORK" color="#1A1A1A" studColor="#006CB7" />

      {/* Research card */}
      <div
        ref={el => { cardRefs.current[0] = el }}
        data-delay="0"
        style={{ background: '#FFD700', border: '2px solid #1A1A1A', borderRadius: 6, padding: 24, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, opacity: 0, transform: 'translateY(24px)', transition: 'opacity .5s,transform .5s cubic-bezier(.22,1,.36,1)' }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Unbounded, sans-serif', fontSize: 8, fontWeight: 700, color: '#1A1A1A', letterSpacing: 2, marginBottom: 10 }}>RESEARCH</div>
          <div style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 17, fontWeight: 700, color: '#1A1A1A', marginBottom: 8, lineHeight: 1.3 }}>
            Adaptive Guardrails: Agent Safety
          </div>
          <div style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 11, color: '#333', lineHeight: 1.6, marginBottom: 12, maxWidth: 420 }}>
            100% evasion via code-form rewrites · 3-stage teacher-student pipeline · F1 of 0.983 · ~2ms per decision
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 4 }}>
            {RESEARCH_TAGS.map(tag => (
              <span key={tag} style={{ background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.12)', color: '#333', fontFamily: "'The Seasons', Georgia, serif", fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 20 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <a
            href="/blog/adaptive-guardrails"
            className="animate-pulse-shadow"
            style={{ background: '#1A1A1A', color: '#FFD700', fontFamily: 'Unbounded, sans-serif', fontSize: 9, fontWeight: 700, padding: '12px 20px', borderRadius: 4, textDecoration: 'none', whiteSpace: 'nowrap' as const, letterSpacing: 1, display: 'block' }}
          >
            ↗ READ POST
          </a>
        </div>
      </div>

      {/* Project cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {PROJECTS.map((proj, i) => (
          <div
            key={i}
            ref={el => { cardRefs.current[i + 1] = el }}
            data-delay={String((i + 1) * 120)}
            style={{ background: '#FFF', border: '2px solid #1A1A1A', borderTop: `4px solid ${proj.accent}`, borderRadius: 6, padding: 20, opacity: 0, transform: 'translateY(24px)', transition: 'opacity .5s,transform .5s cubic-bezier(.22,1,.36,1)' }}
          >
            <div style={{ fontFamily: 'Unbounded, sans-serif', fontSize: 8, fontWeight: 700, color: '#888', letterSpacing: 2, marginBottom: 8 }}>PROJECT</div>
            <div style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 6, lineHeight: 1.3 }}>{proj.title}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 3, marginBottom: 14 }}>
              {proj.tags.map(tag => (
                <span key={tag} style={{ background: '#F0EBE3', border: '1px solid #E0D9D0', color: '#555', fontFamily: "'The Seasons', Georgia, serif", fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 20 }}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 9, fontWeight: 700, color: '#888', textDecoration: 'none', borderBottom: `2px solid ${proj.accent}`, paddingBottom: 1 }}
            >
              ↗ GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
