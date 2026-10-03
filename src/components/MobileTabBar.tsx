import React from 'react';
import { Home, TrendingUp, Wrench, Sparkles, Bookmark } from 'lucide-react';
import { CategoryType } from '../types';

interface MobileTabBarProps {
  activeCategory: CategoryType | 'all';
  onSelectCategory: (cat: CategoryType | 'all') => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const MobileTabBar: React.FC<MobileTabBarProps> = ({
  activeCategory,
  onSelectCategory,
  savedCount,
  onOpenSaved,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 pb-safe">
      <nav className="grid grid-cols-5 items-center h-15 max-w-lg mx-auto px-1">
        {/* Início */}
        <button
          onClick={() => {
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer transition-colors ${
            activeCategory === 'all' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Início"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight">Início</span>
        </button>

        {/* Renda Extra */}
        <button
          onClick={() => {
            onSelectCategory('renda-extra');
            window.scrollTo({ top: 380, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer transition-colors ${
            activeCategory === 'renda-extra' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Renda Extra"
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight">Renda</span>
        </button>

        {/* Ferramentas */}
        <button
          onClick={() => {
            onSelectCategory('ferramentas');
            window.scrollTo({ top: 380, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer transition-colors ${
            activeCategory === 'ferramentas' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Ferramentas"
        >
          <Wrench className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight">Apps</span>
        </button>

        {/* Oportunidades */}
        <button
          onClick={() => {
            onSelectCategory('oportunidades');
            window.scrollTo({ top: 380, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer transition-colors ${
            activeCategory === 'oportunidades' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Oportunidades"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] mt-1 tracking-tight">Bolsas</span>
        </button>

        {/* Salvos */}
        <button
          onClick={onOpenSaved}
          className="flex flex-col items-center justify-center h-full min-h-[44px] cursor-pointer text-slate-400 hover:text-slate-200 relative"
          aria-label="Artigos Salvos"
        >
          <div className="relative">
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-2 w-3.5 h-3.5 bg-emerald-500 text-slate-950 font-bold text-[9px] rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 tracking-tight">Salvos</span>
        </button>
      </nav>
    </div>
  );
};
