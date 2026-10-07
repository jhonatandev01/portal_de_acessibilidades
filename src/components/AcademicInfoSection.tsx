import { GraduationCap, Award, Calendar, User, CheckCircle2, BookOpen } from 'lucide-react';

export function AcademicInfoSection() {
  return (
    <section id="projeto" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            Identificação Acadêmica & Critérios Avaliativos
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ficha Técnica do Projeto: Painel de Acessibilidade
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Desenvolvido para cumprimento dos requisitos da atividade individual avaliativa (100 pontos) proposta pela Professora Noemi Paiva dos Santos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card com Metadados da Disciplina */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Projeto: Painel de Acessibilidade
                </h3>
                <p className="text-xs text-slate-500">Desenvolvimento Web Acessível</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700 block">Docente Responsável:</span>
                  <span className="text-slate-900 font-medium">Profª Noemi Paiva dos Santos</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700 block">Turma & Modalidade:</span>
                  <span className="text-slate-900 font-medium">Turma B · Atividade Individual</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700 block">Prazos Oficiais:</span>
                  <span className="text-slate-900 font-medium">Publicado em 11 de set. | Prazo final: 29 de set.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-700 block">Pontuação:</span>
                  <span className="text-slate-900 font-bold text-emerald-700">100 pontos</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Tema Proposto:
              </p>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
                “Acessibilidade para Todos”
              </div>
            </div>
          </div>

          {/* Checklist de Entrega e Conformidade */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Checklist de Itens Entregues (100% Concluído)
            </h3>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Painel de Acessibilidade com 8 Recursos de Pesquisa
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Implementação dos 8 recursos pesquisados (Tamanho de Fonte, Alto Contraste eMAG, Fonte para Dislexia Atkinson, Espaçamento de Linhas, Régua Focal de Leitura, Síntese de Voz Web Speech pt-BR, Cursor Ampliado e Destaque de Hiperlinks).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Site Completo com o Tema “Acessibilidade para Todos”
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Portal educativo estruturado com os 4 Pilares da WCAG (POUR), contexto da Lei Brasileira de Inclusão (LBI), sandbox com formulários acessíveis e simulador de deficiências cromáticas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Tecnologias Utilizadas (HTML, CSS e JavaScript / TypeScript)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Desenvolvido com marcação semântica HTML5, estilização moderna com CSS3/Tailwind, Web Speech API nativa, manipulação avançada de classes de acessibilidade e persistência com LocalStorage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
