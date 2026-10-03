import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Laptop, 
  Wrench, 
  ShoppingBag, 
  Lightbulb, 
  BookOpen, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Zap,
  SlidersHorizontal
} from 'lucide-react';
import { CategoryType, Article, ToolItem, OpportunityItem } from './types';
import { contentService } from './services/api';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { ArticleModal } from './components/ArticleModal';
import { IncomeCalculator } from './components/IncomeCalculator';
import { ScamShield } from './components/ScamShield';
import { ToolsSection } from './components/ToolsSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { LaravelAdminModal } from './components/LaravelAdminModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { MobileTabBar } from './components/MobileTabBar';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [tools, setTools] = useState<ToolItem[]>([]);
  const [opportunities, setOpportunities] = useState<OpportunityItem[]>([]);
  
  // Interactive modals & states
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [dataSaver, setDataSaver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load content
  const loadData = async () => {
    setIsLoading(true);
    try {
      const arts = await contentService.getArticles();
      const tls = await contentService.getTools();
      const opps = await contentService.getOpportunities();
      setArticles(arts);
      setTools(tls);
      setOpportunities(opps);
    } catch (err) {
      console.error('Erro ao carregar dados:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    setSavedIds(contentService.getBookmarks());
    setDataSaver(contentService.isDataSaverEnabled());
  }, []);

  const handleToggleDataSaver = () => {
    const nextState = !dataSaver;
    setDataSaver(nextState);
    contentService.setDataSaverEnabled(nextState);
  };

  const handleToggleSave = (articleId: string) => {
    contentService.toggleBookmark(articleId);
    setSavedIds(contentService.getBookmarks());
  };

  const filteredArticles = articles.filter(a => {
    const matchesCategory = activeCategory === 'all' || a.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.requirements.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const savedArticlesList = articles.filter(a => savedIds.includes(a.id));

  // Category definitions for the segmented tab selector
  const categories: { id: CategoryType | 'all'; label: string; count?: number }[] = [
    { id: 'all', label: 'Todos os Conteúdos' },
    { id: 'renda-extra', label: 'Renda Extra' },
    { id: 'trabalho-online', label: 'Trabalho Online' },
    { id: 'ferramentas', label: 'Ferramentas' },
    { id: 'negocios-digitais', label: 'Negócios Digitais' },
    { id: 'dicas', label: 'Dicas' },
    { id: 'oportunidades', label: 'Oportunidades' },
    { id: 'guias', label: 'Guias' },
  ];

  const handleExploreOpportunities = () => {
    setActiveCategory('oportunidades');
    const el = document.getElementById('oportunidades') || document.getElementById('feed-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewTips = () => {
    setActiveCategory('dicas');
    const el = document.getElementById('feed-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRefreshPage = () => {
    // Instant reload of page and data
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Header Bar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        dataSaver={dataSaver}
        onToggleDataSaver={handleToggleDataSaver}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onRefresh={handleRefreshPage}
      />

      {/* Hero Section with exact required headline and buttons */}
      {activeCategory === 'all' && !searchQuery && (
        <Hero
          onExploreOpportunities={handleExploreOpportunities}
          onViewTips={handleViewTips}
          dataSaver={dataSaver}
          onRefresh={handleRefreshPage}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 w-full">
        {/* Category Navigation Bar (Interactive Segmented Control - Zero Pill Rule Compliant) */}
        <div id="feed-section" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span>Catálogo de Conteúdos</span>
                <span aria-hidden="true">·</span>
                <span>Foco em Resultados Reais</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                {activeCategory === 'all' ? 'Artigos e Guias em Destaque' :
                 activeCategory === 'renda-extra' ? 'Ideias e Métodos de Renda Extra' :
                 activeCategory === 'trabalho-online' ? 'Trabalho Remoto & Freelancing' :
                 activeCategory === 'ferramentas' ? 'Ferramentas & Aplicativos Úteis' :
                 activeCategory === 'negocios-digitais' ? 'Negócios Digitais & E-commerce' :
                 activeCategory === 'dicas' ? 'Estratégias & Produtividade' :
                 activeCategory === 'oportunidades' ? 'Oportunidades & Bolsas Abertas' : 'Guias para Iniciantes'}
              </h2>
            </div>

            {searchQuery && (
              <div className="text-xs text-slate-500">
                Resultados para: <strong className="text-slate-800">"{searchQuery}"</strong> ({filteredArticles.length} encontrados)
              </div>
            )}
          </div>

          {/* Clean Segmented Tabs (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 no-scrollbar text-xs">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 font-bold rounded-xl whitespace-nowrap transition-colors cursor-pointer min-h-[40px] ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Specific Content or Articles Feed */}
        {activeCategory === 'ferramentas' ? (
          <ToolsSection tools={tools} />
        ) : activeCategory === 'oportunidades' ? (
          <OpportunitiesSection opportunities={opportunities} />
        ) : (
          <div className="space-y-12">
            {/* Grid of Articles */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map(article => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onOpen={setSelectedArticle}
                    isSaved={savedIds.includes(article.id)}
                    onToggleSave={handleToggleSave}
                    dataSaver={dataSaver}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-800">Nenhum conteúdo encontrado</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Tente alterar os termos da busca ou selecionar outra categoria acima.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  Ver Todos os Artigos
                </button>
              </div>
            )}

            {/* If Início is active, show the tools preview and opportunities preview */}
            {activeCategory === 'all' && !searchQuery && (
              <>
                {/* Tools Highlight */}
                <ToolsSection tools={tools.slice(0, 4)} />

                {/* Realistic Income Goal Calculator */}
                <IncomeCalculator />

                {/* Anti-Scam Shield Section */}
                <ScamShield />

                {/* Opportunities Section Highlight */}
                <OpportunitiesSection opportunities={opportunities.slice(0, 2)} />
              </>
            )}
          </div>
        )}
      </main>

      {/* Detailed Article Modal (Reading View) */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        isSaved={selectedArticle ? savedIds.includes(selectedArticle.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Offline Saved Articles Modal */}
      <SavedArticlesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedArticles={savedArticlesList}
        onOpenArticle={(art) => {
          setSelectedArticle(art);
          setIsSavedModalOpen(false);
        }}
        onRemoveSaved={handleToggleSave}
      />

      {/* Future Architecture (Laravel + MySQL + API) Admin Modal */}
      <LaravelAdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onArticleAdded={loadData}
      />

      {/* Mobile Ergonomic Bottom Tab Bar */}
      <MobileTabBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={setActiveCategory}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />
    </div>
  );
}
