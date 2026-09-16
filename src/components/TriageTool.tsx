import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Send, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 'who',
    question: 'Quem está solicitando?',
    options: ['Prefeitura ou Município', 'Empresa', 'Indústria', 'Comércio', 'Hospital ou Clínica', 'Construtora', 'Condomínio', 'Pessoa Física', 'Outro'],
  },
  {
    id: 'what',
    question: 'Qual serviço você procura?',
    options: ['Coleta', 'Transporte', 'Destinação', 'Limpeza Urbana', 'Corte de Grama', 'Poda de Árvores', 'Caçamba ou Contêiner', 'Resíduos da Saúde', 'Armazenagem', 'Outro'],
  },
  {
    id: 'frequency',
    question: 'Qual é a frequência?',
    options: ['Pontual', 'Diária', 'Semanal', 'Mensal', 'Recorrente', 'Ainda não sei'],
  },
  {
    id: 'location',
    question: 'Onde o serviço será realizado?',
    type: 'input',
    placeholder: 'Digite o município ou região...',
  }
];

export function TriageTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (option: string) => {
    const step = steps[currentStep];
    setAnswers({ ...answers, [step.id]: option });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepData = steps[currentStep];

  return (
    <section className="py-24 bg-brand-blue-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-medium/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Encontre a solução ideal para sua necessidade
          </h2>
          <p className="text-white/60">
            Responda 4 perguntas rápidas para que possamos orientar seu atendimento.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
          {!isFinished ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="min-h-[300px] flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-sm">
                    {currentStep + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-blue-dark">
                    {stepData.question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                  {stepData.options ? (
                    stepData.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className={cn(
                          "text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium flex items-center justify-between group",
                          answers[stepData.id] === option
                            ? "border-brand-green bg-brand-green/5 text-brand-green"
                            : "border-gray-100 hover:border-brand-green/30 hover:bg-gray-50 text-gray-600"
                        )}
                      >
                        {option}
                        {answers[stepData.id] === option && <Check className="w-5 h-5" />}
                        <div className="w-2 h-2 rounded-full bg-brand-green scale-0 group-hover:scale-100 transition-transform" />
                      </button>
                    ))
                  ) : (
                    <div className="col-span-2">
                      <input
                        type="text"
                        placeholder={stepData.placeholder}
                        value={answers[stepData.id] || ''}
                        onChange={(e) => setAnswers({ ...answers, [stepData.id]: e.target.value })}
                        className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-brand-green focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 text-gray-400 font-bold hover:text-brand-blue-dark transition-colors disabled:opacity-30"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!answers[stepData.id]}
                    className="flex items-center gap-2 bg-brand-blue-dark text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue-dark/90 transition-colors disabled:opacity-50"
                  >
                    Próximo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-brand-blue-dark mb-4">
                Tudo pronto!
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Com essas informações, nossa equipe poderá avaliar a melhor solução para você. Clique abaixo para enviar sua solicitação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#proposta"
                  className="bg-brand-green text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitação
                </a>
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setIsFinished(false);
                    setAnswers({});
                  }}
                  className="text-gray-400 font-bold hover:text-brand-blue-dark transition-colors"
                >
                  Recomeçar
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
