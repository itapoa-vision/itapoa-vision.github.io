'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import HudOverlay from './HudOverlay'
import BoundingBoxes from './BoundingBoxes'
import GlowButton from '../ui/GlowButton'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const headline = ['TRANSFORMANDO', 'CÂMERAS EM', 'INTELIGÊNCIA', 'URBANA']

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-black scanline-overlay"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Deep gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05080a] to-black" />
        {/* City grid */}
        <div className="absolute inset-0 city-grid-bg opacity-100" />
        {/* Radial ambient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,50,30,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Left teal glow */}
        <div
          className="absolute -left-48 top-1/3 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'rgba(0,255,136,0.04)' }}
        />
        {/* Yellow accent glow */}
        <div
          className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full blur-[100px]"
          style={{ background: 'rgba(255,212,0,0.05)' }}
        />
      </div>

      {/* Scanning line */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div className="scan-line" />
      </div>

      {/* HUD + bounding boxes */}
      <BoundingBoxes />
      <HudOverlay />

      {/* Main content */}
      <motion.div
        className="relative z-30 flex flex-col justify-center min-h-screen px-6 lg:px-16 xl:px-24 pt-24 pb-32"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* System label */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="live-dot" />
            <span className="font-mono text-[11px] text-green uppercase tracking-[0.3em]">
              SISTEMA ONLINE
            </span>
            <div className="h-px w-12 bg-green/30" />
            <span className="font-mono text-[11px] text-white/30 uppercase tracking-widest">
              PLATAFORMA DE IA URBANA
            </span>
          </motion.div>

          {/* Giant headline */}
          <div className="mb-8">
            {headline.map((line, i) => (
              <motion.div
                key={line}
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.01, delay: 0.5 + i * 0.15 }}
              >
                <motion.h1
                  className={`font-rajdhani font-bold text-hero leading-none uppercase ${
                    i === 3
                      ? 'text-yellow text-glow-yellow'
                      : i === 0
                      ? 'text-white'
                      : 'text-white/90'
                  }`}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 0.85,
                    delay: 0.5 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle + CTAs */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <p className="font-barlow font-light text-base lg:text-lg text-white/50 max-w-md leading-relaxed">
              Sistemas de IA em tempo real para cidades inteligentes, infraestrutura, logística e monitoramento público.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <GlowButton variant="yellow" size="lg" href="#analytics">
                <span className="inline-block w-2 h-2 rounded-full bg-black mr-1" />
                Ver Analytics ao Vivo
              </GlowButton>
              <GlowButton variant="outline" size="lg" href="#contact">
                Solicitar Demo
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom metrics bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30 glass-dark border-t border-white/05"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 flex items-center justify-between overflow-x-auto gap-4">
          {[
            { label: 'CÂMERAS ATIVAS', value: '2,847', color: 'text-white' },
            { label: 'DETECÇÕES / MIN', value: '18,430', color: 'text-yellow' },
            { label: 'ALERTAS HOJE', value: '124', color: 'text-white' },
            { label: 'CIDADES', value: '7', color: 'text-white' },
            { label: 'UPTIME', value: '99.97%', color: 'text-green' },
          ].map((m, i) => (
            <div key={m.label} className="flex flex-col items-center min-w-max px-4 first:pl-0 last:pr-0 relative">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-px bg-white/10" />
              )}
              <div className={`font-orbitron font-bold text-sm lg:text-base ${m.color}`}>
                {m.value}
              </div>
              <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
