import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Info } from 'lucide-react';

interface ActivityOption {
  id: string;
  name: string;
  avgEarning: number; // in Meticais per unit
  unitLabel: string;
  timePerUnitHours: number;
  description: string;
}

const ACTIVITIES: ActivityOption[] = [
  {
    id: 'design',
    name: 'Pacote de 3 Artes no Canva (Redes Sociais)',
    avgEarning: 750,
    unitLabel: 'pacotes fechados',
    timePerUnitHours: 2.5,
    description: 'Criar posts e flyers para pequenas lojas, salões e restaurantes locais.'
  },
  {
    id: 'redacao',
    name: 'Formatação de CV / Digitação de Documento',
    avgEarning: 500,
    unitLabel: 'documentos entregues',
    timePerUnitHours: 1.5,
    description: 'Otimização de currículos para processos seletivos ou digitação de relatórios.'
  },
  {
    id: 'assistente',
    name: 'Assistente Virtual / Atendimento WhatsApp',
    avgEarning: 250, // per hour
    unitLabel: 'horas de atendimento prestadas',
    timePerUnitHours: 1,
    description: 'Responder dúvidas e encaminhar pedidos de clientes em lojas online.'
  },
  {
    id: 'vendas',
    name: 'Venda de Produtos sob Encomenda (Lucro Líquido)',
    avgEarning: 400,
    unitLabel: 'pedidos entregues com sucesso',
    timePerUnitHours: 1,
    description: 'Margem média de lucro por peça de roupa, acessório ou eletrônico vendido.'
  }
];

export const IncomeCalculator: React.FC = () => {
  const [targetIncome, setTargetIncome] = useState<number>(10000); // 10.000 MT
  const [selectedActivityId, setSelectedActivityId] = useState<string>('design');

  const selectedActivity = ACTIVITIES.find(a => a.id === selectedActivityId) || ACTIVITIES[0];
  const requiredUnits = Math.ceil(targetIncome / selectedActivity.avgEarning);
  const unitsPerWeek = Math.max(1, Math.ceil(requiredUnits / 4));
  const estimatedHoursPerWeek = Math.round(unitsPerWeek * selectedActivity.timePerUnitHours);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
          <Calculator className="w-4 h-4 text-emerald-600" />
          <span>Planejador Realista de Metas</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
          Calculadora de Esforço para Renda Extra em Meticais (MT)
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Veja quanto trabalho real é necessário para atingir sua meta financeira mensal sem ilusões.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-5">
          {/* Target Income Preset Buttons */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2">
              Meta de Renda Extra Desejada por Mês:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[5000, 10000, 20000].map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setTargetIncome(val)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer border min-h-[44px] ${
                    targetIncome === val
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {val.toLocaleString('pt-MZ')} MT
                </button>
              ))}
            </div>

            {/* Custom Range Slider */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Ajuste fino:</span>
                <span className="font-bold text-emerald-700 text-sm">
                  {targetIncome.toLocaleString('pt-MZ')} MT / mês
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={targetIncome}
                onChange={(e) => setTargetIncome(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>
          </div>

          {/* Activity Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2">
              Tipo de Atividade que você pretende realizar:
            </label>
            <div className="space-y-2">
              {ACTIVITIES.map(act => (
                <button
                  key={act.id}
                  type="button"
                  onClick={() => setSelectedActivityId(act.id)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-colors cursor-pointer min-h-[44px] ${
                    selectedActivityId === act.id
                      ? 'bg-emerald-50/70 border-emerald-500/80 text-emerald-950 font-medium'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900">{act.name}</span>
                    <span className="text-emerald-700 font-bold shrink-0 ml-2">
                      ~{act.avgEarning} MT
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">{act.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Breakdown Result Card */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-200">
              Plano de Execução Realista
            </h3>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="text-xs text-slate-500 block">Total necessário no mês:</span>
                <p className="text-xl sm:text-2xl font-extrabold text-emerald-800 mt-0.5">
                  {requiredUnits} {selectedActivity.unitLabel}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Isso equivale a aproximadamente <strong className="text-slate-900">{unitsPerWeek} por semana</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="text-xs text-slate-500 block">Tempo estimado de dedicação:</span>
                <p className="text-lg font-bold text-slate-900 mt-0.5">
                  ~{estimatedHoursPerWeek} horas por semana
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Ou cerca de {Math.max(1, Math.round(estimatedHoursPerWeek / 5))} hora(s) por dia útil.
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Importante:</strong> Clientes não aparecem sozinhos no primeiro dia. Reserve de 1 a 2 semanas iniciais para criar seu portfólio de exemplos e entrar em contato com os primeiros prospects.
              </span>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>Valores calculados em Meticais (MZN)</span>
            <span className="text-emerald-700 font-semibold">Sem promessas irreais</span>
          </div>
        </div>
      </div>
    </div>
  );
};
