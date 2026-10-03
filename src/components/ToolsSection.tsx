import React, { useState } from 'react';
import { ExternalLink, Smartphone, Check, Sparkles, Filter } from 'lucide-react';
import { ToolItem } from '../types';

interface ToolsSectionProps {
  tools: ToolItem[];
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ tools }) => {
  const [filter, setFilter] = useState<'all' | 'free' | 'mobile'>('all');

  const filteredTools = tools.filter(t => {
    if (filter === 'free') return t.pricing === '100% Gratuito' || t.pricing === 'Plano Grátis Disponível';
    if (filter === 'mobile') return t.mobileFriendly;
    return true;
  });

  return (
    <section id="ferramentas" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          {/* Unboxed category metadata */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <span>Produtividade & Aplicativos</span>
            <span aria-hidden="true">·</span>
            <span>Testadas para Conexão em Moçambique</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Ferramentas Recomendadas para Trabalhar Online
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Plataformas, aplicativos e ferramentas úteis que rodam em celulares ou computadores básicos sem exigir planos caros.
          </p>
        </div>

        {/* Interactive Filter Tabs (Zero-pill compliant segmented control) */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer min-h-[36px] ${
              filter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Todas ({tools.length})
          </button>
          <button
            onClick={() => setFilter('free')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer min-h-[36px] ${
              filter === 'free'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Gratuitas
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer min-h-[36px] ${
              filter === 'mobile'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            No Celular
          </button>
        </div>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTools.map(tool => (
          <div
            key={tool.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="space-y-3">
              {/* Unboxed category line */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-700">{tool.category}</span>
                <span className="text-slate-500">{tool.pricing}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-600">
                {tool.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[11px]">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
              {tool.mobileFriendly ? (
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Compatível Mobile</span>
                </div>
              ) : (
                <span className="text-[11px] text-slate-400">Requer PC</span>
              )}

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 p-1.5 transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Acessar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
