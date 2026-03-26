import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-32 px-6 relative overflow-hidden">

      {/* Radial glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(123,110,246,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
        <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">
          Desarrollador Freelance&nbsp;·&nbsp;Argentina
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-headline font-black text-on-surface leading-[0.88] tracking-tight mb-7"
        style={{ fontSize: 'clamp(4.5rem, 14vw, 11rem)' }}
      >
        GABRIEL<span className="text-primary">.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35 }}
        className="text-base md:text-lg font-light text-on-surface-variant leading-relaxed mb-10 max-w-lg mx-auto"
      >
        Construyo el sistema digital de tu negocio: landings que convierten visitas en
        clientes, apps que reemplazan planillas y tiendas que venden&nbsp;24/7.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.45 }}
        className="flex flex-wrap gap-3 justify-center mb-20"
      >
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-bold text-sm tracking-wide uppercase shadow-xl shadow-primary/20 hover:scale-105 hover:bg-primary/90 transition-all duration-200"
        >
          Ver proyectos
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="https://wa.me/5491176460917"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/8 text-on-surface border border-white/10 rounded-full font-bold text-sm tracking-wide uppercase hover:scale-105 hover:bg-white/12 transition-all duration-200"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.533 5.861L.057 23.54a.5.5 0 0 0 .61.61l5.823-1.525A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.73-.5-5.29-1.375l-.38-.218-3.933 1.031 1.048-3.834-.236-.393A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          WhatsApp
        </a>
      </motion.div>

      {/* Hero visual — code window */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl mx-auto"
      >
        {/* Glow under card */}
        <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-primary/20 to-transparent blur-xl pointer-events-none" />

        {/* Code window */}
        <div className="relative bg-[#0f0f0f] rounded-[1.75rem] border border-white/8 shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/6">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="flex-1 mx-4 h-5 rounded-md bg-white/5 text-[11px] text-white/25 font-mono flex items-center px-3">
              gabriel.dev — portfolio
            </span>
          </div>

          {/* Code content */}
          <div className="p-8 md:p-10">
            <pre className="font-mono text-sm md:text-[15px] leading-[2] text-left overflow-x-auto">
              <span className="text-[#6272a4]">{'// Sistema listo para producción'}</span>{'\n'}
              <span className="text-[#ff79c6]">const</span>
              <span className="text-[#f8f8f2]"> dev </span>
              <span className="text-[#ff79c6]">=</span>
              <span className="text-[#f8f8f2]"> </span>
              <span className="text-[#50fa7b]">new</span>
              <span className="text-[#8be9fd]"> Developer</span>
              <span className="text-[#f8f8f2]">{'({'}</span>{'\n'}
              <span className="text-[#f8f8f2]">{'  '}</span>
              <span className="text-[#ffb86c]">nombre</span>
              <span className="text-[#f8f8f2]">:   </span>
              <span className="text-[#f1fa8c]">'Gabriel'</span>
              <span className="text-[#f8f8f2]">,</span>{'\n'}
              <span className="text-[#f8f8f2]">{'  '}</span>
              <span className="text-[#ffb86c]">stack</span>
              <span className="text-[#f8f8f2]">:    </span>
              <span className="text-[#f1fa8c]">['React', 'TypeScript', 'Node.js']</span>
              <span className="text-[#f8f8f2]">,</span>{'\n'}
              <span className="text-[#f8f8f2]">{'  '}</span>
              <span className="text-[#ffb86c]">rol</span>
              <span className="text-[#f8f8f2]">:      </span>
              <span className="text-[#f1fa8c]">'Full Stack Freelance'</span>
              <span className="text-[#f8f8f2]">,</span>{'\n'}
              <span className="text-[#f8f8f2]">{'  '}</span>
              <span className="text-[#ffb86c]">pais</span>
              <span className="text-[#f8f8f2]">:     </span>
              <span className="text-[#f1fa8c]">'Argentina'</span>
              <span className="text-[#f8f8f2]">,</span>{'\n'}
              <span className="text-[#f8f8f2]">{'  '}</span>
              <span className="text-[#ffb86c]">status</span>
              <span className="text-[#f8f8f2]">:   </span>
              <span className="text-[#f1fa8c]">'disponible'</span>{'\n'}
              <span className="text-[#f8f8f2]">{'});'}</span>{'\n\n'}
              <span className="text-[#50fa7b]">dev</span>
              <span className="text-[#f8f8f2]">.</span>
              <span className="text-[#8be9fd]">build</span>
              <span className="text-[#f8f8f2]">(</span>
              <span className="text-[#ffb86c]">tuNegocio</span>
              <span className="text-[#f8f8f2]">);</span>
              <span className="text-[#6272a4]">{'  // retorna resultados reales'}</span>
            </pre>
          </div>

          {/* Status bar */}
          <div className="px-8 md:px-10 py-3.5 border-t border-white/6 flex items-center justify-between">
            <span className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white/25">
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
              System active
            </span>
            <span className="text-[11px] font-mono text-white/20">v2025</span>
          </div>
        </div>

        {/* Floating metric card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute -bottom-6 -left-4 md:-left-10 bg-surface-container border border-white/8 rounded-2xl p-4 shadow-xl backdrop-blur-sm hidden sm:flex flex-col gap-1"
        >
          <div className="flex items-center justify-between gap-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Negocios</span>
            <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-md">+100%</span>
          </div>
          <div className="font-headline text-3xl font-black text-primary leading-none">3+</div>
          <div className="text-[10px] text-on-surface-variant">digitalizados</div>
        </motion.div>

        {/* Floating availability card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute -bottom-6 -right-4 md:-right-10 bg-surface-container border border-white/8 rounded-2xl p-4 shadow-xl backdrop-blur-sm hidden sm:flex items-center gap-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
          <div>
            <p className="text-sm font-black font-headline text-on-surface leading-none mb-0.5">Disponible</p>
            <p className="text-[10px] text-on-surface-variant">Abierto a proyectos</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>

    </section>
  )
}
