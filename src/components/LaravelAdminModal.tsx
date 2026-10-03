import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Code2, 
  Check, 
  Copy, 
  Plus, 
  Server, 
  Layers, 
  FileCode, 
  RefreshCw 
} from 'lucide-react';
import { contentService } from '../services/api';
import { Article, CategoryType } from '../types';

interface LaravelAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onArticleAdded: () => void;
}

export const LaravelAdminModal: React.FC<LaravelAdminModalProps> = ({
  isOpen,
  onClose,
  onArticleAdded,
}) => {
  const [activeTab, setActiveTab] = useState<'endpoints' | 'new-article' | 'migration' | 'seeder'>('endpoints');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Custom API endpoint input
  const [customUrl, setCustomUrl] = useState<string>(contentService.getApiEndpoint() || '');
  const [isUrlSaved, setIsUrlSaved] = useState(false);

  // New Article Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<CategoryType>('renda-extra');
  const [excerpt, setExcerpt] = useState('');
  const [contentParagraph, setContentParagraph] = useState('');
  const [difficulty, setDifficulty] = useState<'Iniciante' | 'Intermediário' | 'Avançado'>('Iniciante');
  const [estimatedIncome, setEstimatedIncome] = useState('5.000 a 15.000 MT/mês');
  const [startupCost, setStartupCost] = useState('0 MT');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const blueprints = contentService.generateLaravelBlueprints();

  const handleCopy = (text: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    contentService.setApiEndpoint(customUrl.trim() || null);
    setIsUrlSaved(true);
    setTimeout(() => setIsUrlSaved(false), 2500);
    onArticleAdded();
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim()) return;

    const newSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const newArticle: Article = {
      id: 'art-' + Date.now(),
      slug: newSlug,
      title,
      category,
      categoryName: category === 'renda-extra' ? 'Renda Extra' :
                    category === 'trabalho-online' ? 'Trabalho Online' :
                    category === 'ferramentas' ? 'Ferramentas' :
                    category === 'negocios-digitais' ? 'Negócios Digitais' :
                    category === 'dicas' ? 'Dicas' : 'Guias',
      excerpt,
      content: [contentParagraph || excerpt],
      readTime: '4 min de leitura',
      publishedAt: 'Recentemente',
      difficulty,
      estimatedIncome,
      startupCost,
      riskLevel: 'Baixo',
      requirements: ['Celular ou Computador', 'Internet básica'],
      payoutMethods: ['M-Pesa', 'Conta Bancária'],
      isFeatured: false,
    };

    // Save to local cached list
    const current = JSON.parse(localStorage.getItem('renda_mz_articles_v1') || '[]');
    const updated = [newArticle, ...current];
    localStorage.setItem('renda_mz_articles_v1', JSON.stringify(updated));

    setSuccessMsg('Artigo salvo com sucesso no repositório! Pronto para envio via API.');
    setTitle('');
    setExcerpt('');
    setContentParagraph('');
    onArticleAdded();

    setTimeout(() => {
      setSuccessMsg('');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Integração Laravel + MySQL & Painel API
              </h2>
              <p className="text-xs text-slate-500">
                Arquitetura desacoplada preparada para conectar backend PHP/Laravel sem alterar o frontend.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('endpoints')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer min-h-[44px] ${
              activeTab === 'endpoints'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Endpoints REST & Conexão
          </button>
          <button
            onClick={() => setActiveTab('new-article')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer min-h-[44px] ${
              activeTab === 'new-article'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            + Publicar Novo Artigo
          </button>
          <button
            onClick={() => setActiveTab('migration')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer min-h-[44px] ${
              activeTab === 'migration'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Laravel Migration (MySQL)
          </button>
          <button
            onClick={() => setActiveTab('seeder')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer min-h-[44px] ${
              activeTab === 'seeder'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Database Seeder (PHP)
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6">
          {activeTab === 'endpoints' && (
            <div className="space-y-6">
              {/* Endpoint configuration */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Server className="w-4 h-4 text-emerald-600" />
                  <span>Conectar Servidor Laravel (Opcional)</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Por padrão, o site consome dados estáticos com resposta instantânea e suporte offline. Quando seu backend Laravel estiver rodando, basta informar o endereço da API abaixo:
                </p>
                <form onSubmit={handleSaveUrl} className="flex flex-col sm:flex-row gap-2 pt-1">
                  <input
                    type="url"
                    placeholder="https://api.rendadigital.mz ou http://127.0.0.1:8000"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-emerald-500 bg-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[44px]"
                  >
                    Salvar Endpoint
                  </button>
                </form>
                {isUrlSaved && (
                  <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Configuração atualizada! Tentando sincronizar com a URL especificada.</span>
                  </p>
                )}
              </div>

              {/* Specification Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900">Rotas REST Padronizadas da API:</h4>
                <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 border-b border-slate-200 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-4 font-bold">Método</th>
                        <th className="py-2.5 px-4 font-bold">Rota</th>
                        <th className="py-2.5 px-4 font-bold">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-2.5 px-4 font-mono font-bold text-emerald-700">GET</td>
                        <td className="py-2.5 px-4 font-mono">/api/v1/articles</td>
                        <td className="py-2.5 px-4 text-slate-600">Listar artigos com suporte a filtro ?category= e ?q=</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-mono font-bold text-emerald-700">GET</td>
                        <td className="py-2.5 px-4 font-mono">/api/v1/articles/{'{slug}'}</td>
                        <td className="py-2.5 px-4 text-slate-600">Buscar detalhes completos de um artigo</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-mono font-bold text-blue-700">POST</td>
                        <td className="py-2.5 px-4 font-mono">/api/v1/articles</td>
                        <td className="py-2.5 px-4 text-slate-600">Criar novo artigo (via painel administrativo)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-mono font-bold text-emerald-700">GET</td>
                        <td className="py-2.5 px-4 font-mono">/api/v1/tools</td>
                        <td className="py-2.5 px-4 text-slate-600">Listar catálogo de ferramentas digitais</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-mono font-bold text-emerald-700">GET</td>
                        <td className="py-2.5 px-4 font-mono">/api/v1/opportunities</td>
                        <td className="py-2.5 px-4 text-slate-600">Listar bolsas e vagas de trabalho remoto</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'new-article' && (
            <form onSubmit={handleCreateArticle} className="space-y-4">
              {successMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Título do Artigo</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Como ganhar dinheiro com transcrição de áudio em Moçambique"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Seção / Categoria</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as CategoryType)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-emerald-500 bg-white"
                  >
                    <option value="renda-extra">Renda Extra</option>
                    <option value="trabalho-online">Trabalho Online</option>
                    <option value="ferramentas">Ferramentas</option>
                    <option value="negocios-digitais">Negócios Digitais</option>
                    <option value="dicas">Dicas</option>
                    <option value="guias">Guias</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Dificuldade</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-emerald-500 bg-white"
                  >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Estimativa de Ganho</label>
                  <input
                    type="text"
                    value={estimatedIncome}
                    onChange={(e) => setEstimatedIncome(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Resumo Curto (Excerpt)</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Breve descrição que aparece no card do artigo..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Conteúdo Principal</label>
                <textarea
                  rows={4}
                  placeholder="Escreva as instruções passo a passo..."
                  value={contentParagraph}
                  onChange={(e) => setContentParagraph(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-emerald-500"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer min-h-[44px]"
                >
                  Salvar e Publicar Imediatamente
                </button>
              </div>
            </form>
          )}

          {activeTab === 'migration' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">
                  Arquivo pronto para: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">database/migrations/2026_01_01_000000_create_renda_digital_tables.php</code>
                </p>
                <button
                  onClick={() => handleCopy(blueprints.migration, 'migration')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium cursor-pointer"
                >
                  {copiedKey === 'migration' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'migration' ? 'Copiado!' : 'Copiar Migration PHP'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-[11px] font-mono overflow-x-auto max-h-96 leading-relaxed">
                {blueprints.migration}
              </pre>
            </div>
          )}

          {activeTab === 'seeder' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">
                  Arquivo pronto para: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">database/seeders/RendaDigitalSeeder.php</code>
                </p>
                <button
                  onClick={() => handleCopy(blueprints.seeder, 'seeder')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium cursor-pointer"
                >
                  {copiedKey === 'seeder' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'seeder' ? 'Copiado!' : 'Copiar Seeder PHP'}</span>
                </button>
              </div>
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-[11px] font-mono overflow-x-auto max-h-96 leading-relaxed">
                {blueprints.seeder}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Compatível com Laravel 10 / 11 e MySQL 8+.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold cursor-pointer min-h-[44px]"
          >
            Fechar Painel
          </button>
        </div>
      </div>
    </div>
  );
};
