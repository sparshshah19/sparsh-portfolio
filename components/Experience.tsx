'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const ENTRIES = [
  { position: 'Software Engineer Intern', company: 'Modern Niagara',           period: '2026 – Present', accent: '#E3000B', logo: '/logos/logo-modern-niagara.png' },
  { position: 'AI Engineer Intern',       company: 'Cybersphere',              period: '2026',           accent: '#006CB7', logo: '/logos/logo-cybersphere.png'    },
  { position: 'Growth',                   company: 'Boardy',                   period: '2025 – 2026',    accent: '#FF6B35', logo: '/logos/logo-boardy.png'         },
  { position: 'Software Engineer Intern', company: 'Hands',                    period: '2025',           accent: '#00A650', logo: '/logos/logo-hands.png'          },
]

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLDivElement
          const delay = parseInt(el.dataset.delay || '0')
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" style={{ background: '#F7F3EE', padding: '80px 32px' }}>
      <style>{`
        .exp-card { opacity:0; transform:perspective(600px) rotateY(90deg) translateX(-30px); transition:opacity .5s,transform .5s cubic-bezier(.22,1,.36,1),box-shadow .2s; }
        .exp-card.visible { opacity:1; transform:perspective(600px) rotateY(0) translateX(0); }
        .exp-card:hover { box-shadow:0 12px 40px rgba(0,0,0,0.13); }
        .exp-card:hover .logo-img { transform:rotate(360deg) scale(1.2); }
        .accent-bar { transform-origin:top; transform:scaleY(0); transition:transform .4s cubic-bezier(.22,1,.36,1) .25s; }
        .exp-card.visible .accent-bar { transform:scaleY(1); }
        .year-chip { opacity:0; transform:scale(0); transition:opacity .3s .4s,transform .4s cubic-bezier(.34,1.56,.64,1) .4s; }
        .exp-card.visible .year-chip { opacity:1; transform:scale(1); }
        .logo-img { transition:transform .5s cubic-bezier(.34,1.56,.64,1); }
      `}</style>

      <SectionHeading text="EXPERIENCE" color="#1A1A1A" studColor="#E3000B" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {ENTRIES.map((entry, i) => (
          <div
            key={i}
            ref={el => { cardRefs.current[i] = el }}
            data-delay={String(i * 100)}
            className="exp-card"
            style={{ background: '#FFF', border: '2px solid #1A1A1A', borderRadius: 6, padding: '20px 22px', display: 'flex', gap: 18 }}
            onMouseMove={e => {
              const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
              const x = (e.clientX - r.left) / r.width - 0.5
              const y = (e.clientY - r.top) / r.height - 0.5
              ;(e.currentTarget as HTMLDivElement).style.transform = `perspective(600px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateZ(6px)`
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLDivElement).style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateZ(0)'
            }}
          >
            <div className="accent-bar" style={{ width: 4, background: entry.accent, borderRadius: 2, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 15, fontWeight: 700, color: '#1A1A1A', marginBottom: 5 }}>
                    {entry.position}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <Image className="logo-img" src={entry.logo} alt={entry.company} width={20} height={20} style={{ objectFit: 'contain', borderRadius: 3 }} />
                    <span style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 11, color: '#888' }}>{entry.company}</span>
                  </div>
                </div>
                <span className="year-chip" style={{ fontFamily: 'Unbounded, sans-serif', fontSize: 9, fontWeight: 700, color: entry.accent, whiteSpace: 'nowrap', marginTop: 2 }}>
                  {entry.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
