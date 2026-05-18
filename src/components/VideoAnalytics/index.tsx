'use client'

import { motion } from 'framer-motion'
import AnalyticsCard from './AnalyticsCard'
import SectionLabel from '../ui/SectionLabel'

const scenarios = [
  {
    title: 'Monitoramento de Praia',
    subtitle: 'Análise de Ocupação da Praia',
    scenario: 'PRAIA / SEGURANÇA',
    accentColor: 'yellow' as const,
    videoSrc: '/videos/pontal.mp4',
    videoVertical: true,
    metrics: [
      { label: 'Pessoas', value: 43, color: 'yellow' as const },
      { label: 'No Mar', value: 7, color: 'white' as const },
      { label: 'Na Areia', value: 36, color: 'white' as const },
    ],
    labels: [],
  },
  {
    title: 'Infraestrutura Urbana',
    subtitle: 'Inspeção urbana - Rua 1790, Continental (Exemplo)',
    scenario: 'ROAD / INFRA',
    accentColor: 'green' as const,
    videoSrc: '/videos/buraco.mp4',
    videoVertical: true,
    metrics: [
      { label: 'Buracos', value: 59, color: 'white' as const },
      { label: 'Severidade', value: 'MÉDIA', color: 'yellow' as const },
      { label: 'Metros insp.', value: 47, color: 'green' as const },
    ],
    labels: [],
  },
  {
    title: 'Inteligência de Tráfego',
    subtitle: 'Drone Aéreo — Fluxo Veicular',
    scenario: 'DRONE / TRÂNSITO',
    accentColor: 'yellow' as const,
    metrics: [
      { label: 'Veículos', value: 342, color: 'yellow' as const },
      { label: 'Vel. Média', value: '47', unit: 'km/h', color: 'white' as const },
      { label: 'Fluxo', value: 'ALTO', color: 'white' as const },
    ],
    labels: [],
  },
  {
    title: 'Porto & Logística',
    subtitle: 'Pátio de Containers — Rastreamento de Ativos',
    scenario: 'EFICIÊNCIA PORTUÁRIA / LOGÍSTICA',
    accentColor: 'green' as const,
    videoSrc: '/videos/porto.mp4',
    videoVertical: true,
    metrics: [
      { label: 'Caminhões', value: 89, color: 'green' as const },
      { label: 'Containers', value: 1240, color: 'yellow' as const },
      { label: 'Ocupação', value: '74', unit: '%', color: 'white' as const },
    ],
    labels: [],
  },
]

export default function VideoAnalytics() {
  return (
    <section id="analytics" className="relative py-24 lg:py-32 bg-black">
      {/* Subtle top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel color="green" className="mb-4">CASES DE EXEMPLO</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h2
              className="font-rajdhani font-bold text-display text-white uppercase"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              CASES DE<br />
              <span className="text-yellow">EXEMPLO</span>
            </motion.h2>
            <motion.p
              className="font-barlow text-white/45 max-w-sm text-sm lg:text-base leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Cada câmera é um sensor inteligente. Detecção, classificação e análise acontecem na borda, em millisegundos.
            </motion.p>
          </div>

          {/* Divider line */}
          <motion.div
            className="mt-8 h-px bg-white/08"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {scenarios.map((scenario, i) => (
            <AnalyticsCard key={scenario.title} index={i} {...scenario} />
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          className="mt-12 glass border border-white/06 p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { v: '< 50ms', l: 'Latência de Detecção' },
            { v: '99.2%', l: 'Precisão Média (mAP)' },
            { v: '24/7', l: 'Monitoramento Contínuo' },
            { v: '60+', l: 'Classes Detectáveis' },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="font-orbitron font-bold text-xl text-yellow">{s.v}</div>
              <div className="font-mono text-[10px] text-white/35 uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
