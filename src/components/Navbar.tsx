import { useState, useEffect } from 'react';
import { Menu, X, Phone, FileText, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { COMPANY_NAME, CONTACT_INFO } from '../data/content';

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Municípios', href: '#municipios' },
  { name: 'Empresas', href: '#empresas' },
  { name: 'Saúde', href: '#saude' },
  { name: 'Nossa História', href: '#historia' },
  { name: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            G
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            scrolled ? "text-brand-blue-dark" : "text-white"
          )}>
            {COMPANY_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-green",
                scrolled ? "text-brand-blue-dark" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#proposta"
            className="bg-brand-green hover:bg-brand-green/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            <FileText className="w-4 h-4" />
            Solicitar Proposta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md",
            scrolled ? "text-brand-blue-dark" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl rounded-b-2xl mt-2"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-brand-blue-dark font-medium hover:text-brand-green py-2 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="#proposta"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-green text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Solicitar Proposta
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="bg-brand-blue-medium text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
