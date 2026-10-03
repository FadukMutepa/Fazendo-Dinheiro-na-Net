import React from 'react';
import { X, Bookmark, Trash2, ArrowUpRight, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onOpenArticle: (article: Article) => void;
  onRemoveSaved: (id: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onOpenArticle,
  onRemoveSaved,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 px-5 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <h2 className="text-base font-bold text-slate-900">
              Artigos Salvos ({savedArticles.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 space-y-3 flex-1 overflow-y-auto">
          {savedArticles.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">Nenhum artigo salvo ainda</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Clique no ícone de marcador em qualquer artigo para guardá-lo e ler mesmo sem conexão de internet móvel.
              </p>
            </div>
          ) : (
            savedArticles.map(art => (
              <div
                key={art.id}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between gap-3 group hover:border-emerald-500/50 transition-colors"
              >
                <div 
                  onClick={() => {
                    onOpenArticle(art);
                    onClose();
                  }}
                  className="flex-1 cursor-pointer"
                >
                  <span className="text-[11px] font-semibold text-emerald-700 block">
                    {art.categoryName} · {art.difficulty}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mt-0.5">
                    {art.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {art.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      onOpenArticle(art);
                      onClose();
                    }}
                    className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title="Ler artigo"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveSaved(art.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title="Remover dos salvos"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Armazenado localmente no seu dispositivo.</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
