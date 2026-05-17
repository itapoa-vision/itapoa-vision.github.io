'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import GlowButton from '../ui/GlowButton'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden bg-black"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 city-grid-bg opacity-40" />
        {/* Center radial */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,212,0,0.07) 0%, rgba(0,255,136,0.04) 40%, transparent 70%)',
          }}
        />
        {/* Yellow glow top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 blur-[80px]"
          style={{ background: 'rgba(255,212,0,0.08)' }}
        />
      </motion.div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line" style={{ animationDuration: '6s' }} />
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-8 left-8 hud-corner-tl opacity-40" />
      <div className="absolute top-8 right-8 hud-corner-tr opacity-40" />
      <div className="absolute bottom-8 left-8 hud-corner-bl opacity-40" />
      <div className="absolute bottom-8 right-8 hud-corner-br opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-px w-12 bg-yellow/40" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-yellow/70">
            PLATAFORMA DISPONÍVEL
          </span>
          <div className="h-px w-12 bg-yellow/40" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            className="font-rajdhani font-bold text-white uppercase"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', lineHeight: '0.92', letterSpacing: '-0.02em' }}
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            INFRAESTRUTURA DE IA
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            className="font-rajdhani font-bold text-yellow uppercase text-glow-yellow"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', lineHeight: '0.92', letterSpacing: '-0.02em' }}
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            PARA O MUNDO REAL
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-barlow font-light text-lg text-white/45 max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Implemente visão computacional em qualquer câmera existente. Sem hardware adicional. Resultados em dias, não meses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlowButton variant="yellow" size="lg" href="https://wa.me/5521984593240">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.531 5.85L.057 23.547a.75.75 0 00.919.899l5.87-1.522A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.497-5.22-1.367l-.374-.216-3.884 1.007 1.034-3.78-.236-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Entre em contato
          </GlowButton>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/06"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { icon: '✉', label: 'contato@itapoavision.com.br' },
            { icon: '📍', label: 'Itapoá, Santa Catarina, Brasil' },
            { icon: '⚡', label: 'Deploy em até 48h' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="font-mono text-[11px] text-white/35 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
