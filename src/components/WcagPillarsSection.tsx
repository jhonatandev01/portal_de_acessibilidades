import { Eye, Keyboard, HelpCircle, Cpu } from 'lucide-react';
import universalDesignImg from '../assets/images/universal_design_concept_1790363367564.jpg';

export function WcagPillarsSection() {
  const pillars = [
    {
      acronym: 'P',
      title: 'Perceptível (Perceivable)',
      description:
        'A informação e os componentes da interface devem ser apresentados aos usuários em maneiras que eles possam perceber pelos sentidos.',
      examples: [
        'Alternativas em texto para imagens (alt text)',
        'Contraste mínimo de 4.5:1 para texto normal e 7:1 para alto contraste',
        'Áudiodescrição e legendas para conteúdos multimídia',
      ],
      icon: Eye,
      color: 'border-blue-500 bg-blue-50/40 text-blue-900',
    },
    {
      acronym: 'O',
      title: 'Operável (Operable)',
      description:
        'Os componentes da interface e a navegação devem ser facilmente operáveis através de diferentes dispositivos de entrada.',
      examples: [
        'Toda funcionalidade disponível pelo teclado (sem mouse)',
        'Tempo suficiente para ler e utilizar o conteúdo',
        'Nenhum conteúdo que provoque convulsões (sem flashes)',
      ],
      icon: Keyboard,
      color: 'border-emerald-500 bg-emerald-50/40 text-emerald-900',
    },
    {
      acronym: 'U',
      title: 'Compreensível (Understandable)',
      description:
        'A informação e a operação da interface devem ser claras, previsíveis e livres de ambiguidades desnecessárias.',
      examples: [
        'Idioma da página declarado explicitamente (lang="pt-BR")',
        'Navegação consistente e previsível em todas as telas',
        'Identificação e prevenção clara de erros em formulários',
      ],
      icon: HelpCircle,
      color: 'border-amber-500 bg-amber-50/40 text-amber-900',
    },
    {
      acronym: 'R',
      title: 'Robusto (Robust)',
      description:
        'O conteúdo deve ser robusto o bastante para ser interpretado de forma confiável por tecnologias assistivas atuais e futuras.',
      examples: [
        'HTML5 semântico válido (<main>, <nav>, <article>, <header>)',
        'Uso correto de atributos ARIA (aria-expanded, aria-live)',
        'Compatibilidade com navegadores legados e modernos',
      ],
      icon: Cpu,
      color: 'border-indigo-500 bg-indigo-50/40 text-indigo-900',
    },
  ];

  return (
    <section id="pilares" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            Diretrizes W3C / WAI
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Os 4 Pilares da WCAG (Princípios P.O.U.R.)
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            As Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2) são estruturadas em torno de 4 princípios fundamentais. O painel de acessibilidade implementado neste trabalho fornece ferramentas práticas para atender a cada um destes pilares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.acronym}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center font-bold text-lg">
                      {pillar.acronym}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <p className="text-[11px] font-bold uppercase text-slate-400 mb-2 tracking-wider">
                    Exemplos Práticos:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pillar.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-600 shrink-0 font-bold">·</span>
                        <span className="leading-snug">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
