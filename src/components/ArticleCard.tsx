import React, { useState } from 'react';
import { Bookmark, Clock, ArrowUpRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onOpen: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  dataSaver: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onOpen,
  isSaved,
  onToggleSave,
  dataSaver,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Visual Asset (Hidden if Data Saver is ON to save cellular bundles) */}
      {!dataSaver && article.image && !imgError && (
        <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        </div>
      )}

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
            <span className="font-semibold text-emerald-700">{article.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{article.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpen(article)}
            className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Key Realistic Practical Markers */}
          <div className="pt-2 text-xs space-y-1 border-t border-slate-100 text-slate-600">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Investimento inicial:</span>
              <span className="font-medium text-slate-800">{article.startupCost}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Estimativa realista:</span>
              <span className="font-medium text-emerald-700">{article.estimatedIncome}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => onToggleSave(article.id)}
            className={`p-2 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isSaved
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
            title={isSaved ? 'Remover dos salvos' : 'Salvar para ler offline'}
            aria-label="Salvar artigo"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={() => onOpen(article)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 p-2 cursor-pointer group-hover:translate-x-0.5 transition-transform min-h-[44px]"
          >
            <span>Ler guia completo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
