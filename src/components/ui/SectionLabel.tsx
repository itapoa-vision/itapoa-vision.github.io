'use client'

import { motion } from 'framer-motion'

interface SectionLabelProps {
  children: React.ReactNode
  color?: 'yellow' | 'green' | 'white'
  className?: string
}

export default function SectionLabel({ children, color = 'yellow', className = '' }: SectionLabelProps) {
  const colorClass = {
    yellow: 'text-yellow border-yellow/30',
    green: 'text-green border-green/30',
    white: 'text-white/50 border-white/20',
  }

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-8 h-px ${color === 'yellow' ? 'bg-yellow' : color === 'green' ? 'bg-green' : 'bg-white/40'}`} />
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.25em] ${colorClass[color]}`}
      >
        {children}
      </span>
    </motion.div>
  )
}
