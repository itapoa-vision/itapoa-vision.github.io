'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface BBox {
  id: number
  label: string
  confidence: number
  color: string
  x: string
  y: string
  w: string
  h: string
  delay: number
}

const boxes: BBox[] = [
  { id: 1, label: 'PESSOA', confidence: 98, color: 'yellow', x: '12%', y: '32%', w: '8%', h: '18%', delay: 0.2 },
  { id: 2, label: 'VEÍCULO', confidence: 95, color: 'green', x: '55%', y: '50%', w: '14%', h: '10%', delay: 0.5 },
  { id: 3, label: 'DRONE', confidence: 91, color: 'yellow', x: '70%', y: '20%', w: '7%', h: '6%', delay: 0.8 },
  { id: 4, label: 'PESSOA', confidence: 96, color: 'yellow', x: '30%', y: '28%', w: '7%', h: '17%', delay: 1.0 },
  { id: 5, label: 'EMBARCAÇÃO', confidence: 88, color: 'green', x: '20%', y: '60%', w: '16%', h: '8%', delay: 1.3 },
  { id: 6, label: 'CÂMERA', confidence: 99, color: 'green', x: '82%', y: '38%', w: '6%', h: '5%', delay: 0.6 },
]

function BBoxItem({ box }: { box: BBox }) {
  const borderColor = box.color === 'yellow'
    ? 'rgba(255,212,0,0.8)'
    : 'rgba(0,255,136,0.8)'
  const labelBg = box.color === 'yellow'
    ? 'rgba(255,212,0,0.9)'
    : 'rgba(0,255,136,0.9)'
  const textColor = box.color === 'yellow' ? '#000' : '#000'

  return (
    <motion.div
      className="absolute"
      style={{ left: box.x, top: box.y, width: box.w, height: box.h }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: box.delay + 1.0 }}
    >
      {/* Main box */}
      <motion.div
        className="absolute inset-0"
        style={{ border: `1px solid ${borderColor}` }}
        animate={{
          borderColor: [borderColor, borderColor.replace('0.8', '1'), borderColor],
          boxShadow: [
            `0 0 0 rgba(0,0,0,0)`,
            `0 0 8px ${borderColor.replace('0.8', '0.4')}`,
            `0 0 0 rgba(0,0,0,0)`,
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Corner ticks */}
        {['tl', 'tr', 'bl', 'br'].map(c => (
          <div
            key={c}
            className={`absolute w-2 h-2 ${
              c === 'tl' ? '-top-0.5 -left-0.5 border-t border-l' :
              c === 'tr' ? '-top-0.5 -right-0.5 border-t border-r' :
              c === 'bl' ? '-bottom-0.5 -left-0.5 border-b border-l' :
              '-bottom-0.5 -right-0.5 border-b border-r'
            }`}
            style={{ borderColor }}
          />
        ))}
      </motion.div>

      {/* Label */}
      <div
        className="absolute -top-4 left-0 px-1 py-0.5 flex items-center gap-1"
        style={{ background: labelBg }}
      >
        <span className="font-mono text-[8px] font-bold" style={{ color: textColor }}>
          {box.label}
        </span>
        <span className="font-mono text-[7px]" style={{ color: textColor, opacity: 0.8 }}>
          {box.confidence}%
        </span>
      </div>
    </motion.div>
  )
}

export default function BoundingBoxes() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {boxes.map(box => (
        <BBoxItem key={box.id} box={box} />
      ))}

      {/* Detection count HUD */}
      <motion.div
        className="absolute top-24 right-8 glass-dark p-3 flex flex-col gap-1.5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
      >
        <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest">DETECÇÕES ATIVAS</div>
        <div className="font-orbitron text-xl font-bold text-yellow">247</div>
        <div className="flex items-center gap-1.5">
          <div className="live-dot scale-75" />
          <span className="font-mono text-[8px] text-green">PROCESSANDO</span>
        </div>
        <div className="w-full h-px bg-white/10 my-0.5" />
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {[
            { k: 'PESSOAS', v: '184' },
            { k: 'VEÍCULOS', v: '43' },
            { k: 'DRONES', v: '12' },
            { k: 'OUTROS', v: '8' },
          ].map(item => (
            <div key={item.k}>
              <div className="font-mono text-[7px] text-white/30">{item.k}</div>
              <div className="font-orbitron text-[10px] text-white font-bold">{item.v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
