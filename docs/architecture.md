
# Arquitetura da Landing Page — Questia

## 1. Visão geral

A landing page do Questia é a interface institucional
responsável por apresentar a plataforma, sua proposta
educacional e seus principais recursos.

## 2. Tecnologias

- React: construção da interface.
- JavaScript: lógica e comportamento.
- CSS: estilização.
- Vite: ambiente de desenvolvimento.

> Atualizar esta lista conforme as tecnologias reais
> do repositório.

## 3. Organização do projeto

- components/: elementos reutilizáveis.
- sections/: seções da landing page.
- layouts/: estruturas compartilhadas.
- pages/: composição das páginas.
- assets/: recursos visuais.
- styles/: estilos globais.
- data/: conteúdos organizados.

## 4. Responsabilidade das camadas

### Components
Elementos reutilizáveis da interface.

### Sections
Seções independentes que compõem a landing page.

### Pages
Composição das seções na ordem de exibição.

### Layouts
Estruturas compartilhadas entre páginas.

### Styles
Estilos globais e variáveis visuais.

## 5. Fluxo de renderização

main.jsx → App.jsx → Layout → LandingPage
→ Sections → Components.

## 6. Diretrizes arquiteturais

- Separar responsabilidades.
- Evitar duplicação de código.
- Priorizar componentes reutilizáveis.
- Manter a landing page independente
  dos módulos internos da plataforma.
- Garantir responsividade e acessibilidade.
