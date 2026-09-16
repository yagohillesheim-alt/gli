import { COMPANY_NAME, CONTACT_INFO, SERVICES, CITIES_SERVED } from '../data/content';
import { Phone, Mail, MapPin, Link, Globe, ArrowRight, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="bg-brand-blue-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                G
              </div>
              <span className="font-bold text-xl tracking-tight">
                {COMPANY_NAME}
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Especialistas em gestão de resíduos e limpeza urbana. Transformando o cuidado com o meio ambiente em eficiência operacional desde 1997.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.instagram} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
                <Link className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.website} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href={`#servicos`} className="text-white/60 hover:text-brand-green text-sm transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Área de Atendimento</h4>
            <div className="flex flex-wrap gap-2">
              {CITIES_SERVED.map((city) => (
                <span key={city} className="bg-white/5 px-3 py-1.5 rounded-lg text-xs text-white/70">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6 italic">
              [CONFIRMAR MUNICÍPIOS ATENDIDOS]
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-6">Contato Oficial</h4>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 group text-white/70 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 group text-white/70 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center text-brand-green mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium leading-relaxed">
                  {CONTACT_INFO.address}<br />
                  Chapecó - SC
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs">
            © 2024 {COMPANY_NAME}. Todos os direitos reservados. 
            <span className="ml-2">[CONFIRMAR CNPJ]</span>
          </p>
          <div className="flex gap-8 text-white/30 text-xs">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-blue-dark px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Falar com a equipe
        </span>
      </a>
    </footer>
  );
}
