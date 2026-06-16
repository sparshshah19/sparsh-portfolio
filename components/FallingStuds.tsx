'use client'
import { useEffect } from 'react'

const COLORS = ['#E3000B', '#FFD700', '#006CB7', '#00A650', '#FF6B35']

export default function FallingStuds() {
  useEffect(() => {
    const studs: HTMLDivElement[] = []
    for (let i = 0; i < 30; i++) {
      const s = document.createElement('div')
      const size = 6 + Math.random() * 12
      s.className = 'animate-fall-stud'
      s.style.cssText = `
        position:fixed;border-radius:50%;pointer-events:none;z-index:9999;
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}vw;top:-20px;
        background:${COLORS[Math.floor(Math.random() * COLORS.length)]};
        opacity:${0.5 + Math.random() * 0.5};
        animation-duration:${1.5 + Math.random() * 2}s;
        animation-delay:${Math.random() * 1.5}s;
      `
      document.body.appendChild(s)
      studs.push(s)
    }
    const timer = setTimeout(() => studs.forEach(s => s.remove()), 4000)
    return () => {
      clearTimeout(timer)
      studs.forEach(s => s.remove())
    }
  }, [])

  return null
}
