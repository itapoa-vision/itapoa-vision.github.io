'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

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
  videoSrc?: string
  videoVertical?: boolean
  credit?: string
  creditUrl?: string
}

function VideoModal({
  open,
  onClose,
  title,
  subtitle,
  scenario,
  metrics,
  videoSrc,
  videoVertical,
  accent,
  accentDim,
}: {
  open: boolean
  onClose: () => void
  title: string
  subtitle: string
  scenario: string
  metrics: Metric[]
  videoSrc?: string
  videoVertical?: boolean
  accent: string
  accentDim: string
}) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <motion.div
            className="relative z-10 w-full max-w-4xl border border-white/10 bg-black overflow-hidden"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/08">
              <div className="flex items-center gap-2">
                <div className="live-dot scale-75" />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: accent }}>
                  {scenario}
                </span>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-[11px] text-white/40 hover:text-white/80 transition-colors px-2 py-1"
              >
                ESC ✕
              </button>
            </div>

            {/* Video */}
            <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
              {videoSrc && (
                <>
                  {videoVertical && (
                    <video
                      src={videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover scale-110"
                      style={{ filter: 'blur(18px)', opacity: 0.6 }}
                    />
                  )}
                  <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 w-full h-full z-10 ${videoVertical ? 'object-contain' : 'object-cover'}`}
                  />
                </>
              )}
              {/* REC */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="font-mono text-[8px] text-white/40">REC</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5">
              <h3 className="font-rajdhani font-bold text-lg text-white uppercase tracking-wide">{title}</h3>
              <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-0.5 mb-4">{subtitle}</p>
              <div className="grid grid-cols-3 gap-2">
                {metrics.map(m => (
                  <div key={m.label} className="bg-white/03 border border-white/05 p-3">
                    <div className={`font-orbitron text-base font-bold ${
                      m.color === 'yellow' ? 'text-yellow' : m.color === 'green' ? 'text-green' : 'text-white'
                    }`}>
                      {m.value}{m.unit}
                    </div>
                    <div className="font-mono text-[8px] text-white/30 mt-0.5 uppercase">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function AnalyticsCard({
  index,
  title,
  subtitle,
  scenario,
  metrics,
  labels,
  accentColor = 'yellow',
  videoSrc,
  videoVertical = false,
  credit,
  creditUrl,
}: AnalyticsCardProps) {
  const accent = accentColor === 'yellow' ? '#FFD400' : '#00FF88'
  const accentDim = accentColor === 'yellow' ? 'rgba(255,212,0,0.1)' : 'rgba(0,255,136,0.1)'
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <VideoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        subtitle={subtitle}
        scenario={scenario}
        metrics={metrics}
        videoSrc={videoSrc}
        videoVertical={videoVertical}
        accent={accent}
        accentDim={accentDim}
      />

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

        {/* Video area */}
        <div
          className="relative video-placeholder aspect-video overflow-hidden cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          {videoSrc ? (
            <>
              {videoVertical && (
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                  style={{ filter: 'blur(18px)', opacity: 0.6 }}
                />
              )}
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full z-10 ${videoVertical ? 'object-contain' : 'object-cover'}`}
              />
              {/* Expand hint */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="flex items-center gap-2 bg-black/60 border border-white/20 px-3 py-1.5">
                  <svg className="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  <span className="font-mono text-[9px] text-white/70 uppercase tracking-widest">Expandir</span>
                </div>
              </div>
            </>
          ) : (
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
          )}

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
          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity ${videoSrc ? 'opacity-0 pointer-events-none' : 'opacity-20 group-hover:opacity-10'}`}>
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

          {/* Credit */}
          {credit && creditUrl && (
            <a
              href={creditUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="absolute bottom-2 right-2 z-20 font-mono text-[11px] text-white/50 hover:text-white/80 transition-colors bg-black/50 px-1.5 py-0.5"
            >
              {credit}
            </a>
          )}
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
    </>
  )
}
