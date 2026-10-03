import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  Smartphone, 
  Wallet, 
  Clock, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Sticky Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 px-5 py-3.5 flex items-center justify-between z-10">
          {/* Unboxed breadcrumb metadata */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-emerald-700">{article.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{article.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-2 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isSaved ? 'text-emerald-600 bg-emerald-50' : 'text-slate-500 hover:bg-slate-100'
              }`}
              title={isSaved ? 'Salvo' : 'Salvar'}
              aria-label="Salvar artigo"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              title="Copiar link"
              aria-label="Compartilhar"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              title="Fechar"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Excerpt */}
          <div className="space-y-3">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Practical Reality Matrix (Cards with real info) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-500 block">Rendimento Estimado</span>
              <span className="font-bold text-emerald-800 text-sm mt-0.5 block">{article.estimatedIncome}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Custo Inicial</span>
              <span className="font-semibold text-slate-800 text-sm mt-0.5 block">{article.startupCost}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Nível de Risco</span>
              <span className="font-semibold text-slate-800 text-sm mt-0.5 block">{article.riskLevel}</span>
            </div>
          </div>

          {/* Requirements Checklist */}
          {article.requirements && article.requirements.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>O que você precisa para começar:</span>
              </h3>
              <ul className="space-y-2">
                {article.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formas de Recebimento em Moçambique */}
          {article.payoutMethods && article.payoutMethods.length > 0 && (
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <h4 className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                <Wallet className="w-4 h-4 text-emerald-700" />
                <span>Como receber os valores em Moçambique:</span>
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-emerald-900">
                {article.payoutMethods.map((method, idx) => (
                  <span key={idx} className="font-medium bg-emerald-100/80 px-2.5 py-1 rounded-md">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Main Content Paragraphs */}
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Actionable Step-by-Step */}
          {article.steps && article.steps.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Passo a passo prático para executar:</h3>
              <div className="space-y-3">
                {article.steps.map((st, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Crucial Cautions / Anti-Scam Shield */}
          {article.cautions && article.cautions.length > 0 && (
            <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-amber-900 text-xs sm:text-sm font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Avisos importantes & Erros a evitar:</span>
              </div>
              <ul className="space-y-1.5 pl-6 list-disc text-xs text-amber-900">
                {article.cautions.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Fonte verificada pela equipe editorial do Fazendo Dinheiro na Net.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer min-h-[44px]"
          >
            Fechar Guia
          </button>
        </div>
      </div>
    </div>
  );
};
