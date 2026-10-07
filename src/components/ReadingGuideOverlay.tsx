import { useState, useEffect } from 'react';
import { X, Sliders } from 'lucide-react';

interface ReadingGuideOverlayProps {
  isActive: boolean;
  onClose: () => void;
}

export function ReadingGuideOverlay({ isActive, onClose }: ReadingGuideOverlayProps) {
  const [mouseY, setMouseY] = useState<number>(300);
  const [guideHeight, setGuideHeight] = useState<number>(44); // pixels da abertura

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  if (!isActive) return null;

  const topMaskHeight = Math.max(0, mouseY - guideHeight / 2);
  const bottomMaskTop = mouseY + guideHeight / 2;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[99990] transition-opacity duration-150"
      aria-hidden="true"
    >
      {/* Máscara Superior */}
      <div
        className="absolute top-0 left-0 right-0 bg-slate-950/45 backdrop-blur-[0.5px] transition-all"
        style={{ height: `${topMaskHeight}px` }}
      />

      {/* Régua de Foco Visual (Slit) */}
      <div
        className="absolute left-0 right-0 border-y-2 border-amber-400 bg-amber-400/5 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
        style={{
          top: `${topMaskHeight}px`,
          height: `${guideHeight}px`,
        }}
      >
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-2 bg-slate-900/90 text-slate-100 px-3 py-1 rounded-full text-xs shadow-md border border-slate-700/60">
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono text-[11px]">{guideHeight}px</span>
          <button
            type="button"
            onClick={() => setGuideHeight((h) => (h === 32 ? 48 : h === 48 ? 64 : 32))}
            className="hover:text-amber-300 font-medium px-1 rounded focus:outline-none"
            title="Alternar altura da régua"
          >
            Ajustar
          </button>
          <span className="text-slate-500">|</span>
          <button
            type="button"
            onClick={onClose}
            className="hover:text-rose-400 p-0.5 rounded focus:outline-none"
            title="Fechar régua de leitura"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Máscara Inferior */}
      <div
        className="absolute left-0 right-0 bottom-0 bg-slate-950/45 backdrop-blur-[0.5px] transition-all"
        style={{ top: `${bottomMaskTop}px` }}
      />
    </div>
  );
}
