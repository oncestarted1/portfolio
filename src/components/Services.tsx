import { useState } from 'react'
import { motion } from 'motion/react'
import { Monitor, LayoutGrid, ShoppingBag, Zap, BarChart3, Share2 } from 'lucide-react'

const automations = [
  { label: 'Reporte de ventas diario', hours: 3 },
  { label: 'Alerta de stock bajo', hours: 2 },
  { label: 'Actualización de planilla Excel', hours: 4 },
  { label: 'Respuesta automática por WhatsApp', hours: 2 },
  { label: 'Email de seguimiento a clientes', hours: 3 },
  { label: 'Cierre de caja automático', hours: 2 },
]

function AutomationCalc() {
  const [selected, setSelected] = useState<number[]>([])

  const toggle = (i: number) =>
    setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])

  const totalHours = selected.reduce((acc, i) => acc + automations[i].hours, 0)

  return (
    <div className="flex flex-col gap-3 h-full">
      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary">
        ¿Qué hacés a mano hoy?
      </p>
      <ul className="flex flex-col gap-2 flex-1">
        {automations.map((a, i) => (
          <li
            key={i}
            onClick={() => toggle(i)}
            className={`flex items-center gap-3 px-3.5 py-2.5 border rounded-xl cursor-pointer transition-all duration-200 select-none ${
              selected.includes(i)
                ? 'border-primary bg-primary/8 text-on-surface'
                : 'border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5'
            }`}
          >
            <span className={`text-sm font-bold w-4 text-center flex-shrink-0 ${selected.includes(i) ? 'text-primary' : 'text-on-surface-variant'}`}>
              {selected.includes(i) ? '✓' : '+'}
            </span>
            <span className="text-sm text-on-surface flex-1">{a.label}</span>
            <span className={`text-xs font-medium whitespace-nowrap ${selected.includes(i) ? 'text-primary' : 'text-on-surface-variant'}`}>
              {a.hours}hs/sem
            </span>
          </li>
        ))}
      </ul>
      <div
        className={`px-4 py-3.5 rounded-xl text-sm leading-relaxed transition-all duration-300 ${
          totalHours > 0
            ? 'bg-primary/10 border border-primary/30 text-on-surface'
            : 'bg-surface-container border border-dashed border-outline-variant/40 text-on-surface-variant'
        }`}
      >
        {totalHours > 0 ? (
          <>
            Perdés <strong className="text-primary">{totalHours}hs</strong> por semana — eso es{' '}
            <strong className="text-primary">{totalHours * 4}hs</strong> al mes que puedo darte de vuelta.
          </>
        ) : (
          'Seleccioná las tareas que hacés manualmente'
        )}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary flex items-center gap-3 mb-4">
          <span className="w-7 h-px bg-primary" />
          Servicios
        </p>
        <h2
          className="font-headline font-black text-on-surface leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          Lo que hago
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">

        {/* Landing Pages — large card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 border border-outline-variant/10 shadow-[0_20px_40px_rgba(56,56,51,0.06)]"
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-2">01</p>
              <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Landing Pages</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Sitios rápidos, elegantes y orientados a conversión para negocios, profesionales y emprendedores.
                Diseño que convierte visitas en clientes reales.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {['HTML', 'CSS', 'React'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 min-h-[200px] rounded-2xl bg-surface-container-low flex items-center justify-center">
            <div className="text-center p-8">
              <div className="flex gap-3 mb-4 justify-center">
                <BarChart3 className="w-8 h-8 text-primary/40" />
                <Share2 className="w-8 h-8 text-primary/40" />
              </div>
              <p className="text-3xl font-headline font-black text-primary">+3x</p>
              <p className="text-xs text-on-surface-variant font-medium tracking-wider uppercase mt-1">Tasa de conversión</p>
            </div>
          </div>
        </motion.div>

        {/* Apps de Gestión — small card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="col-span-12 lg:col-span-4 bg-surface-container rounded-[3rem] p-10 flex flex-col justify-between border border-outline-variant/5"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center mb-6">
              <LayoutGrid className="w-6 h-6 text-on-secondary-container" />
            </div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-2">02</p>
            <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Apps de Gestión</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Sistemas de inventario, stock, ventas y caja a medida. Reemplazo de planillas por una app real.
            </p>
          </div>
          <div className="mt-10 space-y-3">
            {[
              { icon: LayoutGrid, label: 'Inventario en tiempo real' },
              { icon: BarChart3, label: 'Analíticas integradas', offset: true },
              { icon: Zap, label: 'Acceso desde cualquier lugar' },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-2xl bg-surface-container-lowest shadow-sm ${item.offset ? 'translate-x-4' : ''}`}
              >
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-on-surface-variant" />
                </div>
                <span className="font-bold text-sm text-on-surface">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Automatizaciones — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-12 bg-surface-container-low rounded-[3rem] p-10 md:p-12 grid md:grid-cols-2 gap-10 border border-outline-variant/10"
        >
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-2">04</p>
              <h3 className="font-headline text-4xl font-bold mb-6 text-on-surface">Automatizaciones</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Eliminá tareas repetitivas: reportes automáticos, alertas, integraciones entre sistemas y
                flujos que trabajan mientras vos no.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap mt-8">
              {['n8n', 'Zapier', 'API'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
            <AutomationCalc />
          </div>
        </motion.div>

        {/* Tiendas Online */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-12 bg-surface-container rounded-[3rem] p-10 md:p-12 flex flex-col md:flex-row justify-between gap-8 items-center border border-white/6"
        >
          <div className="flex-1">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-2">03</p>
            <h3 className="font-headline text-4xl font-bold mb-4 text-on-surface">Tiendas Online</h3>
            <p className="text-on-surface-variant leading-relaxed max-w-lg">
              Catálogos y e-commerce para vender por internet. Integración con Mercado Pago y WhatsApp para
              que tu tienda venda las 24hs.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-col">
            {['React', 'E-commerce', 'MercadoPago'].map(t => (
              <span key={t} className="px-4 py-2 rounded-full bg-white/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-wider border border-white/8">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
