import { useState } from 'react'
import { motion } from 'motion/react'
import { MessageCircle, Send } from 'lucide-react'

const WA_NUMBER = '5491176460917'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mpqyvqko', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      }
    } catch {
      // silently fail — user can try WhatsApp
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary flex items-center gap-3 mb-4">
          <span className="w-7 h-px bg-primary" />
          Contacto
        </p>
        <h2
          className="font-headline font-black text-on-surface leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          Hablemos
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">

        {/* Left — copy + WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-5 flex flex-col gap-6"
        >
          <div className="bg-surface-container-low rounded-[2.5rem] p-10 border border-outline-variant/10">
            <p className="text-on-surface-variant leading-relaxed mb-8">
              ¿Tenés un proyecto en mente o querés modernizar tu negocio?
              Escribime y arrancamos.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-wide uppercase shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Escribime por WhatsApp
            </a>
          </div>

          <div className="bg-surface-container rounded-[2.5rem] p-8 border border-outline-variant/5">
            <div className="border-l-2 border-primary pl-5 bg-primary/5 rounded-r-xl py-3 pr-4">
              <p className="text-on-surface text-sm leading-relaxed italic mb-2">
                "Sentí que conectaba con mi vibra — me encantó el sitio."
              </p>
              <cite className="text-[10px] font-bold tracking-widest uppercase text-primary not-italic">
                — Erika, Coach Holística
              </cite>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 border border-outline-variant/10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="font-headline font-black text-on-surface text-xl">Respuesta en 24hs</p>
              <p className="text-xs text-on-surface-variant">De lunes a sábado</p>
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-[3rem] p-10 border border-outline-variant/10 shadow-[0_20px_40px_rgba(56,56,51,0.06)]"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <p className="font-headline text-2xl font-bold text-on-surface">Mensaje enviado</p>
              <p className="text-on-surface-variant">Te respondo en breve. También podés escribirme por WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[11px] font-bold tracking-[0.1em] uppercase text-on-surface-variant">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    autoComplete="name"
                    className="bg-surface-container border border-outline-variant/30 rounded-2xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] font-bold tracking-[0.1em] uppercase text-on-surface-variant">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    autoComplete="email"
                    className="bg-surface-container border border-outline-variant/30 rounded-2xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] font-bold tracking-[0.1em] uppercase text-on-surface-variant">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Contame sobre tu proyecto..."
                  required
                  className="bg-surface-container border border-outline-variant/30 rounded-2xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="self-start inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-wide uppercase shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
                {!loading && <Send className="w-4 h-4" />}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}
