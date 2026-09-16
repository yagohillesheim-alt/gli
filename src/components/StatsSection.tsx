import { motion } from 'framer-motion';
import { INDICATORS } from '../data/content';

export function StatsSection() {
  return (
    <section className="py-20 bg-brand-blue-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {INDICATORS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-brand-green mb-2">
                {stat.value}{stat.suffix && <span className="text-xl text-white/40 align-top">{stat.suffix}</span>}
              </div>
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-[10px] text-white/20 text-center mt-12 italic">
          * Capacidade operacional aproximada informada em portal institucional. Sujeito a confirmação técnica.
        </p>
      </div>
    </section>
  );
}
