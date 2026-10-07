import { Check, ShieldCheck, HeartHandshake, Globe } from 'lucide-react';
import assistiveToolsImage from '../assets/images/assistive_technology_tools_1790363356101.jpg';

export function AboutAccessibilitySection() {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            Fundamentação & Contexto
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            O que é Acessibilidade Web e Por Que Ela é Vital?
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            A acessibilidade digital significa que pessoas com deficiência podem perceber, compreender, navegar, interagir e contribuir para a Web. Ela beneficia também pessoas idosas com capacidades em mudança decorrentes do envelhecimento, ou qualquer pessoa em situações de limitação temporária.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Lado Esquerdo: Imagem e contexto de tecnologias assistivas */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src={assistiveToolsImage}
                alt="Fotografia de tecnologias assistivas: teclado de alto contraste, interface com linha braille tátil e sintetizador de voz sobre mesa de trabalho"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-800">
                  Tecnologias Assistivas no Dia a Dia
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Leitores de tela como NVDA, JAWS e TalkBack dependem diretamente da semântica HTML e de controles de alto contraste nativos para funcionar perfeitamente.
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Três pilares de impacto */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-base">
                <Globe className="w-5 h-5 shrink-0" />
                <h3>Direito Humano e Cidadania Digital</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Segundo o Censo IBGE, mais de 18,6 milhões de brasileiros possuem algum tipo de deficiência (visual, auditiva, motora ou cognitiva). Acessibilidade não é um favor nem um recurso extra: é garantir o acesso a serviços públicos, educação, trabalho e lazer.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-base">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3>Obrigatoriedade Legal no Brasil (LBI e eMAG)</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                A Lei Brasileira de Inclusão da Pessoa com Deficiência (<strong>Lei nº 13.146/2015, Art. 63</strong>) estipula como obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no país ou por órgãos de governo, garantindo conformidade com o <strong>eMAG (Modelo de Acessibilidade em Governo Eletrônico)</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-2">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-base">
                <HeartHandshake className="w-5 h-5 shrink-0" />
                <h3>Desenho Universal (Universal Design)</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Criar sites acessíveis melhora a usabilidade para todos: quem navega sob sol forte (precisa de alto contraste), quem está em transporte ruidoso (precisa de legendas e transcrições), quem está com o braço machucado (navegação por teclado) ou com conexão instável.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
