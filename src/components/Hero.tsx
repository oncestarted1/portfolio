import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden flex flex-col justify-center">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(95,83,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(95,83,201,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-[1300px] w-full mx-auto px-5 md:px-10 lg:px-14 pt-10 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">

        {/* Headline card: col 1-8, row 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="sm:col-span-2 lg:col-span-8 lg:row-start-1 bg-surface-container-low rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_20px_rgba(56,56,51,0.04)]"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/55 border border-outline-variant/20 rounded-full mb-7 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">
                Desarrollador Freelance&nbsp;·&nbsp;Argentina
              </span>
            </div>
            <h1
              className="font-headline font-black text-on-surface leading-[0.86] tracking-tight mb-7"
              style={{ fontSize: 'clamp(5rem, 11vw, 9.5rem)' }}
            >
              GABRIEL<span className="text-primary">.</span>
            </h1>
            <p className="text-base font-light text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Construyo el sistema digital de tu negocio: landings que convierten visitas en
              clientes, apps que reemplazan planillas y tiendas que venden&nbsp;24/7.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-bold text-sm tracking-wide uppercase shadow-xl shadow-primary/25 hover:scale-105 hover:bg-primary/90 transition-all duration-200"
              >
                Ver proyectos
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/5491176460917"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/80 text-on-surface border border-outline-variant/30 rounded-full font-bold text-sm tracking-wide uppercase hover:scale-105 hover:bg-white transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.533 5.861L.057 23.54a.5.5 0 0 0 .61.61l5.823-1.525A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.73-.5-5.29-1.375l-.38-.218-3.933 1.031 1.048-3.834-.236-.393A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Code card: col 9-12, spans rows 1-2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="sm:col-span-2 lg:col-span-4 lg:row-start-1 lg:row-span-2 bg-[#1e1e1e] rounded-[2.5rem] border border-[#333] p-7 flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 min-h-[260px] lg:min-h-0"
        >
          <div className="flex gap-2 mb-5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <pre className="font-mono text-[12.5px] leading-[2] flex-1 overflow-hidden text-[#9e9e9e]">{`const dev = new Portfolio({
  stack: 'React · TS · CSS',
  rol: 'Full Stack',
  pais: 'Argentina',
  aesthetic: 'editorial'
});

// Sistema listo para producción`}</pre>
          <div className="border-t border-[#2d2d2d] pt-3.5 flex-shrink-0">
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#484f58]">
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
              System active
            </span>
          </div>
        </motion.div>

        {/* Metric card: col 1-4, row 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="lg:col-span-4 lg:row-start-2 bg-white/70 backdrop-blur-xl rounded-[2.5rem] border border-white/45 p-7 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="flex justify-between items-start">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-lg">+100%</span>
          </div>
          <div>
            <div className="font-headline text-6xl font-black text-primary leading-none tracking-tight">3+</div>
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-on-surface-variant mt-2">
              Negocios digitalizados
            </div>
          </div>
        </motion.div>

        {/* Snippet card: col 5-8, row 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="lg:col-span-4 lg:row-start-2 bg-[#1e1e1e] border border-[#333] rounded-[2.5rem] p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 min-h-[160px]"
        >
          <div className="flex gap-1.5 mb-4 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,95,87,0.5)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(254,188,46,0.5)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,200,64,0.5)' }} />
          </div>
          <pre className="font-mono text-[12.5px] leading-[1.9] text-[#9e9e9e] flex-1">{`const stack = [
  'React', 'TypeScript',
  'Node.js', 'Vite'
];
// disponible ahora`}</pre>
        </motion.div>

        {/* Availability card: col 9-12, row 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65 }}
          className="sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-3 bg-white/70 backdrop-blur-xl border border-white/45 rounded-[2.5rem] p-7 flex flex-col items-start gap-1.5 relative hover:-translate-y-1 transition-transform duration-300"
        >
          <span className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <div className="text-primary mb-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <p className="font-headline text-2xl font-black text-on-surface">Disponible</p>
          <p className="text-xs font-medium text-on-surface-variant tracking-wide">Abierto a nuevos proyectos</p>
        </motion.div>

      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  )
}
