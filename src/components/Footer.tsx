import { ArrowUp, Keyboard, ExternalLink } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                ♿
              </span>
              <span>Acessibilidade para Todos</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Painel de acessibilidade com 8 recursos integrados desenvolvido para a disciplina de Desenvolvimento Web (Turma B) da Profª Noemi Paiva dos Santos.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white font-bold uppercase tracking-wider text-[11px]">
              Referências Normativas
            </p>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>W3C / WCAG 2.2 Guidelines</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/emag"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>eMAG - Governo Federal Brasileiro</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Lei Brasileira de Inclusão (LBI nº 13.146)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-white font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Keyboard className="w-3.5 h-3.5 text-blue-400" />
              Atalhos de Acessibilidade
            </p>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li><strong className="text-slate-200">Alt + A:</strong> Abrir/Fechar Painel</li>
              <li><strong className="text-slate-200">Alt + R:</strong> Restaurar Padrões</li>
              <li><strong className="text-slate-200">Alt + L:</strong> Leitura em Voz Alta</li>
              <li><strong className="text-slate-200">Esc:</strong> Fechar Diálogos</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            Projeto Acadêmico Avaliativo · Turma B · Profª Noemi Paiva dos Santos
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-200 transition-colors text-xs focus:outline-none"
            aria-label="Voltar para o topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
