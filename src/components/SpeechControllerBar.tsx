import { Volume2, Play, Pause, Square, FastForward, X } from 'lucide-react';

interface SpeechControllerBarProps {
  isSpeaking: boolean;
  isPaused: boolean;
  currentText: string;
  speechRate: number;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onSetRate: (rate: number) => void;
  onClose: () => void;
}

export function SpeechControllerBar({
  isSpeaking,
  isPaused,
  currentText,
  speechRate,
  onPause,
  onResume,
  onStop,
  onSetRate,
  onClose,
}: SpeechControllerBarProps) {
  if (!isSpeaking && !currentText) return null;

  return (
    <div
      role="region"
      aria-label="Controles do Leitor de Tela em Voz Alta"
      className="panel-ui-ignore fixed bottom-5 left-1/2 -translate-x-1/2 z-[99995] w-[95%] max-w-xl bg-slate-900/95 text-slate-100 p-3 sm:p-4 rounded-2xl shadow-2xl border border-blue-500/40 backdrop-blur-md transition-all flex flex-col sm:flex-row items-center gap-3 justify-between"
    >
      <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
        <div className="w-9 h-9 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
          <Volume2 className={`w-5 h-5 ${isSpeaking && !isPaused ? 'animate-pulse' : ''}`} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-blue-300 font-semibold tracking-wide uppercase flex items-center gap-1.5">
            <span>{isPaused ? 'Leitura Pausada' : 'Leitura em Andamento'}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[11px] text-slate-400 lowercase">{speechRate}x</span>
          </p>
          <p className="text-xs text-slate-200 truncate max-w-xs sm:max-w-sm">
            {currentText || 'Lendo conteúdo selecionado...'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
        {/* Play / Pausa */}
        {isPaused ? (
          <button
            type="button"
            onClick={onResume}
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-1 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Retomar leitura"
          >
            <Play className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">Continuar</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onPause}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Pausar leitura"
          >
            <Pause className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">Pausar</span>
          </button>
        )}

        {/* Parar */}
        <button
          type="button"
          onClick={onStop}
          className="p-2 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/60 transition-colors flex items-center gap-1 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-400"
          aria-label="Parar leitura"
        >
          <Square className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">Parar</span>
        </button>

        {/* Velocidade */}
        <div className="flex items-center bg-slate-800/80 border border-slate-700/60 rounded-lg p-0.5 text-[11px]">
          <button
            type="button"
            onClick={() => onSetRate(0.8)}
            className={`px-1.5 py-1 rounded ${speechRate === 0.8 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            title="Velocidade 0.8x"
          >
            0.8x
          </button>
          <button
            type="button"
            onClick={() => onSetRate(1.0)}
            className={`px-1.5 py-1 rounded ${speechRate === 1.0 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            title="Velocidade normal 1.0x"
          >
            1x
          </button>
          <button
            type="button"
            onClick={() => onSetRate(1.25)}
            className={`px-1.5 py-1 rounded ${speechRate === 1.25 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            title="Velocidade rápida 1.25x"
          >
            1.25x
          </button>
        </div>

        {/* Fechar barra */}
        <button
          type="button"
          onClick={() => {
            onStop();
            onClose();
          }}
          className="p-1.5 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 focus:outline-none"
          aria-label="Fechar barra de leitura"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
