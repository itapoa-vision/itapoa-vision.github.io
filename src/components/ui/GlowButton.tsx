'use client'

import { motion } from 'framer-motion'

interface GlowButtonProps {
  children: React.ReactNode
  variant?: 'yellow' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
}

export default function GlowButton({
  children,
  variant = 'yellow',
  size = 'md',
  onClick,
  href,
  className = '',
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variantClasses = {
    yellow: 'bg-yellow text-black font-semibold hover:bg-yellow/90',
    outline: 'bg-transparent border border-white/20 text-white hover:border-yellow/60 hover:text-yellow',
    ghost: 'bg-white/5 border border-white/10 text-white hover:bg-white/10',
  }

  const glowShadow = {
    yellow: '0 0 20px rgba(255,212,0,0.4), 0 0 40px rgba(255,212,0,0.15)',
    outline: '0 0 20px rgba(255,212,0,0.2)',
    ghost: '0 0 10px rgba(255,255,255,0.1)',
  }

  const baseClass = `
    relative inline-flex items-center gap-2 font-mono tracking-widest uppercase
    transition-all duration-300 cursor-pointer select-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `

  const content = (
    <motion.span
      className={baseClass}
      whileHover={{
        scale: 1.03,
        boxShadow: glowShadow[variant],
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return <button onClick={onClick}>{content}</button>
}
