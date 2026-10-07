import { Sliders } from 'lucide-react';

interface FloatingAccessibilityButtonProps {
  onClick: () => void;
  isOpen: boolean;
  activeCount: number;
}

export function FloatingAccessibilityButton({
  onClick,
  isOpen,
  activeCount,
}: FloatingAccessibilityButtonProps) {
  if (isOpen) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="panel-ui-ignore fixed bottom-6 right-6 z-[99980] flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl border-2 border-white/80 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 group cursor-pointer"
      aria-label={`Abrir Painel de Acessibilidade. ${activeCount > 0 ? `${activeCount} recursos ativos.` : ''} Atalho: Alt + A`}
      title="Painel de Acessibilidade (Atalho: Alt + A)"
    >
      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
        ♿
      </div>
      <span className="text-xs sm:text-sm font-bold tracking-tight pr-1">
        Acessibilidade
      </span>

      {activeCount > 0 && (
        <span
          className="bg-amber-400 text-slate-950 text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs"
          title={`${activeCount} recursos ativados`}
        >
          {activeCount}
        </span>
      )}
    </button>
  );
}
