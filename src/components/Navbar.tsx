import React, { useState } from 'react';
import { 
  Wifi, 
  WifiOff, 
  Bookmark, 
  Search, 
  Menu, 
  X, 
  Code2, 
  ShieldCheck,
  TrendingUp,
  Laptop,
  Wrench,
  Sparkles,
  BookOpen,
  RefreshCw
} from 'lucide-react';
import { CategoryType } from '../types';

interface NavbarProps {
  activeCategory: CategoryType | 'all';
  onSelectCategory: (cat: CategoryType | 'all') => void;
  dataSaver: boolean;
  onToggleDataSaver: () => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenAdmin: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onRefresh?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  dataSaver,
  onToggleDataSaver,
  savedCount,
  onOpenSaved,
  onOpenAdmin,
  searchQuery,
  onSearchChange,
  onRefresh,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks: { id: CategoryType | 'all'; label: string; icon: any }[] = [
    { id: 'all', label: 'Início', icon: Sparkles },
    { id: 'renda-extra', label: 'Renda Extra', icon: TrendingUp },
    { id: 'trabalho-online', label: 'Trabalho Online', icon: Laptop },
    { id: 'ferramentas', label: 'Ferramentas', icon: Wrench },
    { id: 'negocios-digitais', label: 'Negócios', icon: ShieldCheck },
    { id: 'oportunidades', label: 'Oportunidades', icon: Sparkles },
    { id: 'guias', label: 'Guias', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 transition-all">
      {/* Top Banner for Data Saver state if active */}
      {dataSaver && (
        <div className="bg-emerald-950/80 text-emerald-200 border-b border-emerald-800/50 px-4 py-1.5 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <WifiOff className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Modo Economia de Dados ativo — Imagens pesadas suspensas para poupar megabytes.</span>
          </div>
          <button 
            onClick={onToggleDataSaver}
            className="text-xs text-white underline hover:text-emerald-300 ml-2 whitespace-nowrap cursor-pointer"
          >
            Desativar
          </button>
        </div>
      )}

      {/* Strict 3-zone Header Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => {
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group flex items-center gap-2.5 focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-xs tracking-tight shadow-sm">
            FDN
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">
              Fazendo Dinheiro na Net
            </span>
          </div>
        </button>

        {/* Zone 2: Clean text navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.slice(0, 6).map(link => {
            const isActive = activeCategory === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onSelectCategory(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  isActive 
                    ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400' 
                    : 'hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search toggle */}
          <div className="relative">
            {showSearchInput ? (
              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 w-44 sm:w-60">
                <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none w-full"
                  autoFocus
                />
                <button 
                  onClick={() => {
                    setShowSearchInput(false);
                    onSearchChange('');
                  }}
                  className="text-slate-400 hover:text-white ml-1 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Pesquisar"
                aria-label="Pesquisar"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Data Saver Mode Toggle Button */}
          <button
            onClick={onToggleDataSaver}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
              dataSaver
                ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500/50'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-800'
            }`}
            title="Alternar modo economia de dados para poupar internet móvel"
          >
            {dataSaver ? <WifiOff className="w-3.5 h-3.5 text-emerald-400" /> : <Wifi className="w-3.5 h-3.5 text-slate-400" />}
            <span className="whitespace-nowrap">{dataSaver ? 'Poupança Ativa' : 'Poupar Megas'}</span>
          </button>

          {/* Fast Refresh Button */}
          <button
            onClick={() => {
              if (onRefresh) {
                onRefresh();
              } else {
                window.location.reload();
              }
            }}
            className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
            title="Atualizar e recarregar a página"
            aria-label="Atualizar página"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Saved Articles (Offline Bookmarks) */}
          <button
            onClick={onOpenSaved}
            className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Artigos Salvos para ler sem internet"
            aria-label="Artigos Salvos"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-emerald-500 text-slate-950 font-bold text-[10px] rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Laravel API / Dev Panel trigger */}
          <button
            onClick={onOpenAdmin}
            className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Configuração API Laravel / Painel"
            aria-label="Laravel API"
          >
            <Code2 className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          <div className="pb-2 border-b border-slate-800 mb-2 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Categorias do Portal</span>
            <button
              onClick={onToggleDataSaver}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs ${
                dataSaver ? 'bg-emerald-900/60 text-emerald-300' : 'bg-slate-800 text-slate-300'
              }`}
            >
              {dataSaver ? <WifiOff className="w-3 h-3 text-emerald-400" /> : <Wifi className="w-3 h-3" />}
              <span>{dataSaver ? 'Poupança Ativa' : 'Poupar Megas'}</span>
            </button>
          </div>
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = activeCategory === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onSelectCategory(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer min-h-[44px] ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
