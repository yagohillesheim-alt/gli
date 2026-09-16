import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { TriageTool } from './components/TriageTool';
import { StatsSection } from './components/StatsSection';
import { HistoryTimeline } from './components/HistoryTimeline';
import { EnvironmentalCommitment } from './components/EnvironmentalCommitment';
import { ProposalForm } from './components/ProposalForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ServicesGrid />
        
        {/* Solutions for Specific Publics */}
        <section id="municipios" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1200" 
                    alt="Serviços para Municípios" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-blue-dark/20" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">Para Órgãos Públicos</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Parceria Estratégica com Municípios</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Oferecemos gestão completa de limpeza urbana e resíduos, permitindo que as prefeituras foquem em outras áreas críticas enquanto garantimos a excelência dos serviços públicos essenciais.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Coleta urbana e transporte', 'Varrição e limpeza de vias', 'Manutenção de áreas verdes', 'Gestão de aterro sanitário'].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-brand-blue-dark">
                      <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#proposta" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20">
                  Solicitar Apresentação Municipal
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="empresas" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">Para o Setor Privado</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluções Industriais e Comerciais</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Gestão inteligente de resíduos para indústrias, comércios e construtoras, garantindo que sua empresa cumpra todas as exigências ambientais com o melhor custo-benefício.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Locação de caçambas e contêineres', 'Coleta programada de resíduos', 'Destinação de resíduos industriais', 'Gerenciamento de grandes volumes'].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-brand-blue-dark">
                      <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center text-white">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#proposta" className="inline-flex items-center gap-2 bg-brand-blue-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue-dark/90 transition-all shadow-xl shadow-brand-blue-dark/10">
                  Solicitar Solução Corporativa
                </a>
              </div>
              <div>
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1530124560676-586cad3ad784?auto=format&fit=crop&q=80&w=1200" 
                    alt="Serviços para Empresas" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-blue-dark/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="saude" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 bg-brand-blue-dark rounded-[50px] p-8 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="text-white">
                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4 block">Segurança e Saúde</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Gestão Especializada de Resíduos da Saúde</h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Hospitais e clínicas exigem um cuidado diferenciado. Nossa operação é preparada para lidar com materiais infectantes e químicos sob o mais rigoroso controle técnico.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-brand-green font-bold text-lg mb-1">Risco Zero</p>
                    <p className="text-white/40 text-xs">Acondicionamento e transporte blindado.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-brand-green font-bold text-lg mb-1">Documentação</p>
                    <p className="text-white/40 text-xs">MTR e certificados de destinação final.</p>
                  </div>
                </div>
                <a href="#proposta" className="inline-flex items-center gap-2 bg-white text-brand-blue-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl">
                  Consultar Atendimento Hospitalar
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/5 p-4 rounded-[40px] backdrop-blur-sm border border-white/10">
                  <div className="rounded-[30px] overflow-hidden aspect-video">
                    <img 
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                      alt="Saúde" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/20 text-[10px] mt-12 text-center">
              O atendimento depende do tipo de resíduo, da legislação aplicável e das autorizações operacionais vigentes.
            </p>
          </div>
        </section>

        <TriageTool />
        <HistoryTimeline />
        <EnvironmentalCommitment />
        <ProposalForm />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
