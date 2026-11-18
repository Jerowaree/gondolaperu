import { Link } from 'react-router-dom'
import { MapPin, Phone, ChevronRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'
import { getCategoriesByLine } from '@/lib/categories'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'

export function Footer() {
  const autoCategories = getCategoriesByLine('automotriz')
  const constCategories = getCategoriesByLine('construccion')
  const whatsappUrl = buildWhatsAppUrl('Hola GÓNDOLA PERÚ, deseo comunicarme para cotizaciones.')

  return (
    <footer className="bg-[#172B3A] text-white pt-28 pb-20 border-t-4 border-[#FCB800]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-14 pb-24 border-b border-white/10">
          {/* Columna 1: Identidad Corporativa (4 cols) */}
          <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
            <Link to="/" className="inline-flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-12 h-12 overflow-hidden">
                <img
                  src="/logos/gondolalogo.png"
                  alt="GÓNDOLA PERÚ"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white block leading-none tracking-[-0.03em]">
                  GÓNDOLA<span className="text-[#FCB800] ml-1">PERÚ</span>
                </span>
                <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider block mt-1.5">
                  {company.legalName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              {company.shortDescription}
            </p>
          </div>

          {/* Columna 2: Línea Automotriz (4 cols) */}
          <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FCB800]">
              Línea Automotriz
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 py-2">
              {autoCategories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/categorias/${category.slug}`}
                    className="hover:text-white transition-colors inline-flex items-center justify-center lg:justify-start gap-2 w-full"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#0082D6] shrink-0" />
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/catalogo?linea=automotriz"
                  className="text-xs font-bold text-[#0082D6] hover:text-[#FCB800] transition-colors"
                >
                  Ver todos los repuestos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Línea Construcción (solo si hay categorías activas) */}
          {constCategories.length > 0 && (
          <div className="lg:col-span-4 space-y-7 text-center lg:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FCB800]">
              Construcción
            </h4>
            <ul className="mt-2 space-y-4 text-sm text-slate-400">
              {constCategories.slice(0, 4).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/categorias/${category.slug}`}
                    className="hover:text-white transition-colors inline-flex items-center justify-center lg:justify-start gap-2 w-full"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FCB800]/60 shrink-0" />
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/catalogo?linea=construccion"
                  className="text-xs font-bold text-[#FCB800]/70 hover:text-[#FCB800] transition-colors"
                >
                  Ver materiales →
                </Link>
              </li>
            </ul>
          </div>
          )}

          {/* Columna 4: Atención Comercial (4 cols) */}
          <div className="lg:col-span-4 space-y-7 text-center lg:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FCB800]">
              Atención Comercial
            </h4>
            <div className="space-y-6 text-sm text-slate-400">
              <div className="space-y-2">
                <p className="inline-flex items-center justify-center lg:justify-start gap-2 text-[11px] font-bold uppercase tracking-widest text-[#FCB800]">
                  <MapPin className="w-3.5 h-3.5" />
                  Dirección Legal
                </p>
                <address className="not-italic leading-relaxed">
                  <span className="block text-slate-300 font-medium">
                    {company.legalAddress.street}
                  </span>
                  <span className="block text-slate-300 font-medium">
                    {company.legalAddress.urbanization}
                  </span>
                  {company.legalAddress.reference && (
                    <span className="block text-slate-500 text-xs">
                      ({company.legalAddress.reference})
                    </span>
                  )}
                  <span className="block pt-1.5 text-xs">
                    <span className="text-slate-500">Distrito / Ciudad: </span>
                    <span className="text-slate-300">{company.legalAddress.district}</span>
                  </span>
                  <span className="block text-xs">
                    <span className="text-slate-500">Departamento: </span>
                    <span className="text-slate-300">{company.legalAddress.department}</span>
                  </span>
                </address>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-4 h-4 text-[#FCB800] shrink-0" />
                <a href="tel:+51951545204" className="hover:text-white transition-colors font-medium">
                  {whatsappConfig.displayNumber}
                </a>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 py-3 px-6 text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-150 w-full"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {company.legalName}. Todos los derechos reservados.</p>
          <p>
            <span className="text-slate-400 font-medium">{company.district}, {company.city}, {company.country}</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
