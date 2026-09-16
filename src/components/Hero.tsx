import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden bg-brand-blue-dark">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark via-brand-blue-dark/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000" 
          alt="Gestão de Resíduos e Limpeza Urbana"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle className="w-3.5 h-3.5" />
              Gestão Ambiental de Excelência
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Soluções completas para <span className="text-brand-green">cidades mais limpas.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Atuação especializada em limpeza urbana, gestão de resíduos e conservação ambiental com eficiência, segurança e total responsabilidade para municípios e empresas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#proposta"
                className="bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-brand-green/20"
              >
                Solicitar Proposta
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                Falar com a Equipe
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick stats or features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-brand-green font-bold text-3xl">26+</p>
              <p className="text-white/60 text-sm">Anos de História</p>
            </div>
            <div>
              <p className="text-brand-green font-bold text-3xl">24h</p>
              <p className="text-white/60 text-sm">Operação Contínua</p>
            </div>
            <div className="hidden md:block">
              <p className="text-brand-green font-bold text-3xl">100%</p>
              <p className="text-white/60 text-sm">Compromisso Ambiental</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-green/10 blur-[120px] rounded-full -mb-32 -mr-32 z-0" />
    </section>
  );
}
