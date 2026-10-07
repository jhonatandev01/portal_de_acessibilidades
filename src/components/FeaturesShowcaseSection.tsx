import {
  Type,
  SunMoon,
  BookOpen,
  AlignJustify,
  Maximize2,
  Volume2,
  MousePointer,
  ExternalLink,
  CheckCircle,
  Play,
} from 'lucide-react';
import { ACCESSIBILITY_FEATURES_DATA } from '../data/accessibilityFeatures';
import { AccessibilitySettings } from '../types/accessibility';

interface FeaturesShowcaseSectionProps {
  settings: AccessibilitySettings;
  onOpenPanel: () => void;
  onToggleFeature: (featureId: keyof AccessibilitySettings | 'fontScale' | 'contrastTheme') => void;
}

export function FeaturesShowcaseSection({
  settings,
  onOpenPanel,
  onToggleFeature,
}: FeaturesShowcaseSectionProps) {
  const iconMap: Record<string, React.ElementType> = {
    Type,
    SunMoon,
    BookOpen,
    AlignJustify,
    Maximize2,
    Volume2,
    MousePointer,
    ExternalLink,
  };

  const isFeatureActive = (id: string): boolean => {
    switch (id) {
      case 'fontScale':
        return settings.fontScale > 100;
      case 'contrastTheme':
        return settings.contrastTheme !== 'default';
      case 'dyslexiaFont':
        return settings.dyslexiaFont;
      case 'expandedSpacing':
        return settings.expandedSpacing;
      case 'readingGuide':
        return settings.readingGuide;
      case 'screenReaderVoice':
        return settings.screenReaderVoice;
      case 'bigCursor':
        return settings.bigCursor;
      case 'highlightLinks':
        return settings.highlightLinks;
      default:
        return false;
    }
  };

  return (
    <section id="recursos" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              Pesquisa & Implementação Técnica
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Os 8 Recursos Escolhidos do Painel de Acessibilidade
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Cada um dos 8 recursos foi selecionado com base em evidências científicas de usabilidade e diretrizes normativas (WCAG 2.2 e eMAG). Experimente ativá-los diretamente nos cartões abaixo ou pelo painel flutuante.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenPanel}
            className="self-start md:self-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Abrir Painel Completo</span>
          </button>
        </div>

        {/* Grade dos 8 Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCESSIBILITY_FEATURES_DATA.map((feature) => {
            const Icon = iconMap[feature.iconName] || Type;
            const active = isFeatureActive(feature.id);

            return (
              <article
                key={feature.number}
                className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                  active
                    ? 'border-blue-600 bg-blue-50/30 shadow-md ring-1 ring-blue-600'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Topo do Card com Número e Status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-extrabold text-xs flex items-center justify-center">
                        #{feature.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">Recurso Oficial</span>
                    </div>

                    {active && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Ativo
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {feature.fullDesc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 mt-2 space-y-2.5">
                  <div className="text-[11px] text-slate-500">
                    <strong className="text-slate-700 block">Norma Referência:</strong>
                    <span>{feature.wcagRef}</span>
                  </div>

                  <div className="text-[11px] text-slate-500">
                    <strong className="text-slate-700 block">Público Beneficiado:</strong>
                    <span>{feature.benefitGroup}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleFeature(feature.id as any)}
                    className={`w-full mt-2 py-2 px-3 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                      active
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <span>{active ? 'Desativar Recurso' : 'Experimentar Agora'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
