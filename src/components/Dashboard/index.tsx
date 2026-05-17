'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import AnimatedCounter from '../ui/AnimatedCounter'

const barData = [
  { label: '08h', value: 62, detections: 8420 },
  { label: '09h', value: 78, detections: 10580 },
  { label: '10h', value: 85, detections: 11540 },
  { label: '11h', value: 91, detections: 12340 },
  { label: '12h', value: 100, detections: 13580 },
  { label: '13h', value: 94, detections: 12760 },
  { label: '14h', value: 88, detections: 11940 },
  { label: '15h', value: 76, detections: 10320 },
]

const alerts = [
  { time: '14:31:07', type: 'AGLOMERAÇÃO', location: 'Beira Mar 4 - Itapema do Norte / CAM-04', severity: 'high' },
  { time: '14:28:43', type: 'BURACO DETECTADO', location: 'Rua 1790, Continental / Drone-02', severity: 'medium' },
  { time: '14:25:19', type: 'TRÁFEGO INTENSO', location: 'Av. Celso Ramos / Cam-12', severity: 'low' },
  { time: '14:22:55', type: 'EMBARCAÇÃO', location: 'Porto Itapoá / Cam-07', severity: 'low' },
  { time: '14:18:30', type: 'ACIDENTE', location: 'Av. do Principe / Cam-03', severity: 'high' },
]

const cameraStatuses = [
  { id: 'CAM-001', location: 'Farol de Itapoá', status: 'online', fps: 30, detections: 127 },
  { id: 'CAM-002', location: 'Praia Central', status: 'online', fps: 30, detections: 89 },
  { id: 'CAM-003', location: 'Av. Celso Ramos', status: 'online', fps: 25, detections: 234 },
  { id: 'DRN-001', location: 'Setor Portuário', status: 'online', fps: 30, detections: 56 },
  { id: 'CAM-015', location: 'Rua 1790, Continental', status: 'maintenance', fps: 0, detections: 0 },
]

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-24 lg:py-32 bg-[#020202]">
      <div className="absolute inset-0 city-grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <SectionLabel color="yellow" className="mb-4">PAINEL DE COMANDO</SectionLabel>
          <motion.h2
            className="font-rajdhani font-bold text-display text-white uppercase"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            CENTRO DE<br />
            <span className="text-yellow">INTELIGÊNCIA</span>
          </motion.h2>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'DETECÇÕES HOJE', value: 284730, suffix: '', color: 'text-yellow', icon: '◈' },
            { label: 'CÂMERAS ONLINE', value: 2831, suffix: '', color: 'text-green', icon: '◉' },
            { label: 'ALERTAS ATIVOS', value: 124, suffix: '', color: 'text-white', icon: '◬' },
            { label: 'UPTIME', value: 99.97, suffix: '%', color: 'text-green', icon: '◍' },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="glass-dark border border-white/06 p-4 relative overflow-hidden group hover:border-yellow/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">{kpi.label}</span>
                <span className={`text-base ${kpi.color} opacity-60`}>{kpi.icon}</span>
              </div>
              <div className={`font-orbitron font-bold text-2xl lg:text-3xl ${kpi.color}`}>
                <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
              </div>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Charts + alerts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
          {/* Bar chart — span 2 cols */}
          <motion.div
            className="lg:col-span-2 glass-dark border border-white/06 p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-[10px] text-white/35 uppercase tracking-widest">DETECÇÕES POR HORA</div>
                <div className="font-orbitron font-bold text-lg text-white mt-1">Hoje — 17 Jan 2026</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="live-dot scale-75" />
                <span className="font-mono text-[9px] text-green">AO VIVO</span>
              </div>
            </div>
            {/* Chart */}
            <div className="flex items-end gap-2 h-32">
              {barData.map((bar, i) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center gap-1 group/bar">
                  <div className="relative w-full flex items-end" style={{ height: '100px' }}>
                    <motion.div
                      className="w-full relative overflow-hidden"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        transformOrigin: 'bottom',
                        height: `${bar.value}%`,
                        background: `linear-gradient(to top, rgba(255,212,0,0.85), rgba(255,212,0,0.2))`,
                      }}
                    >
                      {/* Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/bar:translate-x-full transition-transform duration-700" />
                    </motion.div>
                    {/* Tooltip */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-yellow text-black font-mono text-[8px] px-1 py-0.5 opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {bar.detections.toLocaleString()}
                    </div>
                  </div>
                  <div className="font-mono text-[9px] text-white/30">{bar.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Alerts feed */}
          <motion.div
            className="glass-dark border border-white/06 p-5 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-[10px] text-white/35 uppercase tracking-widest">ALERTAS RECENTES</div>
              <div className="flex items-center gap-1.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="font-mono text-[8px] text-red-400">5 ATIVOS</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 overflow-hidden">
              {alerts.map((alert, i) => (
                <motion.div
                  key={i}
                  className={`p-2 border-l-2 ${
                    alert.severity === 'high' ? 'border-red-500 bg-red-500/05' :
                    alert.severity === 'medium' ? 'border-yellow bg-yellow/03' :
                    'border-white/20 bg-white/02'
                  }`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`font-mono text-[9px] font-bold ${
                      alert.severity === 'high' ? 'text-red-400' :
                      alert.severity === 'medium' ? 'text-yellow' : 'text-white/60'
                    }`}>
                      {alert.type}
                    </span>
                    <span className="font-mono text-[8px] text-white/25">{alert.time}</span>
                  </div>
                  <div className="font-mono text-[8px] text-white/35">{alert.location}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Camera status table */}
        <motion.div
          className="glass-dark border border-white/06"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/05">
            <div className="font-mono text-[10px] text-white/35 uppercase tracking-widest">STATUS DA REDE DE CÂMERAS</div>
            <div className="font-mono text-[9px] text-white/25">2,847 CÂMERAS REGISTRADAS</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/05">
                  {['ID', 'LOCALIZAÇÃO', 'STATUS', 'FPS', 'DET/MIN'].map(h => (
                    <th key={h} className="px-5 py-2 text-left font-mono text-[9px] text-white/25 uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cameraStatuses.map((cam, i) => (
                  <tr key={cam.id} className="border-b border-white/03 hover:bg-white/02 transition-colors">
                    <td className="px-5 py-3 font-orbitron text-xs text-yellow">{cam.id}</td>
                    <td className="px-5 py-3 font-barlow text-sm text-white/60">{cam.location}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${cam.status === 'online' ? 'bg-green' : 'bg-yellow'}`} />
                        <span className={`font-mono text-[9px] uppercase ${cam.status === 'online' ? 'text-green' : 'text-yellow'}`}>
                          {cam.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 font-orbitron text-xs text-white/50">{cam.fps}</td>
                    <td className="px-5 py-3 font-orbitron text-xs text-white/50">{cam.detections}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
