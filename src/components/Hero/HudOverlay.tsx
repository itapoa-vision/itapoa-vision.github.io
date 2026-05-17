'use client'

import { motion } from 'framer-motion'

export default function HudOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Corner brackets */}
      {[
        'top-8 left-8',
        'top-8 right-8 rotate-90',
        'bottom-8 left-8 -rotate-90',
        'bottom-8 right-8 rotate-180',
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-10 h-10`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
        >
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 20 L 0 0 L 20 0" stroke="#FFD400" strokeWidth="1.5" strokeLinecap="square"/>
          </svg>
        </motion.div>
      ))}

      {/* Top-left HUD data block */}
      <motion.div
        className="absolute top-8 left-20 flex flex-col gap-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex items-center gap-2">
          <div className="live-dot" />
          <span className="font-mono text-[10px] text-green uppercase tracking-widest animate-flicker">SISTEMA ATIVO</span>
        </div>
        <div className="font-mono text-[9px] text-white/30 tracking-wider">CAM-NET / 0x4A9F</div>
        <div className="font-mono text-[9px] text-white/30 tracking-wider">LAT -26.114° LON -48.609°</div>
      </motion.div>

      {/* Top-right: timestamp + signal */}
      <motion.div
        className="absolute top-8 right-20 flex flex-col items-end gap-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <div className="font-mono text-[10px] text-white/40 tracking-widest animate-flicker">
          2026-01-17 // 14:32:07 UTC
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(b => (
              <div key={b} className={`w-1 ${b <= 4 ? 'bg-green h-3' : 'bg-white/20 h-3'}`} />
            ))}
          </div>
          <span className="font-mono text-[9px] text-green">SIGNAL 98%</span>
        </div>
      </motion.div>

      {/* Bottom center: scan status */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="h-px w-16 bg-white/20" />
        <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.3em]">
          URBAN INTELLIGENCE LAYER / ACTIVE
        </span>
        <div className="h-px w-16 bg-white/20" />
      </motion.div>

      {/* Radar (bottom right) */}
      <motion.div
        className="absolute bottom-16 right-12 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Concentric circles */}
            {[36, 26, 16].map(r => (
              <circle key={r} cx="40" cy="40" r={r} stroke="rgba(0,255,136,0.2)" strokeWidth="0.5"/>
            ))}
            {/* Crosshairs */}
            <line x1="40" y1="4" x2="40" y2="76" stroke="rgba(0,255,136,0.15)" strokeWidth="0.5"/>
            <line x1="4" y1="40" x2="76" y2="40" stroke="rgba(0,255,136,0.15)" strokeWidth="0.5"/>
            {/* Blips */}
            <circle cx="52" cy="28" r="2" fill="#00FF88" opacity="0.8"/>
            <circle cx="30" cy="50" r="1.5" fill="#FFD400" opacity="0.7"/>
            <circle cx="58" cy="52" r="1.5" fill="#00FF88" opacity="0.5"/>
          </svg>
          {/* Rotating sweep */}
          <div className="absolute inset-0 animate-radar" style={{ transformOrigin: '50% 50%' }}>
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M 40 40 L 40 4"
                stroke="rgba(0,255,136,0.6)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M 40 40 L 40 4"
                stroke="rgba(0,255,136,0.15)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 font-mono text-[8px] text-green/60">RADAR</div>
        </div>
      </motion.div>

      {/* Left side: vertical metrics */}
      <motion.div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        {[
          { label: 'OBJ/S', value: '127' },
          { label: 'FPS', value: '30' },
          { label: 'ACC', value: '97%' },
        ].map(m => (
          <div key={m.label} className="flex flex-col items-center">
            <div className="font-orbitron text-xs font-bold text-yellow">{m.value}</div>
            <div className="font-mono text-[7px] text-white/30 tracking-widest">{m.label}</div>
          </div>
        ))}
        <div className="w-px h-12 bg-white/10 mx-auto mt-1" />
      </motion.div>
    </div>
  )
}
