import { motion } from 'framer-motion';
import { HISTORY } from '../data/content';
import { cn } from '../lib/utils';

export function HistoryTimeline() {
  return (
    <section id="historia" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">Nossa Trajetória</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Desde 1997 construindo um futuro sustentável.</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A GLI Limpeza Urbana nasceu em Chapecó, Santa Catarina, com a missão de transformar a gestão de resíduos em um processo transparente, eficiente e seguro para a sociedade.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-3xl bg-brand-green/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Natureza" />
              </div>
              <div className="h-64 rounded-3xl bg-brand-blue-dark overflow-hidden p-8 flex flex-col justify-end">
                <p className="text-white font-bold text-3xl">Chapecó</p>
                <p className="text-white/60">Sede Administrativa</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-3xl bg-brand-blue-medium overflow-hidden p-8 flex flex-col justify-end">
                <p className="text-white font-bold text-3xl">1997</p>
                <p className="text-white/60">Ano de Fundação</p>
              </div>
              <div className="h-48 rounded-3xl bg-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Cidade" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-12">
            {HISTORY.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-end">
                  <div className={`text-right ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} w-full`}>
                    <span className="text-3xl font-extrabold text-brand-green mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-brand-blue-dark mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm max-w-sm ml-auto mr-0 md:mr-0 md:ml-auto">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-brand-green flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-brand-green" />
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
