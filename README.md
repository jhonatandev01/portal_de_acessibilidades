# Portal de Acessibilidade para Todos

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Status-Ativo-10B981?style=for-the-badge" alt="Status do projeto" />
</div>

## Visão Geral

O **Portal de Acessibilidade para Todos** é uma aplicação web educacional e demonstrativa desenvolvida para apresentar, aplicar e justificar boas práticas de acessibilidade digital. O projeto combina conteúdo acadêmico, explicações sobre os pilares da WCAG, recursos interativos de acessibilidade e um painel lateral com controles reais de experiência do usuário.

A proposta é servir como um portal completo para estudos, apresentação acadêmica e demonstração prática de soluções que tornam interfaces mais inclusivas para pessoas com diferentes perfis de uso, necessidades motoras, visuais, cognitivas e de leitura.

## Objetivos do Projeto

- Demonstrar implementação prática de acessibilidade em uma aplicação moderna.
- Reunir conteúdos sobre WCAG, eMAG e acessibilidade web em uma única experiência.
- Oferecer controles funcionais de personalização para melhorar a navegação.
- Simular cenários de uso com suporte a leitura, contraste, cursor ampliado e outras melhorias de usabilidade.
- Entregar um projeto com linguagem visual organizada, responsiva e compatível com navegação por teclado.

## Destaques

- Painel lateral de acessibilidade com 8 recursos funcionais.
- Hero inicial com chamada clara para a ação e navegação rápida.
- Seções explicativas sobre acessibilidade, WCAG e conformidade acadêmica.
- Playground interativo para testar ajustes visuais e comportamentais.
- Suporte a síntese de voz via Web Speech API.
- Guia visual de leitura e simulações cromáticas.
- Interface responsiva construída com foco em clareza e hierarquia visual.

## Recursos de Acessibilidade

O projeto centraliza os seguintes recursos no painel de acessibilidade:

1. Ajuste de tamanho da fonte.
2. Alto contraste e temas visuais.
3. Fonte para dislexia.
4. Espaçamento expandido.
5. Régua de leitura / guia visual.
6. Leitura em voz alta com controle de fala.
7. Cursor ampliado.
8. Destaque de links.
9. Controle para reduzir animações.

Além disso, o portal inclui conteúdo explicativo sobre os 4 pilares da WCAG:

- Perceptível.
- Operável.
- Compreensível.
- Robusto.

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React para ícones
- Motion para animações
- Web Speech API para leitura em voz alta
- LocalStorage para persistência de preferências

## Estrutura do Projeto

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    AboutAccessibilitySection.tsx
    AcademicInfoSection.tsx
    AccessibilityPanel.tsx
    FeaturesShowcaseSection.tsx
    FloatingAccessibilityButton.tsx
    Footer.tsx
    HeroSection.tsx
    InteractivePlaygroundSection.tsx
    Navbar.tsx
    ReadingGuideOverlay.tsx
    SpeechControllerBar.tsx
    SvgVisionFilters.tsx
    WcagPillarsSection.tsx
  data/
    accessibilityFeatures.ts
  hooks/
    useAccessibility.ts
  types/
    accessibility.ts
```

## Requisitos

- Node.js 18 ou superior.
- npm instalado.
- Navegador moderno com suporte a JavaScript, CSS moderno e Web Speech API para a leitura em voz alta.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/jhonatandev01/portal_de_acessibilidades.git
cd portal_de_acessibilidades
npm install
```

Se o ambiente apresentar conflito de dependências de peer, use:

```bash
npm install --legacy-peer-deps
```

## Publicação no GitHub Pages

Este projeto pode ser publicado no GitHub Pages como uma build estática do Vite. Para isso, siga o fluxo abaixo:

1. Garanta que o repositório esteja conectado ao GitHub.
2. Ajuste o `base` do Vite para o nome do repositório, se necessário.
3. Gere a build de produção com `npm run build`.
4. Publique o conteúdo da pasta `dist/` na branch configurada para o Pages, normalmente `gh-pages`.
5. No GitHub, abra `Settings > Pages` e selecione a branch de publicação.

Exemplo de configuração para projetos publicados em um repositório GitHub Pages:

```ts
// vite.config.ts
export default defineConfig({
  base: '/portal_de_acessibilidades/',
});
```

Se você preferir automação, adicione um fluxo de deploy com GitHub Actions ou o pacote `gh-pages`.

## Execução Local

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:3000
```

## Scripts Disponíveis

- `npm run dev` - inicia o ambiente de desenvolvimento com Vite.
- `npm run build` - gera a versão de produção.
- `npm run preview` - visualiza a build gerada localmente.
- `npm run lint` - executa a checagem de tipos do TypeScript.
- `npm run clean` - remove artefatos gerados, como `dist` e `server.js`.

## Como Usar

1. Acesse a página inicial e leia a introdução do projeto.
2. Abra o painel de acessibilidade pelo botão flutuante ou pela chamada no hero.
3. Teste os ajustes de fonte, contraste e leitura em voz alta.
4. Explore os pilares da WCAG e o conteúdo acadêmico complementar.
5. Use o playground interativo para observar o impacto das configurações de acessibilidade.

## Funcionalidades da Experiência

- Persistência automática das preferências no navegador.
- Região ao vivo para mensagens anunciadas a leitores de tela.
- Suporte a navegação por teclado.
- Componentização por seções para manter organização e manutenção simples.
- Filtros SVG para simulação de diferentes perfis cromáticos.
- Barra de controle para síntese de voz com pausa, retomada e ajuste de velocidade.

## Acessibilidade e Boas Práticas

O projeto foi estruturado com atenção a práticas importantes de acessibilidade digital:

- Uso de marcação semântica.
- Contrastes adequados para leitura.
- Áreas interativas com estados visíveis de foco.
- Botões e controles com rótulos claros.
- Organização por seções com títulos hierárquicos.
- Recursos focados em usabilidade para leitura, percepção visual e navegação.

## Observações Técnicas

- O projeto utiliza Vite com React e TypeScript.
- As preferências do usuário são salvas localmente, sem necessidade de autenticação.
- O painel de acessibilidade foi desenvolvido como componente lateral independente.
- A interface foi pensada para funcionar bem em desktop e em telas menores.

## Contribuição

Contribuições são bem-vindas. Se você quiser evoluir este projeto, boas extensões incluem:

- novos simuladores de acessibilidade;
- mais perfis de contraste;
- atalhos de teclado adicionais;
- suporte ampliado a leitura por voz;
- testes automatizados de acessibilidade;
- documentação visual com capturas de tela.

## Materiais Complementares

- [Badge do projeto](docs/badge.md)
- [Preview visual / screenshot](docs/screenshot.svg)
- [Changelog](CHANGELOG.md)

## Licença

Este projeto foi criado para fins educacionais e acadêmicos. Se desejar, você pode adaptar a licença conforme a política do seu repositório no GitHub.

## Autor

Projeto desenvolvido por Jhonatan Dev.
