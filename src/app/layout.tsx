import type { Metadata } from 'next'
import { Orbitron, Rajdhani, JetBrains_Mono, Barlow } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Itapoá Vision — Urban Intelligence Platform',
  description: 'Real-time AI systems for smart cities, infrastructure, logistics and public monitoring. Computer vision that transforms cameras into urban intelligence.',
  keywords: ['computer vision', 'smart city', 'AI monitoring', 'drone intelligence', 'urban analytics', 'beach monitoring', 'traffic analytics'],
  openGraph: {
    title: 'Itapoá Vision — Urban Intelligence Platform',
    description: 'Real-time AI systems for smart cities, infrastructure, logistics and public monitoring.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} ${barlow.variable}`}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
