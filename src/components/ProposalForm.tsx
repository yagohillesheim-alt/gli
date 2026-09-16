import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Upload } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const proposalSchema = z.object({
  name: z.string().min(3, 'Nome é obrigatório'),
  entity: z.string().min(2, 'Empresa ou Município é obrigatório'),
  role: z.string().min(2, 'Cargo é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  whatsapp: z.string().optional(),
  city: z.string().min(2, 'Cidade é obrigatória'),
  clientType: z.string().min(1, 'Selecione o tipo de cliente'),
  service: z.string().min(1, 'Selecione o serviço'),
  message: z.string().min(10, 'Descreva sua necessidade em pelo menos 10 caracteres'),
});

type ProposalFormData = z.infer<typeof proposalSchema>;

export function ProposalForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
  });

  const onSubmit = async (data: ProposalFormData) => {
    setIsSubmitting(true);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="proposta" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <div>
            <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">Comercial</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solicite uma Proposta Personalizada</h2>
            <p className="text-gray-600 text-lg mb-10">
              Nossa equipe comercial está pronta para entender suas necessidades e desenvolver uma solução sob medida para seu município ou empresa.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Análise Técnica', desc: 'Avaliamos o volume e tipo de resíduo para otimizar custos.' },
                { title: 'Logística Inteligente', desc: 'Planejamento de rotas e frequências eficientes.' },
                { title: 'Conformidade Total', desc: 'Garantia de toda documentação e licenças ambientais.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue-dark">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-brand-blue-dark rounded-3xl text-white">
              <h4 className="font-bold text-xl mb-2">Precisa de urgência?</h4>
              <p className="text-white/60 mb-6 text-sm">Fale diretamente com um consultor agora mesmo.</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-full font-bold hover:bg-brand-green/90 transition-colors"
              >
                Atendimento via WhatsApp
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className={cn(
            "bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden transition-all duration-500",
            isSuccess && "bg-green-50 border-green-100"
          )}>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Solicitação Recebida!</h3>
                <p className="text-green-700/80 mb-8">
                  Nossa equipe analisará as informações e entrará em contato em breve.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-green-600 font-bold underline"
                >
                  Enviar nova solicitação
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Seu Nome</label>
                    <input
                      {...register('name')}
                      placeholder="Ex: João Silva"
                      className={cn(
                        "w-full bg-white border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-green focus:outline-none transition-all",
                        errors.name && "border-red-300 ring-1 ring-red-100"
                      )}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Empresa/Município</label>
                    <input
                      {...register('entity')}
                      placeholder="Ex: Prefeitura de Chapecó"
                      className={cn(
                        "w-full bg-white border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-green focus:outline-none transition-all",
                        errors.entity && "border-red-300 ring-1 ring-red-100"
                      )}
                    />
                    {errors.entity && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.entity.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">E-mail Corporativo</label>
                    <input
                      {...register('email')}
                      placeholder="nome@empresa.com.br"
                      className={cn(
                        "w-full bg-white border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-green focus:outline-none transition-all",
                        errors.email && "border-red-300 ring-1 ring-red-100"
                      )}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Telefone/WhatsApp</label>
                    <input
                      {...register('phone')}
                      placeholder="(49) 99999-9999"
                      className={cn(
                        "w-full bg-white border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-green focus:outline-none transition-all",
                        errors.phone && "border-red-300 ring-1 ring-red-100"
                      )}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Tipo de Cliente</label>
                    <select
                      {...register('clientType')}
                      className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-green focus:outline-none transition-all"
                    >
                      <option value="">Selecione...</option>
                      <option value="municipio">Prefeitura / Órgão Público</option>
                      <option value="empresa">Empresa / Indústria</option>
                      <option value="saude">Saúde / Hospitalar</option>
                      <option value="obras">Construtora / Obras</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Serviço Desejado</label>
                    <select
                      {...register('service')}
                      className="w-full bg-white border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-green focus:outline-none transition-all"
                    >
                      <option value="">Selecione...</option>
                      <option value="coleta">Coleta de Resíduos</option>
                      <option value="limpeza">Limpeza Urbana</option>
                      <option value="saude">Resíduos da Saúde</option>
                      <option value="cacamba">Caçambas/Contêineres</option>
                      <option value="verde">Manutenção Verde</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Descreva sua Necessidade</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Descreva o tipo de resíduo, volume estimado e frequência desejada..."
                    className={cn(
                      "w-full bg-white border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-green focus:outline-none transition-all resize-none",
                      errors.message && "border-red-300 ring-1 ring-red-100"
                    )}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.message.message}</p>}
                </div>

                <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-3 border border-dashed border-gray-300 group cursor-pointer hover:bg-gray-200 transition-colors">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-400 group-hover:text-brand-green transition-colors">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-gray-600">Upload de Arquivos</p>
                    <p className="text-[10px] text-gray-400">Envie fotos ou documentos da operação (Opcional)</p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue-dark text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue-dark/90 transition-all disabled:opacity-50 mt-4 shadow-lg active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                      <AlertCircle className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      Enviar Solicitação
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  Ao enviar, você concorda com nossa Política de Privacidade e Termos de Uso.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
