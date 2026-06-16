'use client'
import { useEffect, useRef } from 'react'

interface Props {
  text: string
  color: string
  studColor: string
}

export default function SectionHeading({ text, color, studColor }: Props) {
  const headingRef = useRef<HTMLDivElement>(null)
  const studRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stud = studRef.current
    if (stud) {
      setTimeout(() => {
        stud.style.opacity = '1'
        stud.style.transform = 'scale(1)'
      }, 200)
    }
    const letters = headingRef.current?.querySelectorAll<HTMLSpanElement>('[data-letter]')
    letters?.forEach((span, i) => {
      setTimeout(() => span.classList.add('animate-letter-slam'), 300 + i * 70)
    })
  }, [])

  return (
    <div className="flex items-center gap-2.5 mb-8">
      <div
        data-stud
        ref={studRef}
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: studColor,
          border: '2px solid rgba(0,0,0,0.12)',
          opacity: 0,
          transform: 'scale(0)',
          transition: 'opacity 0.2s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          flexShrink: 0,
        }}
      />
      <span className="sr-only">{text}</span>
      <div ref={headingRef} className="flex" aria-hidden="true">
        {text.split('').map((ch, i) => (
          <span
            key={i}
            data-letter
            style={{
              display: 'inline-block',
              fontFamily: 'Unbounded, sans-serif',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3,
              color,
              opacity: 0,
              transform: 'translateY(-40px) scale(1.4)',
            }}
          >
            {ch}
          </span>
        ))}
      </div>
    </div>
  )
}
