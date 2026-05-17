'use client'

import { motion } from 'framer-motion'

interface Metric {
  label: string
  value: string | number
  unit?: string
  color?: 'yellow' | 'green' | 'white'
}

interface AnalyticsCardProps {
  index: number
  title: string
  subtitle: string
  scenario: string
  metrics: Metric[]
  labels: Array<{ label: string; color: string; x: string; y: string; w: string; h: string }>
  accentColor?: 'yellow' | 'green'
}

export default function AnalyticsCard({
  index,
  title,
  subtitle,
  scenario,
  metrics,
  labels,
  accentColor = 'yellow',
}: AnalyticsCardProps) {
  const accent = accentColor === 'yellow' ? '#FFD400' : '#00FF88'
  const accentDim = accentColor === 'yellow' ? 'rgba(255,212,0,0.1)' : 'rgba(0,255,136,0.1)'

  return (
    <motion.div
      className="relative border border-white/08 bg-black-card overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ borderColor: `${accent}30` }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/05">
        <div className="flex items-center gap-2">
          <div className="live-dot scale-75" />
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: accent }}>
            {scenario}
          </span>
        </div>
        <div className="font-mono text-[9px] text-white/25">
          STREAM #{String(index + 1).padStart(3, '0')}
        </div>
      </div>

      {/* Video placeholder area */}
      <div className="relative video-placeholder aspect-video overflow-hidden">
        {/* Replace this div with: <video src="/videos/scene.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" /> */}

        {/* Animated bg gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(ellipse at 30% 50%, ${accentDim} 0%, transparent 60%)`,
              `radial-gradient(ellipse at 70% 50%, ${accentDim} 0%, transparent 60%)`,
              `radial-gradient(ellipse at 30% 50%, ${accentDim} 0%, transparent 60%)`,
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="scan-line" />
        </div>

        {/* Simulated bounding boxes */}
        {labels.map((lb, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: lb.x, top: lb.y, width: lb.w, height: lb.h }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2 }}
          >
            <motion.div
              className="w-full h-full"
              style={{ border: `1px solid ${lb.color}` }}
              animate={{
                borderColor: [
                  lb.color.replace('1)', '0.6)'),
                  lb.color,
                  lb.color.replace('1)', '0.6)'),
                ],
              }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div
              className="absolute -top-4 left-0 px-1 font-mono text-[8px] font-bold"
              style={{ background: lb.color, color: '#000' }}
            >
              {lb.label}
            </div>
          </motion.div>
        ))}

        {/* Corner HUD brackets */}
        <div className="absolute inset-2 pointer-events-none">
          {['tl', 'tr', 'bl', 'br'].map(c => (
            <div
              key={c}
              className={`absolute w-5 h-5 ${
                c === 'tl' ? 'top-0 left-0' :
                c === 'tr' ? 'top-0 right-0' :
                c === 'bl' ? 'bottom-0 left-0' :
                'bottom-0 right-0'
              }`}
            >
              <svg viewBox="0 0 20 20" className="w-full h-full" fill="none">
                <path
                  d={
                    c === 'tl' ? 'M 0 10 L 0 0 L 10 0' :
                    c === 'tr' ? 'M 10 0 L 20 0 L 20 10' :
                    c === 'bl' ? 'M 0 10 L 0 20 L 10 20' :
                    'M 10 20 L 20 20 L 20 10'
                  }
                  stroke={accent}
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  opacity="0.6"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-20 group-hover:opacity-10 transition-opacity">
          <svg className="w-10 h-10 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.89L15 14M4 8h11a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/>
          </svg>
          <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">VIDEO FEED</span>
        </div>

        {/* FPS indicator */}
        <div className="absolute bottom-2 left-2 font-mono text-[9px] text-green/60">
          30 FPS
        </div>

        {/* REC indicator */}
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-red-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="font-mono text-[8px] text-white/40">REC</span>
        </div>
      </div>

      {/* Card footer: metrics */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-rajdhani font-bold text-base text-white uppercase tracking-wide">{title}</h3>
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-0.5">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {metrics.map(m => (
            <div key={m.label} className="bg-white/03 border border-white/05 p-2">
              <div className={`font-orbitron text-sm font-bold ${
                m.color === 'yellow' ? 'text-yellow' : m.color === 'green' ? 'text-green' : 'text-white'
              }`}>
                {m.value}{m.unit}
              </div>
              <div className="font-mono text-[8px] text-white/30 mt-0.5 uppercase">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover glow border */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `inset 0 0 30px ${accentDim}`,
        }}
      />
    </motion.div>
  )
}
