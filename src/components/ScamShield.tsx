import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle, AlertOctagon } from 'lucide-react';

export const ScamShield: React.FC = () => {
  const rules = [
    {
      title: 'Regra de Ouro: Você trabalha para receber, não para pagar',
      desc: 'Nenhuma empresa ou plataforma séria exige que você pague uma "taxa de ativação de conta", "taxa de envio de equipamento" ou "comprar pacote VIP" para ter acesso a tarefas remuneradas.',
      isScam: true
    },
    {
      title: 'Promessas de Lucros Fixos Diários (10% a 30% ao dia)',
      desc: 'Qualquer sistema que garanta que você vai dobrar o dinheiro em poucos dias sem vender nada ou sem prestar serviço é um esquema Ponzi/pirâmide. Eles inevitavelmente fecham e somem com o dinheiro.',
      isScam: true
    },
    {
      title: 'Proteja suas senhas e PIN do M-Pesa / e-Mola',
      desc: 'Nunca forneça senhas de carteiras digitais ou códigos SMS de verificação para terceiros, mesmo que eles aleguem ser do "suporte técnico" de plataformas.',
      isScam: true
    },
    {
      title: 'Como saber se uma oportunidade é legítima?',
      desc: 'Existe um serviço claro sendo prestado (redação, tradução, suporte, arte gráfica), o contrato é claro, há clientes reais avaliando o trabalho e pagamentos são intermediados por empresas com registro legal.',
      isScam: false
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 overflow-hidden relative">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Guia de Proteção ao Trabalhador Online</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Alerta Anti-Golpes: Como Navegar com Segurança
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
          O portal Fazendo Dinheiro na Net preza pela sua segurança financeira. Conheça os sinais mais comuns de fraudes e aprenda a se proteger.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {rules.map((rule, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-xl border transition-colors ${
              rule.isScam 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-emerald-950/40 border-emerald-800/60'
            }`}
          >
            <div className="flex items-start gap-2.5">
              {rule.isScam ? (
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className={`text-xs sm:text-sm font-bold ${rule.isScam ? 'text-white' : 'text-emerald-200'}`}>
                  {rule.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span>Viu algo suspeito na internet? Não envie dinheiro nem dados bancários.</span>
        <span className="text-emerald-400 font-medium">Verificado pela equipe Fazendo Dinheiro na Net</span>
      </div>
    </div>
  );
};
