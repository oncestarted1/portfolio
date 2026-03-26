export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-surface-container rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-10 pt-14 pb-10 flex flex-col gap-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-black text-on-surface tracking-tighter font-headline">
              GABRIEL
            </div>
            <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Desarrollo web a medida para negocios reales.<br />
              Desde Argentina, para el mundo.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-on-surface-variant/50">
              Navegación
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Servicios', href: '#servicios' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Contacto', href: '#contacto' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-on-surface-variant/70 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-on-surface-variant/50">
              Contacto
            </p>
            <a
              href="https://wa.me/5491176460917"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-on-surface-variant/70 hover:text-primary transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-outline-variant/20" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 font-bold">
            © {year} Gabriel · Todos los derechos reservados
          </div>
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 font-bold">
            Argentina
          </div>
        </div>

      </div>
    </footer>
  )
}
