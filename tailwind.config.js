/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#050505',
        'black-secondary': '#0a0a0a',
        'black-card': '#0d0d0d',
        'black-border': '#1a1a1a',
        yellow: '#FFD400',
        'yellow-dim': 'rgba(255,212,0,0.12)',
        'yellow-glow': 'rgba(255,212,0,0.35)',
        green: '#00FF88',
        'green-dim': 'rgba(0,255,136,0.10)',
        'green-glow': 'rgba(0,255,136,0.30)',
        'white-muted': 'rgba(255,255,255,0.55)',
        'white-subtle': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
      animation: {
        'scan': 'scanline 4s linear infinite',
        'radar': 'radarSpin 4s linear infinite',
        'bbox': 'bboxPulse 2s ease-in-out infinite',
        'glow': 'glowPulse 3s ease-in-out infinite',
        'float': 'floatY 6s ease-in-out infinite',
        'flicker': 'dataFlicker 8s step-start infinite',
        'draw': 'drawLine 1.2s ease-out forwards',
        'fadeUp': 'fadeSlideUp 0.7s ease-out forwards',
        'grid': 'gridPulse 6s ease-in-out infinite',
        'ping-slow': 'ping 3s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        scanline: {
          '0%': { top: '-2px', opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        radarSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        bboxPulse: {
          '0%,100%': { borderColor: 'rgba(255,212,0,0.5)', boxShadow: '0 0 0 rgba(255,212,0,0)' },
          '50%': { borderColor: 'rgba(255,212,0,1)', boxShadow: '0 0 12px rgba(255,212,0,0.4), inset 0 0 8px rgba(255,212,0,0.05)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(0,255,136,0.15), 0 0 40px rgba(0,255,136,0.05)' },
          '50%': { boxShadow: '0 0 40px rgba(0,255,136,0.35), 0 0 80px rgba(0,255,136,0.15)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        dataFlicker: {
          '0%,94%,96%,100%': { opacity: '1' },
          '95%': { opacity: '0.3' },
        },
        drawLine: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        fadeSlideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gridPulse: {
          '0%,100%': { opacity: '0.025' },
          '50%': { opacity: '0.07' },
        },
      },
      backgroundImage: {
        'city-grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
