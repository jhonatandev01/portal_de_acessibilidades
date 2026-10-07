import { Sliders, Eye } from 'lucide-react';

interface NavbarProps {
  onOpenPanel: () => void;
  activeCount: number;
}

export function Navbar({ onOpenPanel, activeCount }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Skip Link para acessibilidade de navegação por teclado */}
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal (Alt + 1)
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zona 1: Título de marca (elemento de texto único conforme constituição) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
            ♿
          </span>
          <span>Acessibilidade para Todos</span>
        </a>

        {/* Zona 2: 4 a 5 links de navegação limpos com sublinhado no hover */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          aria-label="Navegação principal"
        >
          <a href="#sobre" className="hover:text-slate-900 transition-colors">
            O que é
          </a>
          <a href="#pilares" className="hover:text-slate-900 transition-colors">
            Pilares WCAG
          </a>
          <a href="#recursos" className="hover:text-slate-900 transition-colors">
            8 Recursos
          </a>
          <a href="#demonstracao" className="hover:text-slate-900 transition-colors">
            Demonstração Prática
          </a>
          <a href="#projeto" className="hover:text-slate-900 transition-colors">
            Sobre o Projeto
          </a>
        </nav>

        {/* Zona 3: Ação primária (Abertura do Painel de Acessibilidade) */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenPanel}
            className="flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            aria-label="Abrir Painel de Recursos de Acessibilidade"
          >
            <Sliders className="w-4 h-4" />
            <span>Painel</span>
            {activeCount > 0 && (
              <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-1.5 py-0.2 rounded-full">
                {activeCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
