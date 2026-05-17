'use client'

import { motion } from 'framer-motion'
import LighthouseLogo from '../ui/LighthouseLogo'

const footerLinks = {
  Plataforma: ['Analytics ao Vivo', 'Dashboard', 'Alertas', 'API'],
  Soluções: ['Praia & Costeiro', 'Tráfego & Vias', 'Porto & Logística', 'Segurança Urbana'],
  Empresa: ['Sobre', 'Tecnologia', 'Parceiros', 'Contato'],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#020202] border-t border-white/05 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 city-grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Top: logo + links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LighthouseLogo size={34} />
              <div>
                <div className="font-orbitron font-bold text-base tracking-widest text-white">ITAPOÁ</div>
                <div className="font-mono text-[9px] tracking-[0.4em] text-white/35 -mt-0.5">VISION</div>
              </div>
            </div>
            <p className="font-barlow text-sm text-white/35 leading-relaxed max-w-xs mb-6">
              Transformando câmeras em inteligência urbana. Plataforma de IA para cidades, infraestrutura e segurança pública.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  name: 'LinkedIn',
                  icon: (
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"/>
                  ),
                },
                {
                  name: 'GitHub',
                  icon: (
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                  ),
                },
                {
                  name: 'Twitter',
                  icon: (
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  ),
                },
              ].map(social => (
                <a
                  key={social.name}
                  href="#"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/35 hover:text-yellow hover:border-yellow/30 transition-all duration-200"
                  aria-label={social.name}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-yellow/60 mb-4">{category}</div>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-barlow text-sm text-white/35 hover:text-white/80 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/05 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="live-dot scale-75" />
            <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">
              TODOS OS SISTEMAS OPERACIONAIS
            </span>
          </div>
          <div className="font-mono text-[9px] text-white/20 uppercase tracking-wider">
            © 2026 ITAPOÁ VISION — TODOS OS DIREITOS RESERVADOS
          </div>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-[9px] text-white/25 hover:text-white/50 uppercase tracking-wider transition-colors">Privacidade</a>
            <a href="#" className="font-mono text-[9px] text-white/25 hover:text-white/50 uppercase tracking-wider transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
