import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  num: string
  title: string
  type: string
  desc: string
  stack: string[]
  href: string | null
  status: 'Producción' | 'Publicado' | 'En desarrollo'
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Los Yankees Store',
    type: 'App de Gestión',
    desc: 'Sistema completo de inventario, punto de venta y caja para una tienda de indumentaria. Gestión de stock, clientes, gastos y analíticas en tiempo real.',
    stack: ['Vanilla JS', 'Supabase', 'Chart.js'],
    href: null,
    status: 'Producción',
  },
  {
    num: '02',
    title: 'Erika Coach',
    type: 'Landing Page',
    desc: 'Sitio de presentación para coach holística especializada en Registros Akáshicos y Biodecodificación. Diseño premium con animaciones y contacto por WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: null,
    status: 'Publicado',
  },
  {
    num: '03',
    title: 'Panadería OS',
    type: 'App de Gestión',
    desc: 'Sistema operativo para panadería: registro de producción, ventas y stock de insumos. Interfaz moderna construida en React con TypeScript.',
    stack: ['React', 'TypeScript', 'Vite'],
    href: null,
    status: 'En desarrollo',
  },
]

const statusStyles: Record<Project['status'], string> = {
  'Producción': 'bg-green-500/12 text-green-400 border border-green-500/25',
  'Publicado': 'bg-primary/12 text-primary-container border border-primary/25',
  'En desarrollo': 'bg-amber-500/12 text-amber-400 border border-amber-500/25',
}

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary flex items-center gap-3 mb-4">
          <span className="w-7 h-px bg-primary" />
          Portfolio
        </p>
        <h2
          className="font-headline font-black text-on-surface leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          Proyectos reales
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">

        {/* Project 1 — large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-[3rem] p-10 flex flex-col border border-outline-variant/10 shadow-[0_20px_40px_rgba(56,56,51,0.06)] hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="flex justify-between items-start mb-6">
            <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${statusStyles['Producción']}`}>
              Producción
            </span>
            <span className="font-headline text-sm tracking-wider text-on-surface-variant">01</span>
          </div>
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary mb-2">
            {projects[0].type}
          </p>
          <h3 className="font-headline text-4xl font-bold text-on-surface mb-4">{projects[0].title}</h3>
          <p className="text-on-surface-variant leading-relaxed flex-1 mb-8">{projects[0].desc}</p>
          <div className="flex flex-wrap gap-2">
            {projects[0].stack.map(t => (
              <span key={t} className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project 2 — small */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-12 lg:col-span-5 bg-surface-container rounded-[3rem] p-10 flex flex-col border border-outline-variant/5 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="flex justify-between items-start mb-6">
            <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${statusStyles['Publicado']}`}>
              Publicado
            </span>
            <span className="font-headline text-sm tracking-wider text-on-surface-variant">02</span>
          </div>
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary mb-2">
            {projects[1].type}
          </p>
          <h3 className="font-headline text-4xl font-bold text-on-surface mb-4">{projects[1].title}</h3>
          <p className="text-on-surface-variant leading-relaxed flex-1 mb-8">{projects[1].desc}</p>
          <div className="flex flex-wrap gap-2">
            {projects[1].stack.map(t => (
              <span key={t} className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project 3 — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="col-span-12 bg-surface-container rounded-[3rem] p-10 md:p-12 flex flex-col md:flex-row justify-between gap-8 hover:-translate-y-1 transition-transform duration-300 border border-white/6"
        >
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
                En desarrollo
              </span>
            </div>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary mb-2">
              {projects[2].type}
            </p>
            <h3 className="font-headline text-4xl font-bold text-on-surface mb-4">{projects[2].title}</h3>
            <p className="text-on-surface-variant leading-relaxed max-w-2xl">{projects[2].desc}</p>
          </div>
          <div className="flex flex-col justify-between items-end gap-6 flex-shrink-0">
            <span className="font-headline text-sm tracking-wider text-on-surface-variant/40">03</span>
            <div className="flex flex-wrap gap-2 justify-end">
              {projects[2].stack.map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-wider border border-white/8">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-12 bg-primary/5 border border-primary/15 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">¿Tu proyecto podría ser el próximo?</h3>
            <p className="text-on-surface-variant">Contame tu idea y lo construimos juntos.</p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-wide uppercase shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-200 flex-shrink-0"
          >
            Empezar proyecto
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
