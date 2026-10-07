import { useEffect, useRef } from 'react';
import {
  Type,
  SunMoon,
  BookOpen,
  AlignJustify,
  Maximize2,
  Volume2,
  MousePointer,
  ExternalLink,
  RotateCcw,
  X,
  Keyboard,
  Info,
  Check,
  PauseCircle,
  Play,
  VolumeX,
} from 'lucide-react';
import { AccessibilitySettings, FontScale, ContrastTheme } from '../types/accessibility';

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  setFontScale: (scale: FontScale) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  setContrastTheme: (theme: ContrastTheme) => void;
  toggleDyslexiaFont: () => void;
  toggleExpandedSpacing: () => void;
  toggleReadingGuide: () => void;
  toggleBigCursor: () => void;
  toggleHighlightLinks: () => void;
  toggleStopAnimations: () => void;
  toggleScreenReaderVoice: () => void;
  readFullPage: () => void;
  stopSpeech: () => void;
  isSpeaking: boolean;
  resetAllSettings: () => void;
}

export function AccessibilityPanel({
  isOpen,
  onClose,
  settings,
  setFontScale,
  increaseFontSize,
  decreaseFontSize,
  setContrastTheme,
  toggleDyslexiaFont,
  toggleExpandedSpacing,
  toggleReadingGuide,
  toggleBigCursor,
  toggleHighlightLinks,
  toggleStopAnimations,
  toggleScreenReaderVoice,
  readFullPage,
  stopSpeech,
  isSpeaking,
  resetAllSettings,
}: AccessibilityPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Foco no botão fechar quando o painel for aberto
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Fechar com tecla Escape já é tratado no hook, mas mantemos suporte
  if (!isOpen) return null;

  return (
    <div
      className="panel-ui-ignore fixed inset-0 z-[99999] flex justify-end bg-slate-950/50 backdrop-blur-xs transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-panel-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="w-full max-w-md bg-white text-slate-900 shadow-2xl flex flex-col h-full border-l border-slate-200 animate-in slide-in-from-right duration-250 overflow-hidden"
      >
        {/* Cabeçalho do Painel */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              ♿
            </div>
            <div>
              <h2 id="accessibility-panel-title" className="text-base font-bold text-slate-900 leading-tight">
                Painel de Acessibilidade
              </h2>
              <p className="text-xs text-slate-500">8 Recursos WCAG 2.2 & eMAG Integrados</p>
            </div>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Fechar painel de acessibilidade (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Painel - Lista dos 8 Recursos */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 text-sm">
          {/* Informação Rápida */}
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Personalize sua experiência de navegação. Todas as preferências são salvas automaticamente no seu navegador.
            </p>
          </div>

          {/* RECURSO 1: Ajuste de Tamanho da Fonte */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Type className="w-4 h-4 text-blue-600" />
                  Tamanho da Fonte
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                {settings.fontScale}%
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Amplie o texto para facilitar a leitura sem quebrar a estrutura da página.
            </p>

            <div className="grid grid-cols-4 gap-1.5">
              {([100, 115, 130, 150] as FontScale[]).map((scale) => (
                <button
                  key={scale}
                  type="button"
                  onClick={() => setFontScale(scale)}
                  className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-all ${
                    settings.fontScale === scale
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                  aria-pressed={settings.fontScale === scale}
                >
                  {scale}%
                </button>
              ))}
            </div>

            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={decreaseFontSize}
                disabled={settings.fontScale <= 100}
                className="flex-1 py-1 text-xs border border-slate-300 rounded-md bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-medium text-slate-700"
              >
                A- (Diminuir)
              </button>
              <button
                type="button"
                onClick={increaseFontSize}
                disabled={settings.fontScale >= 150}
                className="flex-1 py-1 text-xs border border-slate-300 rounded-md bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-medium text-slate-700"
              >
                A+ (Aumentar)
              </button>
            </div>
          </section>

          {/* RECURSO 2: Alto Contraste & Modos Visuais */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                2
              </span>
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <SunMoon className="w-4 h-4 text-blue-600" />
                Alto Contraste e Temas Visuais
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Diferentes paletas para pessoas com baixa visão, catarata ou sensibilidade à luz.
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setContrastTheme('default')}
                className={`p-2 text-xs font-medium rounded-lg border text-left flex items-center gap-2 transition-all ${
                  settings.contrastTheme === 'default'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-slate-300 border border-slate-400"></div>
                Padrão Normal
              </button>

              <button
                type="button"
                onClick={() => setContrastTheme('high-contrast')}
                className={`p-2 text-xs font-medium rounded-lg border text-left flex items-center gap-2 transition-all ${
                  settings.contrastTheme === 'high-contrast'
                    ? 'border-amber-400 bg-black text-yellow-300 font-bold'
                    : 'border-slate-800 bg-black text-yellow-300 hover:opacity-90'
                }`}
                title="Padrão governamental eMAG: Fundo preto e texto amarelo"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-300 border border-black"></div>
                Alto Contraste (eMAG)
              </button>

              <button
                type="button"
                onClick={() => setContrastTheme('dark')}
                className={`p-2 text-xs font-medium rounded-lg border text-left flex items-center gap-2 transition-all ${
                  settings.contrastTheme === 'dark'
                    ? 'border-blue-500 bg-slate-900 text-white font-bold'
                    : 'border-slate-700 bg-slate-900 text-slate-200 hover:opacity-90'
                }`}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-slate-800 border border-slate-600"></div>
                Modo Noturno
              </button>

              <button
                type="button"
                onClick={() => setContrastTheme('grayscale')}
                className={`p-2 text-xs font-medium rounded-lg border text-left flex items-center gap-2 transition-all ${
                  settings.contrastTheme === 'grayscale'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-gray-300 to-gray-700"></div>
                Monocromático
              </button>

              <button
                type="button"
                onClick={() => setContrastTheme('inverted')}
                className={`col-span-2 p-2 text-xs font-medium rounded-lg border text-left flex items-center gap-2 transition-all ${
                  settings.contrastTheme === 'inverted'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-indigo-600"></div>
                Inversão de Cores (Invert Colors)
              </button>
            </div>
          </section>

          {/* RECURSO 3: Fonte Amigável para Dislexia */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex-1 pr-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Fonte para Dislexia
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Atkinson Hyperlegible com caracteres assimétricos que evitam confusão de letras espelhadas (b, d, p, q).
              </p>
            </div>

            <button
              type="button"
              onClick={toggleDyslexiaFont}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0 ${
                settings.dyslexiaFont ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label="Ativar fonte para dislexia"
              aria-pressed={settings.dyslexiaFont}
            >
              <span
                className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                  settings.dyslexiaFont ? 'translate-x-6.5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </section>

          {/* RECURSO 4: Espaçamento de Texto e Linhas */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex-1 pr-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <AlignJustify className="w-4 h-4 text-blue-600" />
                  Espaçamento Ampliado
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Aumenta o line-height (2.0x) e a distância entre letras, reduzindo a aglomeração visual.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleExpandedSpacing}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0 ${
                settings.expandedSpacing ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label="Ativar espaçamento de texto ampliado"
              aria-pressed={settings.expandedSpacing}
            >
              <span
                className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                  settings.expandedSpacing ? 'translate-x-6.5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </section>

          {/* RECURSO 5: Guia e Régua de Leitura */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex-1 pr-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                  5
                </span>
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Maximize2 className="w-4 h-4 text-blue-600" />
                  Guia / Régua de Leitura
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Máscara focal que segue o cursor do mouse para manter o foco na linha de leitura (ideal para TDAH).
              </p>
            </div>

            <button
              type="button"
              onClick={toggleReadingGuide}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0 ${
                settings.readingGuide ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label="Ativar guia de leitura"
              aria-pressed={settings.readingGuide}
            >
              <span
                className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                  settings.readingGuide ? 'translate-x-6.5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </section>

          {/* RECURSO 6: Leitor de Texto em Voz Alta (Web Speech TTS) */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                  6
                </span>
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-blue-600" />
                  Leitor de Tela em Voz Alta
                </span>
              </div>

              <button
                type="button"
                onClick={toggleScreenReaderVoice}
                className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0 ${
                  settings.screenReaderVoice ? 'bg-blue-600' : 'bg-slate-300'
                }`}
                aria-label="Ativar síntese de voz"
                aria-pressed={settings.screenReaderVoice}
              >
                <span
                  className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                    settings.screenReaderVoice ? 'translate-x-6.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-3">
              {settings.screenReaderVoice
                ? '🔊 Modo ativo! Clique em qualquer parágrafo ou título da página para ouvi-lo em voz alta.'
                : 'Síntese de voz em português (pt-BR). Permite ouvir qualquer parágrafo ou o conteúdo completo.'}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={readFullPage}
                className="flex-1 py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Ler Conteúdo Agora
              </button>

              {isSpeaking && (
                <button
                  type="button"
                  onClick={stopSpeech}
                  className="py-1.5 px-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors shadow-xs"
                  title="Parar leitura em voz alta"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                  Parar
                </button>
              )}
            </div>
          </section>

          {/* RECURSO 7: Cursor Ampliado de Alto Contraste */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex-1 pr-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                  7
                </span>
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <MousePointer className="w-4 h-4 text-blue-600" />
                  Cursor Ampliado
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Ponteiro em formato ampliado com contorno duplo e ponto amarelo neon de fácil rastreio.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleBigCursor}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0 ${
                settings.bigCursor ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label="Ativar cursor ampliado"
              aria-pressed={settings.bigCursor}
            >
              <span
                className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                  settings.bigCursor ? 'translate-x-6.5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </section>

          {/* RECURSO 8: Destacar Hiperlinks e Botões */}
          <section className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex-1 pr-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                  8
                </span>
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  Destacar Links e Botões
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Aplica contorno amarelo de 3px e sublinhado grosso em todos os alvos clicáveis da página.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleHighlightLinks}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0 ${
                settings.highlightLinks ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label="Ativar destaque de links"
              aria-pressed={settings.highlightLinks}
            >
              <span
                className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform ${
                  settings.highlightLinks ? 'translate-x-6.5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </section>

          {/* Recurso Adicional: Pausar Animações (WCAG 2.2.2) */}
          <div className="pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <PauseCircle className="w-4 h-4 text-slate-500" />
                  Pausar Animações e Movimento
                </span>
                <p className="text-[11px] text-slate-500">
                  Desativa transições e efeitos para pessoas com labirintite ou vertigem.
                </p>
              </div>

              <button
                type="button"
                onClick={toggleStopAnimations}
                className={`w-10 h-5 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-600 shrink-0 ${
                  settings.stopAnimations ? 'bg-blue-600' : 'bg-slate-300'
                }`}
                aria-label="Pausar animações"
                aria-pressed={settings.stopAnimations}
              >
                <span
                  className={`inline-block w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                    settings.stopAnimations ? 'translate-x-5.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Atalhos de Teclado */}
          <div className="bg-slate-100/80 rounded-xl p-3 text-xs text-slate-600 border border-slate-200 space-y-1.5">
            <div className="font-semibold text-slate-800 flex items-center gap-1.5 text-xs">
              <Keyboard className="w-4 h-4 text-slate-600" />
              Atalhos de Teclado Rápidos
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
              <div><kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 font-mono text-[10px]">Alt + A</kbd> Abrir / Fechar</div>
              <div><kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 font-mono text-[10px]">Alt + R</kbd> Restaurar Padrões</div>
              <div><kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 font-mono text-[10px]">Alt + L</kbd> Ler Conteúdo</div>
              <div><kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 font-mono text-[10px]">Esc</kbd> Fechar Painel</div>
            </div>
          </div>
        </div>

        {/* Rodapé do Painel */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={resetAllSettings}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-2 rounded-lg transition-colors border border-rose-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar Padrões
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
}
