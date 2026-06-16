'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const STUDS = ['#FFD700', '#006CB7', '#1A1A1A']
const RUNS = [
  { src: '/run1.png', alt: 'strava run 1' },
  { src: '/run2.png', alt: 'strava run 2' },
  { src: '/run3.png', alt: 'strava run 3' },
]

export default function Personal() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLDivElement>('[data-animate]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="personal" ref={sectionRef} style={{ background: '#F7F3EE', padding: '80px 32px' }}>
      <SectionHeading text="PERSONAL" color="#1A1A1A" studColor="#00A650" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 12, height: 420 }}>

        {/* Left: 3 portrait run photos */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ fontFamily: 'Unbounded, sans-serif', fontSize: 8, fontWeight: 700, color: '#00A650', letterSpacing: 2, marginBottom: 8, lineHeight: 1, flexShrink: 0 }}>RUNS</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0 }}>
            {RUNS.map((run, i) => (
              <div
                key={i}
                data-animate
                style={{ flex: 1, minHeight: 0, borderRadius: 4, overflow: 'hidden', position: 'relative', opacity: 0, transform: 'translateY(16px)', transition: `opacity .4s,transform .4s cubic-bezier(.22,1,.36,1)` }}
              >
                <Image src={run.src} alt={run.alt} fill style={{ objectFit: 'cover' }} sizes="200px" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: LEGO build (full height) */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ fontFamily: 'Unbounded, sans-serif', fontSize: 8, fontWeight: 700, color: '#E3000B', letterSpacing: 2, marginBottom: 8, lineHeight: 1, flexShrink: 0 }}>LATEST BUILD</div>
          <div
            data-animate
            style={{ flex: 1, minHeight: 0, background: '#E3000B', borderRadius: 6, border: '2px solid #1A1A1A', overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: 0, transform: 'translateY(16px)', transition: 'opacity .4s .1s,transform .4s .1s cubic-bezier(.22,1,.36,1)' }}
          >
            <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
              <Image src="/lego-ferrari.png" alt="LEGO Ferrari FXX K" fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="340px" />
            </div>
            <div style={{ flexShrink: 0, padding: '12px 16px 14px' }}>
              <div style={{ fontFamily: "'The Seasons', Georgia, serif", fontSize: 14, fontWeight: 700, color: '#FFF', marginBottom: 4 }}>Ferrari FXX K</div>
              <div style={{ display: 'flex', gap: 3 }}>
                {STUDS.map((c, i) => (
                  <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c, border: '1.5px solid rgba(0,0,0,0.15)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
