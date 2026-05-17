'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'

const useCases = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0"/>
        <path d="M12 8v4l3 3"/>
        <path d="M3.6 9h16.8M3.6 15h16.8"/>
      </svg>
    ),
    title: 'Segurança na Praia',
    desc: 'Monitoramento 24/7 de lotação, bandeiras de segurança e movimentos suspeitos em praias e orla.',
    metric: '98%',
    metricLabel: 'Redução de Incidentes',
    color: 'yellow',
    tags: ['Afogamento', 'Lotação', 'Orla'],
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 3v18"/>
        <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: 'Planejamento Urbano',
    desc: 'Dados de fluxo de pessoas, ocupação de espaços e padrões de movimento para decisões de infraestrutura.',
    metric: '3x',
    metricLabel: 'Velocidade de Decisão',
    color: 'green',
    tags: ['Fluxo', 'Ocupação', 'Padrões'],
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
        <path d="M13 21l4-4 4 4M17 17v4"/>
        <circle cx="9" cy="10" r="2"/>
      </svg>
    ),
    title: 'Turismo Analytics',
    desc: 'Análise de fluxo turístico, pontos de interesse e sazonalidade para suporte a políticas de turismo.',
    metric: '45%',
    metricLabel: 'Mais Eficiência Operacional',
    color: 'yellow',
    tags: ['Turistas', 'Pontos', 'Sazonalidade'],
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Inteligência de Tráfego',
    desc: 'Contagem veicular, tempo médio de viagem, detecção de gargalos e sincronização de semáforos.',
    metric: '32%',
    metricLabel: 'Redução de Congestionamento',
    color: 'green',
    tags: ['Veículos', 'Semáforos', 'Fluxo'],
  },
  {
    number: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 20h20M4 20V10l8-8 8 8v10"/>
        <path d="M9 20v-6h6v6"/>
        <path d="M15 14h.01M9 14h.01"/>
      </svg>
    ),
    title: 'Manutenção de Vias',
    desc: 'Detecção automática de buracos, trincas e danos em pavimentação com roteamento de equipes de manutenção.',
    metric: '60%',
    metricLabel: 'Menos Custo de Manutenção',
    color: 'yellow',
    tags: ['Buracos', 'Trincas', 'Pavimento'],
  },
  {
    number: '06',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8l5 2v5h-5V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Logística Portuária',
    desc: 'Rastreamento de caminhões, containers e ativos portuários. Otimização de pátio e tempos de operação.',
    metric: '28%',
    metricLabel: 'Ganho em Throughput',
    color: 'green',
    tags: ['Porto', 'Containers', 'Frota'],
  },
]

export default function SmartCity() {
  return (
    <section id="smartcity" className="relative py-24 lg:py-32 bg-[#020202]">
      <div className="absolute inset-0 city-grid-bg opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel color="green" className="mb-4">IMPACTO URBANO REAL</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h2
              className="font-rajdhani font-bold text-display text-white uppercase"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              SMART CITY
            </motion.h2>
            <motion.p
              className="max-w-xs font-barlow text-white/40 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Inteligência artificial aplicada a cada dimensão da cidade — de praias a portos, de ruas a edifícios.
            </motion.p>
          </div>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.number}
              className="relative border border-white/06 bg-black p-6 group hover:border-yellow/20 transition-all duration-400 overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              {/* Number */}
              <div
                className="absolute top-4 right-4 font-orbitron font-bold text-4xl opacity-05 pointer-events-none select-none"
                style={{ color: uc.color === 'yellow' ? '#FFD400' : '#00FF88' }}
              >
                {uc.number}
              </div>

              {/* Icon */}
              <div className={`mb-4 ${uc.color === 'yellow' ? 'text-yellow' : 'text-green'}`}>
                {uc.icon}
              </div>

              <h3 className="font-rajdhani font-bold text-lg text-white uppercase tracking-wide mb-2">
                {uc.title}
              </h3>
              <p className="font-barlow text-sm text-white/40 leading-relaxed mb-5">{uc.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {uc.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 bg-white/04 border border-white/08 text-white/35"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metric */}
              <div className="border-t border-white/06 pt-4 flex items-end justify-between">
                <div>
                  <div className={`font-orbitron font-bold text-2xl ${uc.color === 'yellow' ? 'text-yellow' : 'text-green'}`}>
                    {uc.metric}
                  </div>
                  <div className="font-mono text-[9px] text-white/30 uppercase tracking-wider mt-0.5">
                    {uc.metricLabel}
                  </div>
                </div>
                <div className={`w-8 h-8 flex items-center justify-center ${
                  uc.color === 'yellow' ? 'bg-yellow/08 text-yellow' : 'bg-green/08 text-green'
                }`}>
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 13 L13 3 M7 3 h6 v6"/>
                  </svg>
                </div>
              </div>

              {/* Bottom line animation */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                  uc.color === 'yellow' ? 'bg-yellow/40' : 'bg-green/40'
                }`}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
