import { Sliders, Sparkles, CheckCircle, ArrowDown } from 'lucide-react';
import heroImage from '../assets/images/hero_digital_accessibility_1790363343936.jpg';

interface HeroSectionProps {
  onOpenPanel: () => void;
}

export function HeroSection({ onOpenPanel }: HeroSectionProps) {
  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna de Texto (7 colunas no desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Metadados sem pill conforme constituição anti-slop */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Projeto Acadêmico</span>
              <span aria-hidden="true">·</span>
              <span>Turma B</span>
              <span aria-hidden="true">·</span>
              <span>Profª Noemi Paiva dos Santos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Acessibilidade para Todos: A Web como Direito Fundamental
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Nenhum usuário deve ser deixado para trás. Este projeto integra um <strong>Painel de Acessibilidade Web completo com 8 recursos essenciais</strong>, projetados e implementados a partir de rigorosa pesquisa nas diretrizes internacionais da <strong>W3C (WCAG 2.2)</strong> e no modelo <strong>eMAG do Governo Federal Brasileiro</strong>.
            </p>

            {/* Destaques rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>8 Recursos interativos plenamente funcionais</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Navegação 100% acessível por teclado (Alt+A)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Síntese de voz nativa (Web Speech API) em pt-BR</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Suporte a dislexia, TDAH e baixa visão</span>
              </div>
            </div>

            {/* Ações principais */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenPanel}
                className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-400 cursor-pointer"
              >
                <Sliders className="w-4 h-4" />
                <span>Abrir Painel de Acessibilidade</span>
              </button>

              <a
                href="#recursos"
                className="flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Conhecer os 8 Recursos</span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Coluna Visual (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src={heroImage}
                alt="Ilustração moderna de inclusão e acessibilidade digital, mostrando pessoas diversas interagindo com telas táteis, leitores de tela e tecnologias assistivas"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[420px] transition-transform duration-500 group-hover:scale-102"
              />
              <div className="p-4 bg-white/95 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-900">
                  Universal Design & Tecnologias Assistivas
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Conforme a Lei Brasileira de Inclusão (Lei nº 13.146/2015, Art. 63), a acessibilidade é obrigatória em sítios da internet.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
