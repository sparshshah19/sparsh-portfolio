'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const lastX = useRef(0)
  const frameCount = useRef(0)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      const dx = e.clientX - lastX.current
      if (Math.abs(dx) > 2) {
        const scale = dx > 0 ? 1 : -1
        el.style.transform = `translate(-50%,-50%) scaleX(${scale})`
      }
      lastX.current = e.clientX
      frameCount.current++
      if (frameCount.current % 3 === 0) spawnPuff(e.clientX, e.clientY, dx > 0)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      id="ferrari-cursor"
      ref={cursorRef}
      style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999, top: 0, left: 0, transform: 'translate(-50%,-50%)', filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.5))' }}
    >
      <svg width="64" height="30" viewBox="0 0 64 30" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="28" rx="22" ry="3" fill="rgba(0,0,0,0.25)"/>
        <path d="M4,22 L4,16 Q6,10 14,8 L26,6 Q34,4 40,5 L52,8 L58,12 L60,16 L60,22 Z" fill="#CC0000"/>
        <path d="M6,14 Q10,9 18,7 L34,6 Q42,5 48,7 L54,10" fill="none" stroke="#FF4444" strokeWidth="1.5" opacity="0.6"/>
        <path d="M20,8 L17,14 L42,14 L40,7 Q34,4 26,6 Z" fill="#1a1a2e" opacity="0.85"/>
        <path d="M22,8.5 L20,13 L26,13 L27,7.5 Z" fill="white" opacity="0.15"/>
        <circle cx="25" cy="7" r="1.8" fill="#BB0000" stroke="#880000" strokeWidth="0.5"/>
        <circle cx="31" cy="6.2" r="1.8" fill="#BB0000" stroke="#880000" strokeWidth="0.5"/>
        <circle cx="37" cy="6.2" r="1.8" fill="#BB0000" stroke="#880000" strokeWidth="0.5"/>
        <path d="M58,13 L62,15 L62,20 L58,20 Z" fill="#CC0000"/>
        <rect x="59" y="20" width="4" height="2" rx="0.5" fill="#222"/>
        <rect x="54" y="13" width="5" height="5" rx="1" fill="#FFD700" opacity="0.9"/>
        <rect x="3" y="9" width="6" height="2" rx="1" fill="#111"/>
        <rect x="2" y="8" width="2" height="6" rx="0.5" fill="#333"/>
        <circle cx="48" cy="23" r="6" fill="#1A1A1A"/><circle cx="48" cy="23" r="4" fill="#333"/><circle cx="48" cy="23" r="2" fill="#888"/>
        <line x1="44" y1="23" x2="52" y2="23" stroke="#666" strokeWidth="0.8"/>
        <line x1="48" y1="19" x2="48" y2="27" stroke="#666" strokeWidth="0.8"/>
        <circle cx="16" cy="23" r="6.5" fill="#1A1A1A"/><circle cx="16" cy="23" r="4.5" fill="#333"/><circle cx="16" cy="23" r="2.2" fill="#888"/>
        <line x1="11.5" y1="23" x2="20.5" y2="23" stroke="#666" strokeWidth="0.8"/>
        <line x1="16" y1="18.5" x2="16" y2="27.5" stroke="#666" strokeWidth="0.8"/>
        <rect x="20" y="21" width="24" height="2" rx="0.5" fill="#AA0000"/>
        <circle cx="7" cy="19" r="2" fill="#333" stroke="#555" strokeWidth="0.5"/>
        <circle cx="7" cy="23" r="2" fill="#333" stroke="#555" strokeWidth="0.5"/>
      </svg>
    </div>
  )
}

function spawnPuff(x: number, y: number, facingRight: boolean) {
  const puff = document.createElement('div')
  puff.className = 'animate-exhaust'
  const size = 4 + Math.random() * 6
  const offset = facingRight ? -20 : 20
  const colors = ['#888', '#aaa', '#666', '#bbb']
  puff.style.cssText = `
    position:fixed;pointer-events:none;z-index:99997;border-radius:50%;
    width:${size}px;height:${size}px;
    left:${x + offset}px;top:${y + 6}px;
    background:${colors[Math.floor(Math.random() * colors.length)]};
    animation-duration:${0.4 + Math.random() * 0.2}s;
  `
  document.body.appendChild(puff)
  setTimeout(() => puff.remove(), 600)
}
