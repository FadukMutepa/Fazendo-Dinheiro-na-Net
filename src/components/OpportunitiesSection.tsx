import React from 'react';
import { Sparkles, Calendar, MapPin, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OpportunityItem } from '../types';

interface OpportunitiesSectionProps {
  opportunities: OpportunityItem[];
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({ opportunities }) => {
  return (
    <section id="oportunidades" className="space-y-6">
      <div>
        {/* Unboxed category metadata */}
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Oportunidades Abertas & Bolsas</span>
          <span aria-hidden="true">·</span>
          <span>Elegíveis para Residentes em Moçambique</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
          Bolsas, Programas e Vagas Remotas Selecionadas
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Oportunidades de capacitação gratuita e postos de trabalho remoto verificados pela nossa curadoria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {opportunities.map(opp => (
          <div
            key={opp.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="space-y-3">
              {/* Unboxed metadata line */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-700">{opp.type}</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{opp.deadline}</span>
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 font-medium">{opp.organization}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-0.5">
                  {opp.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {opp.description}
              </p>

              {/* Compensation or Benefit */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <span className="text-slate-500 block">Benefício / Remuneração:</span>
                <span className="font-bold text-slate-800 mt-0.5 block">{opp.compensation}</span>
              </div>

              {/* Requirements */}
              <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                <span className="font-semibold text-slate-700 block">Requisitos principais:</span>
                {opp.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{opp.location}</span>
              </div>

              <a
                href={opp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Ver Detalhes Oficiais</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
