import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Heart, Droplets } from 'lucide-react';

export function EnvironmentalCommitment() {
  const pillars = [
    { icon: Leaf, title: 'Destinação Responsável', desc: 'Garantimos que cada grama de resíduo chegue ao destino ambientalmente correto.' },
    { icon: ShieldCheck, title: 'Conformidade Legal', desc: 'Atuação rigorosa sob todas as licenças e normas ambientais vigentes.' },
    { icon: Droplets, title: 'Proteção de Recursos', desc: 'Sistemas avançados para evitar a contaminação do solo e lençóis freáticos.' },
    { icon: Heart, title: 'Educação Ambiental', desc: 'Promovemos a conscientização nas comunidades onde atuamos.' },
  ];

  return (
    <section className="py-24 bg-brand-green relative overflow-hidden">
      {/* Texture/Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Nosso Compromisso Ambiental</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Mais do que coletar, cuidamos do futuro. Nossa operação é desenhada para minimizar impactos e preservar a saúde pública.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-green mb-6 shadow-lg">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white rounded-[40px] text-brand-blue-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-extrabold mb-4">Cidades limpas são o reflexo de uma gestão responsável.</h4>
            <p className="text-gray-500 font-medium">Junte-se à GLI Limpeza Urbana na construção de um legado sustentável para as próximas gerações.</p>
          </div>
          <a
            href="#proposta"
            className="bg-brand-blue-dark text-white px-8 py-4 rounded-full font-bold whitespace-nowrap hover:bg-brand-blue-dark/90 transition-transform active:scale-95 shadow-xl"
          >
            Solicitar Apresentação Institucional
          </a>
        </div>
      </div>
    </section>
  );
}
