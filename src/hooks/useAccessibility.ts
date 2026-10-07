import { useState, useEffect, useCallback, useRef } from 'react';
import { AccessibilitySettings, FontScale, ContrastTheme, VisionFilter } from '../types/accessibility';

const STORAGE_KEY = 'acessibilidade_para_todos_settings_v1';

export const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontScale: 100,
  contrastTheme: 'default',
  dyslexiaFont: false,
  expandedSpacing: false,
  readingGuide: false,
  screenReaderVoice: false,
  bigCursor: false,
  highlightLinks: false,
  stopAnimations: false,
  speechRate: 1.0,
};

export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Erro ao carregar preferências de acessibilidade:', e);
    }
    return DEFAULT_SETTINGS;
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [visionFilter, setVisionFilter] = useState<VisionFilter>('none');
  const [announcement, setAnnouncement] = useState<string>('');
  
  // TTS State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentReadingText, setCurrentReadingText] = useState<string>('');
  const activeReadingElementRef = useRef<HTMLElement | null>(null);

  // Anúncio falado / leitor de tela
  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    const timer = setTimeout(() => setAnnouncement(''), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Salvar no localStorage sempre que alterar
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Erro ao salvar no localStorage:', e);
    }
  }, [settings]);

  // Aplicar classes no DOM (html e body)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // 1. Escala de Fonte
    html.classList.remove('scale-100', 'scale-115', 'scale-130', 'scale-150');
    html.classList.add(`scale-${settings.fontScale}`);

    // 2. Temas de Contraste
    body.classList.remove('theme-high-contrast', 'theme-dark', 'theme-grayscale', 'theme-inverted');
    if (settings.contrastTheme !== 'default') {
      body.classList.add(`theme-${settings.contrastTheme}`);
    }

    // 3. Fonte Dislexia
    if (settings.dyslexiaFont) {
      body.classList.add('font-dyslexic');
    } else {
      body.classList.remove('font-dyslexic');
    }

    // 4. Espaçamento Ampliado
    if (settings.expandedSpacing) {
      body.classList.add('spacing-expanded');
    } else {
      body.classList.remove('spacing-expanded');
    }

    // 5. Cursor Grande
    if (settings.bigCursor) {
      body.classList.add('big-cursor');
    } else {
      body.classList.remove('big-cursor');
    }

    // 6. Destaque de Links
    if (settings.highlightLinks) {
      body.classList.add('highlight-links');
    } else {
      body.classList.remove('highlight-links');
    }

    // 7. Parar Animações
    if (settings.stopAnimations) {
      body.classList.add('stop-animations');
    } else {
      body.classList.remove('stop-animations');
    }
  }, [settings]);

  // Aplicar simulador de visão
  useEffect(() => {
    const body = document.body;
    body.classList.remove(
      'vision-protanopia',
      'vision-deuteranopia',
      'vision-tritanopia',
      'vision-achromatopsia',
      'vision-low-vision'
    );
    if (visionFilter !== 'none') {
      body.classList.add(`vision-${visionFilter}`);
    }
  }, [visionFilter]);

  // Modificadores de configurações
  const setFontScale = useCallback((scale: FontScale) => {
    setSettings((prev) => ({ ...prev, fontScale: scale }));
    announce(`Tamanho do texto ajustado para ${scale}%`);
  }, [announce]);

  const increaseFontSize = useCallback(() => {
    setSettings((prev) => {
      let nextScale: FontScale = 115;
      if (prev.fontScale === 100) nextScale = 115;
      else if (prev.fontScale === 115) nextScale = 130;
      else if (prev.fontScale >= 130) nextScale = 150;
      announce(`Tamanho do texto aumentado para ${nextScale}%`);
      return { ...prev, fontScale: nextScale };
    });
  }, [announce]);

  const decreaseFontSize = useCallback(() => {
    setSettings((prev) => {
      let nextScale: FontScale = 100;
      if (prev.fontScale === 150) nextScale = 130;
      else if (prev.fontScale === 130) nextScale = 115;
      else if (prev.fontScale <= 115) nextScale = 100;
      announce(`Tamanho do texto reduzido para ${nextScale}%`);
      return { ...prev, fontScale: nextScale };
    });
  }, [announce]);

  const setContrastTheme = useCallback((theme: ContrastTheme) => {
    setSettings((prev) => ({ ...prev, contrastTheme: theme }));
    const labels: Record<ContrastTheme, string> = {
      default: 'Tema padrão restaurado',
      'high-contrast': 'Alto contraste preto e amarelo ativado',
      dark: 'Modo escuro ativado',
      grayscale: 'Modo escala de cinza ativado',
      inverted: 'Modo cores invertidas ativado',
    };
    announce(labels[theme]);
  }, [announce]);

  const toggleDyslexiaFont = useCallback(() => {
    setSettings((prev) => {
      const next = !prev.dyslexiaFont;
      announce(next ? 'Fonte para dislexia ativada' : 'Fonte padrão restaurada');
      return { ...prev, dyslexiaFont: next };
    });
  }, [announce]);

  const toggleExpandedSpacing = useCallback(() => {
    setSettings((prev) => {
      const next = !prev.expandedSpacing;
      announce(next ? 'Espaçamento ampliado ativado' : 'Espaçamento normal restaurado');
      return { ...prev, expandedSpacing: next };
    });
  }, [announce]);

  const toggleReadingGuide = useCallback(() => {
    setSettings((prev) => {
      const next = !prev.readingGuide;
      announce(next ? 'Guia de leitura ativada' : 'Guia de leitura desativada');
      return { ...prev, readingGuide: next };
    });
  }, [announce]);

  const toggleBigCursor = useCallback(() => {
    setSettings((prev) => {
      const next = !prev.bigCursor;
      announce(next ? 'Cursor ampliado ativado' : 'Cursor padrão restaurado');
      return { ...prev, bigCursor: next };
    });
  }, [announce]);

  const toggleHighlightLinks = useCallback(() => {
    setSettings((prev) => {
      const next = !prev.highlightLinks;
      announce(next ? 'Destaque de links e botões ativado' : 'Destaque de links desativado');
      return { ...prev, highlightLinks: next };
    });
  }, [announce]);

  const toggleStopAnimations = useCallback(() => {
    setSettings((prev) => {
      const next = !prev.stopAnimations;
      announce(next ? 'Animações pausadas' : 'Animações restauradas');
      return { ...prev, stopAnimations: next };
    });
  }, [announce]);

  const setSpeechRate = useCallback((rate: number) => {
    setSettings((prev) => ({ ...prev, speechRate: rate }));
  }, []);

  // Web Speech API / TTS
  const stopSpeech = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentReadingText('');
    if (activeReadingElementRef.current) {
      activeReadingElementRef.current.removeAttribute('data-reading-active');
      activeReadingElementRef.current = null;
    }
  }, []);

  const pauseSpeech = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      announce('Leitura em voz alta pausada');
    }
  }, [announce]);

  const resumeSpeech = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      announce('Continuando leitura em voz alta');
    }
  }, [announce]);

  const speakText = useCallback((text: string, element?: HTMLElement) => {
    if (!('speechSynthesis' in window)) {
      announce('Seu navegador não suporta a síntese de voz nativa.');
      return;
    }

    stopSpeech();

    const cleanText = text.trim();
    if (!cleanText) return;

    if (element) {
      if (activeReadingElementRef.current) {
        activeReadingElementRef.current.removeAttribute('data-reading-active');
      }
      element.setAttribute('data-reading-active', 'true');
      activeReadingElementRef.current = element;
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'pt-BR';
    utterance.rate = settings.speechRate;

    // Buscar vozes pt-BR instaladas
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find((v) => v.lang.startsWith('pt'));
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
      setCurrentReadingText(cleanText.slice(0, 80) + (cleanText.length > 80 ? '...' : ''));
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentReadingText('');
      if (activeReadingElementRef.current) {
        activeReadingElementRef.current.removeAttribute('data-reading-active');
        activeReadingElementRef.current = null;
      }
    };

    utterance.onerror = (e) => {
      console.warn('Erro no TTS:', e);
      setIsSpeaking(false);
      setIsPaused(false);
      if (activeReadingElementRef.current) {
        activeReadingElementRef.current.removeAttribute('data-reading-active');
        activeReadingElementRef.current = null;
      }
    };

    window.speechSynthesis.speak(utterance);
  }, [announce, settings.speechRate, stopSpeech]);

  const toggleScreenReaderVoice = useCallback(() => {
    setSettings((prev) => {
      const next = !prev.screenReaderVoice;
      if (!next) {
        stopSpeech();
        announce('Leitor de tela desativado');
      } else {
        announce('Leitor de tela ativado. Clique em qualquer texto para ouvir.');
      }
      return { ...prev, screenReaderVoice: next };
    });
  }, [announce, stopSpeech]);

  // Ler página completa a partir do conteúdo principal
  const readFullPage = useCallback(() => {
    const mainEl = document.querySelector('main');
    if (!mainEl) return;
    const textBlocks = Array.from(mainEl.querySelectorAll('h1, h2, h3, p, li'))
      .map((el) => el.textContent?.trim())
      .filter((t): t is string => Boolean(t && t.length > 2));
    
    if (textBlocks.length > 0) {
      const firstHeading = mainEl.querySelector('h1') as HTMLElement;
      speakText(textBlocks.join('. '), firstHeading || undefined);
    }
  }, [speakText]);

  // Resetar todas as opções
  const resetAllSettings = useCallback(() => {
    stopSpeech();
    setSettings(DEFAULT_SETTINGS);
    setVisionFilter('none');
    announce('Todas as configurações de acessibilidade foram redefinidas para o padrão.');
  }, [announce, stopSpeech]);

  // Atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A -> Abrir / Fechar Painel de Acessibilidade
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setIsPanelOpen((prev) => !prev);
      }
      // Alt + R -> Resetar tudo
      else if (e.altKey && (e.key === 'r' || e.key === 'R')) {
        e.preventDefault();
        resetAllSettings();
      }
      // Alt + L -> Ler página
      else if (e.altKey && (e.key === 'l' || e.key === 'L')) {
        e.preventDefault();
        if (isSpeaking) {
          stopSpeech();
        } else {
          readFullPage();
        }
      }
      // Escape -> Fechar painel se aberto
      else if (e.key === 'Escape' && isPanelOpen) {
        setIsPanelOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPanelOpen, resetAllSettings, isSpeaking, stopSpeech, readFullPage]);

  // Listener para quando o leitor de voz estiver ativo e o usuário clicar num parágrafo ou título
  useEffect(() => {
    if (!settings.screenReaderVoice) return;

    const handleContentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignora cliques dentro do próprio painel de acessibilidade ou barra de controle de áudio
      if (target.closest('.panel-ui-ignore') || target.closest('button')) {
        return;
      }

      const readable = target.closest('p, h1, h2, h3, h4, li, blockquote, figcaption') as HTMLElement;
      if (readable && readable.textContent) {
        speakText(readable.textContent, readable);
      }
    };

    document.addEventListener('click', handleContentClick);
    return () => document.removeEventListener('click', handleContentClick);
  }, [settings.screenReaderVoice, speakText]);

  return {
    settings,
    isPanelOpen,
    setIsPanelOpen,
    visionFilter,
    setVisionFilter,
    announcement,
    isSpeaking,
    isPaused,
    currentReadingText,
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
    setSpeechRate,
    speakText,
    stopSpeech,
    pauseSpeech,
    resumeSpeech,
    readFullPage,
    resetAllSettings,
  };
}
