'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'

const pipeline = [
  {
    id: '01',
    label: 'CAPTURA',
    title: 'Rede de Câmeras',
    desc: 'Câmeras IP, drones e sensores IoT em campo. Alta resolução, baixa latência.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.89L15 14M4 8h11a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/>
      </svg>
    ),
  },
  {
    id: '02',
    label: 'BORDA',
    title: 'Edge AI',
    desc: 'Modelos otimizados (ONNX, TensorRT) executam diretamente no dispositivo. Latência < 50ms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <circle cx="8" cy="10" r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: '03',
    label: 'PIPELINE',
    title: 'Dados em Tempo Real',
    desc: 'Stream de eventos estruturados. Kafka, WebSocket e APIs REST para integração.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        <path d="M7 6v12M17 6v12" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: '04',
    label: 'INTELIGÊNCIA',
    title: 'Urban AI Engine',
    desc: 'Fusão de dados multi-câmera. Rastreamento, contagem, alertas e analytics avançados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
]

const techCards = [
  {
    title: 'Computer Vision',
    desc: 'Detecção de objetos, segmentação semântica e rastreamento multi-objeto com modelos YOLO e Transformer-based.',
    tag: 'YOLOv9 / SAM2',
    color: 'yellow',
  },
  {
    title: 'Edge Computing',
    desc: 'Inferência local em NVIDIA Jetson, Raspberry Pi e câmeras inteligentes. Zero latência de rede.',
    tag: 'TensorRT / ONNX',
    color: 'green',
  },
  {
    title: 'Drone Analytics',
    desc: 'Processamento de vídeo aéreo em tempo real. Georreferenciamento automático e cobertura de área ampla.',
    tag: 'GeoAI / UAV',
    color: 'yellow',
  },
  {
    title: 'ML Pipeline',
    desc: 'Treinamento contínuo com dados locais. Modelos especializados para cada cenário urbano brasileiro.',
    tag: 'PyTorch / MLflow',
    color: 'green',
  },
  {
    title: 'Real-time Streaming',
    desc: 'Arquitetura orientada a eventos com Kafka. Milhares de câmeras, uma plataforma, zero downtime.',
    tag: 'Kafka / WebSocket',
    color: 'yellow',
  },
  {
    title: 'Urban Graph',
    desc: 'Modelagem topológica da cidade. Correlação espacial entre câmeras, ruas, praias e infraestrutura.',
    tag: 'Graph DB / PostGIS',
    color: 'green',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* BG decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(255,212,0,0.04)' }} />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(0,255,136,0.04)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <SectionLabel color="yellow" className="mb-4">ARQUITETURA TÉCNICA</SectionLabel>
          <motion.h2
            className="font-rajdhani font-bold text-display text-white uppercase"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            IA DO SENSOR<br />
            <span className="text-yellow">AO INSIGHT</span>
          </motion.h2>
        </div>

        {/* Pipeline flow */}
        <div className="relative mb-20">
          {/* Connecting line */}
          <motion.div
            className="absolute top-10 left-0 right-0 h-px hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,212,0,0.3) 20%, rgba(255,212,0,0.3) 80%, transparent)',
              transformOrigin: 'left',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipeline.map((step, i) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              >
                {/* Node circle */}
                <div className="relative w-20 h-20 mb-5">
                  <div className="absolute inset-0 border border-yellow/20 rounded-full" />
                  <motion.div
                    className="absolute inset-0 border border-yellow/40 rounded-full"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  />
                  <div className="absolute inset-2 bg-yellow/05 border border-yellow/30 rounded-full flex items-center justify-center text-yellow">
                    {step.icon}
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow flex items-center justify-center">
                    <span className="font-orbitron text-[8px] font-bold text-black">{step.id}</span>
                  </div>
                </div>

                <div className="font-mono text-[9px] text-yellow/70 uppercase tracking-widest mb-1">{step.label}</div>
                <h3 className="font-rajdhani font-bold text-lg text-white uppercase tracking-wide mb-2">{step.title}</h3>
                <p className="font-barlow text-sm text-white/40 leading-relaxed">{step.desc}</p>

                {/* Arrow connector (desktop) */}
                {i < pipeline.length - 1 && (
                  <div className="absolute top-10 -right-3 hidden lg:flex items-center justify-center w-6">
                    <svg viewBox="0 0 24 8" className="w-5" fill="none">
                      <path d="M0 4 L18 4 M14 1 L18 4 L14 7" stroke="rgba(255,212,0,0.4)" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech cards grid */}
        <motion.div
          className="h-px bg-white/08 mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="glass-dark border border-white/06 p-5 group hover:border-yellow/20 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              {/* Tag */}
              <div className={`inline-block px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest mb-3 ${
                card.color === 'yellow'
                  ? 'bg-yellow/10 text-yellow border border-yellow/20'
                  : 'bg-green/10 text-green border border-green/20'
              }`}>
                {card.tag}
              </div>
              <h3 className="font-rajdhani font-bold text-base text-white uppercase tracking-wide mb-2">{card.title}</h3>
              <p className="font-barlow text-sm text-white/40 leading-relaxed">{card.desc}</p>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-12 h-12 ${
                card.color === 'yellow' ? 'bg-yellow/03' : 'bg-green/03'
              } opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                card.color === 'yellow' ? 'bg-yellow/30' : 'bg-green/30'
              }`} style={{ transformOrigin: 'left' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
