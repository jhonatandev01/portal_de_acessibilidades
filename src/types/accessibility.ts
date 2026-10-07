export type FontScale = 100 | 115 | 130 | 150;

export type ContrastTheme = 'default' | 'high-contrast' | 'dark' | 'grayscale' | 'inverted';

export type VisionFilter = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia' | 'low-vision';

export interface AccessibilitySettings {
  // Os 8 Recursos Obrigatórios
  fontScale: FontScale;             // Recurso 1: Ajuste de Tamanho de Fonte (100% a 150%)
  contrastTheme: ContrastTheme;     // Recurso 2: Alto Contraste & Modos Visuais
  dyslexiaFont: boolean;            // Recurso 3: Fonte Especial para Dislexia (Atkinson Hyperlegible)
  expandedSpacing: boolean;         // Recurso 4: Espaçamento de Linhas e Caracteres
  readingGuide: boolean;            // Recurso 5: Guia / Régua de Leitura com Foco
  screenReaderVoice: boolean;       // Recurso 6: Leitor de Tela / Síntese de Voz (Web Speech API pt-BR)
  bigCursor: boolean;               // Recurso 7: Cursor Ampliado de Alto Contraste
  highlightLinks: boolean;          // Recurso 8: Destacar Hiperlinks e Botões Interativos
  
  // Recursos Complementares WCAG
  stopAnimations: boolean;          // Pausar Animações e Movimentos
  speechRate: number;               // Velocidade da fala (0.8x a 1.5x)
}

export interface AccessibilityFeatureMeta {
  id: keyof AccessibilitySettings | 'theme' | 'all';
  number: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  wcagRef: string;
  benefitGroup: string;
  iconName: string;
}
