'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LighthouseLogo from './ui/LighthouseLogo'

const navLinks = [
  { label: 'Soluções', href: '#analytics' },
  { label: 'Analytics', href: '#dashboard' },
  { label: 'Tecnologia', href: '#technology' },
  { label: 'Smart City', href: '#smartcity' },
  { label: 'Contato', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60))
    return unsub
  }, [scrollY])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12"
        style={{}}
      >
        <div
          className="absolute inset-0 border-b transition-colors duration-300"
          style={{
            backgroundColor: 'rgba(5,5,5,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent',
          }}
        />

        <div className="relative flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo icon */}
            <LighthouseLogo size={30} />
            <div>
              <div className="font-orbitron font-bold text-sm tracking-widest text-white group-hover:text-yellow transition-colors duration-300">
                ITAPOÁ
              </div>
              <div className="font-mono text-[9px] tracking-[0.4em] text-white/40 -mt-0.5">
                VISION
              </div>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <motion.div
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.div>

          {/* CTA + mobile toggle */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://wa.me/5521984593240"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 font-mono text-[11px] uppercase tracking-widest bg-yellow text-black font-semibold hover:bg-yellow/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,212,0,0.4)]"
            >
              Entre em contato
            </a>
            <button
              className="lg:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: isOpen ? 'all' : 'none' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-rajdhani font-bold text-4xl text-white/70 hover:text-yellow transition-colors duration-200 uppercase tracking-widest"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5521984593240"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-4 px-8 py-3 font-mono text-sm uppercase tracking-widest bg-yellow text-black font-bold"
        >
          Entre em contato
        </a>
      </motion.div>
    </>
  )
}
