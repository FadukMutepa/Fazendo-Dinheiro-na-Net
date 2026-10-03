import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Sparkles, Smartphone, Landmark, RefreshCw } from 'lucide-react';

interface HeroProps {
  onExploreOpportunities: () => void;
  onViewTips: () => void;
  dataSaver: boolean;
  onRefresh?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreOpportunities,
  onViewTips,
  dataSaver,
  onRefresh,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    if (onRefresh) {
      onRefresh();
    }
    // Instant smooth reload of the application
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Subtle atmospheric gradient grid */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900/60 to-slate-950 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Copy with exact user requested title & description */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed context kicker (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>Moçambique & Lusofonia</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">100% Métodos Legítimos e Verificados</span>
            </div>

            {/* Exact required Title with Refresh Button directly where 'internet.' is */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              Descubra novas formas de aumentar sua renda usando a{' '}
              <span className="inline-flex items-center flex-wrap gap-2.5">
                <span className="text-white underline decoration-emerald-500/60 decoration-4 underline-offset-4">
                  internet.
                </span>
                <button
                  type="button"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  title="Clique para atualizar e recarregar a página"
                  aria-label="Atualizar página"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/50 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer min-h-[42px] active:scale-95"
                >
                  <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span className="whitespace-nowrap">
                    {isRefreshing ? 'Atualizando...' : 'Atualizar página'}
                  </span>
                </button>
              </span>
            </h1>

            {/* Exact required Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Informação, ferramentas e estratégias para quem quer explorar oportunidades no mundo digital.
            </p>

            {/* Exact required CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreOpportunities}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Explorar oportunidades</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewTips}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white font-semibold text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Ver dicas</span>
              </button>
            </div>

            {/* Practical Mozambique Reality Checklist */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recebimento via M-Pesa & Bancos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sem promessas de dinheiro fácil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Compatível com Celular</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor or Data-Light Box */}
          <div className="lg:col-span-5">
            {dataSaver ? (
              // Data Saver version: 0 KB image download, instant pure CSS card
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-xs text-slate-400">
                  <span className="font-semibold text-white">Resumo de Oportunidades</span>
                  <span>Modo Econômico</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/70 rounded-xl border border-slate-800">
                    <p className="text-xs text-emerald-400 font-medium">Freelance Global</p>
                    <p className="text-sm font-bold text-white mt-0.5">Redação, Design e Suporte Remoto</p>
                    <p className="text-xs text-slate-400 mt-1">Ganhos em USD · Transferência bancária direta</p>
                  </div>
                  <div className="p-3 bg-slate-900/70 rounded-xl border border-slate-800">
                    <p className="text-xs text-emerald-400 font-medium">Comércio no WhatsApp</p>
                    <p className="text-sm font-bold text-white mt-0.5">Vendas sob encomenda sem estoque</p>
                    <p className="text-xs text-slate-400 mt-1">Pagamentos imediatos via M-Pesa e e-Mola</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  Economia de dados ativa para navegar com velocidade máxima.
                </p>
              </div>
            ) : (
              // High-Fidelity Generated Photo with fallback
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800 group">
                {!imageError ? (
                  <img
                    src="/src/assets/images/hero_digital_work_1791024223779.jpg"
                    alt="Jovem profissional trabalhando online em Moçambique com computador e celular"
                    className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  // Fallback container adhering to Zero-Broken-Image Policy
                  <div className="w-full h-72 sm:h-80 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-emerald-400 mb-3" />
                    <h3 className="text-lg font-bold text-white">Fazendo Dinheiro na Net</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs">
                      Estratégias reais para faturar com serviços online e produtos digitais.
                    </p>
                  </div>
                )}
                {/* Visual Scrim for contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Metas Reais</p>
                  <p className="text-sm font-medium text-white">
                    Trabalhe a partir de casa com clientes locais e internacionais.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
