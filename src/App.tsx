import { useAccessibility } from './hooks/useAccessibility';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAccessibilitySection } from './components/AboutAccessibilitySection';
import { WcagPillarsSection } from './components/WcagPillarsSection';
import { FeaturesShowcaseSection } from './components/FeaturesShowcaseSection';
import { InteractivePlaygroundSection } from './components/InteractivePlaygroundSection';
import { AcademicInfoSection } from './components/AcademicInfoSection';
import { Footer } from './components/Footer';
import { AccessibilityPanel } from './components/AccessibilityPanel';
import { FloatingAccessibilityButton } from './components/FloatingAccessibilityButton';
import { ReadingGuideOverlay } from './components/ReadingGuideOverlay';
import { SpeechControllerBar } from './components/SpeechControllerBar';
import { SvgVisionFilters } from './components/SvgVisionFilters';

export default function App() {
  const {
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
  } = useAccessibility();

  // Contagem de recursos ativos
  let activeCount = 0;
  if (settings.fontScale !== 100) activeCount++;
  if (settings.contrastTheme !== 'default') activeCount++;
  if (settings.dyslexiaFont) activeCount++;
  if (settings.expandedSpacing) activeCount++;
  if (settings.readingGuide) activeCount++;
  if (settings.screenReaderVoice) activeCount++;
  if (settings.bigCursor) activeCount++;
  if (settings.highlightLinks) activeCount++;
  if (settings.stopAnimations) activeCount++;

  const handleToggleFeature = (featureId: string) => {
    switch (featureId) {
      case 'fontScale':
        if (settings.fontScale === 150) setFontScale(100);
        else increaseFontSize();
        break;
      case 'contrastTheme':
        setContrastTheme(settings.contrastTheme === 'high-contrast' ? 'default' : 'high-contrast');
        break;
      case 'dyslexiaFont':
        toggleDyslexiaFont();
        break;
      case 'expandedSpacing':
        toggleExpandedSpacing();
        break;
      case 'readingGuide':
        toggleReadingGuide();
        break;
      case 'screenReaderVoice':
        toggleScreenReaderVoice();
        break;
      case 'bigCursor':
        toggleBigCursor();
        break;
      case 'highlightLinks':
        toggleHighlightLinks();
        break;
      default:
        setIsPanelOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-150">
      {/* Filtros SVG para simulação de daltonismo */}
      <SvgVisionFilters />

      {/* Região ao vivo para anúncios de leitores de tela */}
      <div
        role="status"
        aria-live="polite"
        className="sr-only"
        aria-atomic="true"
      >
        {announcement}
      </div>

      {/* Régua / Máscara de Leitura Visual */}
      <ReadingGuideOverlay
        isActive={settings.readingGuide}
        onClose={toggleReadingGuide}
      />

      {/* Barra de Navegação Superior */}
      <Navbar
        onOpenPanel={() => setIsPanelOpen(true)}
        activeCount={activeCount}
      />

      {/* Conteúdo Principal Acessível */}
      <main id="conteudo-principal" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* Banner Hero */}
        <HeroSection onOpenPanel={() => setIsPanelOpen(true)} />

        {/* Seção 1: O que é Acessibilidade e Lei Brasileira */}
        <AboutAccessibilitySection />

        {/* Seção 2: Os 4 Pilares da WCAG (POUR) */}
        <WcagPillarsSection />

        {/* Seção 3: Os 8 Recursos Oficiais do Painel com Justificativa */}
        <FeaturesShowcaseSection
          settings={settings}
          onOpenPanel={() => setIsPanelOpen(true)}
          onToggleFeature={handleToggleFeature}
        />

        {/* Seção 4: Playground e Demonstração Interativa */}
        <InteractivePlaygroundSection
          visionFilter={visionFilter}
          setVisionFilter={setVisionFilter}
          onSpeak={speakText}
          onOpenPanel={() => setIsPanelOpen(true)}
        />

        {/* Seção 5: Ficha Acadêmica Turma B - Profª Noemi Paiva dos Santos */}
        <AcademicInfoSection />
      </main>

      {/* Rodapé Acessível */}
      <Footer />

      {/* Painel de Acessibilidade Lateral Flutuante */}
      <AccessibilityPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        settings={settings}
        setFontScale={setFontScale}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        setContrastTheme={setContrastTheme}
        toggleDyslexiaFont={toggleDyslexiaFont}
        toggleExpandedSpacing={toggleExpandedSpacing}
        toggleReadingGuide={toggleReadingGuide}
        toggleBigCursor={toggleBigCursor}
        toggleHighlightLinks={toggleHighlightLinks}
        toggleStopAnimations={toggleStopAnimations}
        toggleScreenReaderVoice={toggleScreenReaderVoice}
        readFullPage={readFullPage}
        stopSpeech={stopSpeech}
        isSpeaking={isSpeaking}
        resetAllSettings={resetAllSettings}
      />

      {/* Botão Flutuante de Acessibilidade */}
      <FloatingAccessibilityButton
        onClick={() => setIsPanelOpen(true)}
        isOpen={isPanelOpen}
        activeCount={activeCount}
      />

      {/* Barra de Controle de Voz / TTS */}
      <SpeechControllerBar
        isSpeaking={isSpeaking}
        isPaused={isPaused}
        currentText={currentReadingText}
        speechRate={settings.speechRate}
        onPause={pauseSpeech}
        onResume={resumeSpeech}
        onStop={stopSpeech}
        onSetRate={setSpeechRate}
        onClose={stopSpeech}
      />
    </div>
  );
}
