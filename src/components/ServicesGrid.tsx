import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data/content';
import { cn } from '../lib/utils';

export function ServicesGrid() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos um ecossistema completo de serviços para manter cidades organizadas e empresas em total conformidade ambiental.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <Icons.Check className="w-3 h-3 text-brand-green" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">
                    Para: {service.target}
                  </span>
                  <a
                    href="#proposta"
                    className="inline-flex items-center gap-2 text-brand-green font-bold text-sm group/btn"
                  >
                    Saiba mais
                    <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
