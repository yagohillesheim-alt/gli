import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';
import { cn } from '../lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Perguntas comuns sobre nossos serviços</h2>
          <p className="text-gray-500">Tudo o que você precisa saber para contratar a GLI.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div
              key={i}
              className={cn(
                "border rounded-2xl transition-all duration-300",
                openIndex === i ? "border-brand-green bg-brand-green/5" : "border-gray-100 hover:border-gray-200"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={cn(
                    "w-5 h-5 shrink-0",
                    openIndex === i ? "text-brand-green" : "text-gray-400"
                  )} />
                  <span className={cn(
                    "font-bold transition-colors",
                    openIndex === i ? "text-brand-blue-dark" : "text-gray-700"
                  )}>
                    {item.question}
                  </span>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  openIndex === i ? "rotate-180 text-brand-green" : "text-gray-400"
                )} />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-14 pb-6 text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">Não encontrou sua dúvida?</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-brand-blue-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue-dark/90 transition-all shadow-xl"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
