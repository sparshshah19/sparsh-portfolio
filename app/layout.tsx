import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Cursor from '@/components/Cursor'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata = {
  title: 'Sparsh Shah',
  description: 'Software engineer, builder, Waterloo Engineering.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/the-seasons" rel="stylesheet" />
      </head>
      <body>
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
