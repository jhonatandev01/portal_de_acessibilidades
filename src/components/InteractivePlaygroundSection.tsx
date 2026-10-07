import { useState } from 'react';
import {
  Eye,
  CheckCircle2,
  AlertTriangle,
  Volume2,
  FileText,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { VisionFilter } from '../types/accessibility';

interface InteractivePlaygroundSectionProps {
  visionFilter: VisionFilter;
  setVisionFilter: (filter: VisionFilter) => void;
  onSpeak: (text: string, element?: HTMLElement) => void;
  onOpenPanel: () => void;
}

export function InteractivePlaygroundSection({
  visionFilter,
  setVisionFilter,
  onSpeak,
  onOpenPanel,
}: InteractivePlaygroundSectionProps) {
  const [activeTab, setActiveTab] = useState<'vision' | 'form' | 'table'>('vision');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
    }, 600);
  };

  const visionOptions: { id: VisionFilter; label: string; desc: string }[] = [
    { id: 'none', label: 'Visão Padrão', desc: 'Sem alterações visuais aplicadas.' },
    { id: 'protanopia', label: 'Protanopia', desc: 'Dificuldade em distinguir luz vermelha.' },
    { id: 'deuteranopia', label: 'Deuteranopia', desc: 'Dificuldade em distinguir luz verde (mais comum).' },
    { id: 'tritanopia', label: 'Tritanopia', desc: 'Dificuldade em distinguir luz azul/amarela.' },
    { id: 'achromatopsia', label: 'Acromatopsia', desc: 'Ausência total de cores (visão monocromática).' },
    { id: 'low-vision', label: 'Baixa Visão / Turvação', desc: 'Simula redução de acuidade visual e catarata.' },
  ];

  return (
    <section id="demonstracao" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            Laboratório & Sandbox Interativo
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Demonstração Prática de Acessibilidade
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Teste os 8 recursos do painel em tempo real sobre componentes comuns da web: formulários semânticos, tabelas estruturadas e um simulador de deficiências cromáticas.
          </p>
        </div>

        {/* Abas do Playground */}
        <div className="flex items-center gap-1 p-1.5 bg-slate-200/80 rounded-xl max-w-md mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('vision')}
            className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'vision'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Simulador de Visão
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'form'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Formulário Acessível
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('table')}
            className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'table'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tabela Semântica
          </button>
        </div>

        {/* CONTEÚDO DA ABA 1: Simulador de Visão */}
        {activeTab === 'vision' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Simulador de Empatia: Condições Visuais
              </h3>
              <p className="text-xs text-slate-600">
                Selecione uma condição para simular como uma pessoa com daltonismo ou baixa acuidade visual enxerga esta página. Repare como o <strong>Modo Alto Contraste</strong> do painel ajuda a manter a legibilidade!
              </p>
            </div>

            {/* Controles de Filtro de Visão */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {visionOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setVisionFilter(opt.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    visionFilter === opt.id
                      ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-bold shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <p className="text-xs font-bold leading-tight">{opt.label}</p>
                  <p className="text-[10px] text-slate-500 mt-1 leading-tight">{opt.desc}</p>
                </button>
              ))}
            </div>

            {/* Amostra Visual de Teste de Cores */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
              <p className="text-xs font-bold text-slate-700">
                Teste de Diferenciação de Estado (WCAG 1.4.1 - Não usar apenas cor):
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-emerald-900 block">Sucesso (Concluído)</span>
                    <span className="text-[11px] text-emerald-700">Identificado por ícone + texto</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-center gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-amber-900 block">Atenção (Alerta)</span>
                    <span className="text-[11px] text-amber-700">Identificado por ícone + texto</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-xs shrink-0">
                    ✕
                  </span>
                  <div>
                    <span className="text-xs font-bold text-rose-900 block">Erro Crítico</span>
                    <span className="text-[11px] text-rose-700">Identificado por ícone + texto</span>
                  </div>
                </div>
              </div>
            </div>

            {visionFilter !== 'none' && (
              <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                <span>Simulação visual ativa: <strong>{visionFilter}</strong>.</span>
                <button
                  type="button"
                  onClick={() => setVisionFilter('none')}
                  className="font-bold underline hover:text-amber-950"
                >
                  Restaurar Visão Normal
                </button>
              </div>
            )}
          </div>
        )}

        {/* CONTEÚDO DA ABA 2: Formulário Acessível */}
        {activeTab === 'form' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Formulário com Boas Práticas WCAG
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Todos os campos possuem etiquetas <code>&lt;label&gt;</code> vinculadas com <code>htmlFor</code>, textos auxiliares vinculados por <code>aria-describedby</code>, e foco visível ampliado.
              </p>

              {formSuccess ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-sm space-y-2"
                >
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Mensagem enviada com sucesso!</span>
                  </div>
                  <p className="text-xs text-emerald-700">
                    Obrigado por interagir com a demonstração acessível.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSuccess(false);
                      setFormName('');
                      setFormEmail('');
                      setFormMessage('');
                    }}
                    className="text-xs font-bold underline text-emerald-800"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="form-nome-completo"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Nome Completo <span className="text-rose-600" aria-label="obrigatório">*</span>
                    </label>
                    <input
                      id="form-nome-completo"
                      name="nome"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Ex: Maria da Silva"
                      aria-describedby="nome-ajuda"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                    <p id="nome-ajuda" className="text-[11px] text-slate-500 mt-1">
                      Informe seu nome e sobrenome como gostaria de ser chamado.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="form-email-contato"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Endereço de E-mail <span className="text-rose-600" aria-label="obrigatório">*</span>
                    </label>
                    <input
                      id="form-email-contato"
                      name="email"
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="exemplo@dominio.com.br"
                      aria-describedby="email-ajuda"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                    <p id="email-ajuda" className="text-[11px] text-slate-500 mt-1">
                      Nunca compartilhamos seu endereço de correio eletrônico.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="form-mensagem-acessivel"
                      className="block text-xs font-bold text-slate-800 mb-1"
                    >
                      Sugestão de Acessibilidade
                    </label>
                    <textarea
                      id="form-mensagem-acessivel"
                      name="mensagem"
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Compartilhe como este painel pode ser aprimorado..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {formSubmitting ? 'Validando envio...' : 'Submeter Formulário Acessível'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* CONTEÚDO DA ABA 3: Tabela Semântica */}
        {activeTab === 'table' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs overflow-x-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Tabela de Conformidade e Acessibilidade (WCAG 2.2)
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Construída com legenda formal <code>&lt;caption&gt;</code>, cabeçalhos <code>&lt;th scope="col"&gt;</code>, títulos de linha <code>&lt;th scope="row"&gt;</code> e números tabulares (<code>tabular-nums</code>).
            </p>

            <table className="w-full text-left text-xs border-collapse">
              <caption className="sr-only">
                Demonstrativo comparativo dos níveis de conformidade de acessibilidade digital
              </caption>
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700">
                  <th scope="col" className="p-3 font-bold">Nível WCAG</th>
                  <th scope="col" className="p-3 font-bold">Exigência Legal</th>
                  <th scope="col" className="p-3 font-bold">Contraste Mínimo</th>
                  <th scope="col" className="p-3 font-bold">Tamanho da Fonte</th>
                  <th scope="col" className="p-3 font-bold">Navegação Teclado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr className="hover:bg-slate-50/50">
                  <th scope="row" className="p-3 font-bold text-blue-700">Nível A (Básico)</th>
                  <td className="p-3">Mínimo fundamental</td>
                  <td className="p-3 font-mono tabular-nums">3:1</td>
                  <td className="p-3">Redimensionável</td>
                  <td className="p-3 text-emerald-700 font-semibold">Sem armadilha de foco</td>
                </tr>
                <tr className="hover:bg-slate-50/50 bg-blue-50/20">
                  <th scope="row" className="p-3 font-bold text-blue-700">Nível AA (Padrão eMAG / LBI)</th>
                  <td className="p-3 font-semibold text-blue-900">Obrigatório no Brasil</td>
                  <td className="p-3 font-mono tabular-nums font-bold">4.5:1 (Normal) / 3:1 (Grande)</td>
                  <td className="p-3">Ampliação até 200%</td>
                  <td className="p-3 text-emerald-700 font-semibold">Foco visível obrigatório</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <th scope="row" className="p-3 font-bold text-blue-700">Nível AAA (Avançado)</th>
                  <td className="p-3">Excelência máxima</td>
                  <td className="p-3 font-mono tabular-nums">7:1 (Alto contraste)</td>
                  <td className="p-3">Totalmente configurável</td>
                  <td className="p-3 text-emerald-700 font-semibold">Atalhos personalizáveis</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
