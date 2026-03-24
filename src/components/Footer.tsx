export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-14 px-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container rounded-t-[3rem] mt-20">
      <div className="text-2xl font-black text-on-surface tracking-tighter font-headline">
        GABRIEL
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {['Servicios', 'Proyectos', 'Contacto'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 hover:text-primary transition-colors font-bold"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 font-bold">
        © {year} Gabriel · Argentina
      </div>
    </footer>
  )
}
