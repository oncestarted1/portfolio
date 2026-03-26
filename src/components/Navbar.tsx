import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-5xl"
    >
      <div
        className={`flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/8 transition-shadow duration-300 ${
          scrolled
            ? 'shadow-[0_12px_40px_rgba(0,0,0,0.4)]'
            : 'shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
        }`}
      >
        <motion.a
          href="#"
          className="text-xl font-black text-on-surface tracking-tighter font-headline flex"
          initial="idle"
          whileHover="wave"
          variants={{ idle: {}, wave: { transition: { staggerChildren: 0.05 } } }}
        >
          {'GABRIEL'.split('').map((char, i) => (
            <motion.span
              key={i}
              style={{ display: 'inline-block' }}
              variants={{
                idle: { y: 0, color: 'var(--color-on-surface)' },
                wave: { y: [0, -5, 0], color: 'var(--color-primary)', transition: { duration: 0.4, ease: 'easeInOut' } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-on-surface/60 hover:text-on-surface transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center bg-gradient-to-r from-primary to-primary-container text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Contactar
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-0"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-on-surface transition-all duration-250 origin-center ${
              menuOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-on-surface transition-opacity duration-250 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-on-surface transition-all duration-250 origin-center ${
              menuOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 py-2 bg-[#141414]/95 backdrop-blur-xl border border-white/8 rounded-2xl shadow-xl"
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-sm font-semibold text-on-surface hover:text-primary transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="px-4 pt-1 pb-2">
            <a
              href="#contacto"
              className="block text-center bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Contactar
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
