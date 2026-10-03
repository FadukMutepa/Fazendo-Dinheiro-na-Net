import React from 'react';
import { ShieldCheck, Code2, Heart, ArrowUp } from 'lucide-react';
import { CategoryType } from '../types';

interface FooterProps {
  onSelectCategory: (cat: CategoryType | 'all') => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pb-20 lg:pb-8 pt-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-xs">
                FDN
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Fazendo Dinheiro na Net
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Portal independente dedicado a orientar cidadãos na busca por renda extra legítima, freelancing e negócios digitais sustentáveis.
            </p>
            <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Compromisso com a Transparência</span>
              </div>
              <p className="text-slate-400">
                Não promovemos esquemas em pirâmide, jogos de azar ou promessas de ganhos fáceis. O sucesso online exige tempo, aprendizado e esforço genuíno.
              </p>
            </div>
          </div>

          {/* Quick Navigation Sections */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Seções do Portal
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button 
                onClick={() => { onSelectCategory('all'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Início
              </button>
              <button 
                onClick={() => { onSelectCategory('renda-extra'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Renda Extra
              </button>
              <button 
                onClick={() => { onSelectCategory('trabalho-online'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Trabalho Online
              </button>
              <button 
                onClick={() => { onSelectCategory('ferramentas'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Ferramentas
              </button>
              <button 
                onClick={() => { onSelectCategory('negocios-digitais'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Negócios Digitais
              </button>
              <button 
                onClick={() => { onSelectCategory('dicas'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Dicas & Produtividade
              </button>
              <button 
                onClick={() => { onSelectCategory('oportunidades'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Oportunidades & Bolsas
              </button>
              <button 
                onClick={() => { onSelectCategory('guias'); scrollToTop(); }}
                className="text-left text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer py-1"
              >
                Guias para Iniciantes
              </button>
            </div>
          </div>

          {/* Backend Architecture & Engineering */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Engenharia & Futuro
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Estruturado com arquitetura desacoplada pronta para integração com <strong>Laravel + MySQL</strong> via API RESTful.
            </p>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Painel API & Laravel Seeds</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 2026 Fazendo Dinheiro na Net. Desenvolvido para máxima velocidade e baixo consumo de dados móveis.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
