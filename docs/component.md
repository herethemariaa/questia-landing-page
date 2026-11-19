# Componentes — Questia

## 1. Navbar

**Arquivo:** `src/components/Navbar/Navbar.jsx`  
**Estilo:** `src/components/Navbar/Navbar.module.css`

**Responsabilidade:**  
Apresentar a navegação principal da landing page.

**Funcionalidades:**
- Exibir a identidade visual do Questia (ícone + nome).
- Permitir navegação por scroll suave entre seções.
- Disponibilizar botão direto de acesso à plataforma (`https://questia-mvp.netlify.app`).
- Responsividade completa com menu hambúrguer e gaveta lateral para telas mobile.
- Efeito de blur/backdrop automático ao rolar a página.

---

## 2. FeatureCard

**Arquivo:** `src/components/FeatureCard/FeatureCard.jsx`  
**Estilo:** `src/components/FeatureCard/FeatureCard.module.css`

**Responsabilidade:**  
Apresentar individualmente as funcionalidades e recursos da plataforma.

**Props implementadas:**
- `title` (string): título do recurso.
- `description` (string): descrição detalhada.
- `icon` (string/ReactNode): ícone ou emoji representativo.
- `badge` (string, opcional): tag de destaque (ex.: "Planejado").
- `variant` ('dark' | 'light', opcional): define o tema do cartão.

---

## 3. Button

**Arquivo:** `src/components/Button/Button.jsx`  
**Estilo:** `src/components/Button/Button.module.css`

**Responsabilidade:**  
Padronizar os botões e chamadas para ação (CTAs).

**Props implementadas:**
- `children` (ReactNode): conteúdo/rótulo do botão.
- `variant` ('primary' | 'outline' | 'ghost'): estilo visual do botão.
- `href` (string, opcional): se presente, renderiza tag `<a>` acessível com suporte a links externos (`rel="noopener noreferrer"`).
- `onClick` (function, opcional): manipulador de eventos de clique para `<button>`.
- `className` (string, opcional): classes adicionais.

---

## 4. Regras de documentação

- Documentar somente componentes existentes.
- Atualizar as props quando forem alteradas.
- Registrar componentes reutilizáveis.
- Evitar documentar detalhes que não correspondam à implementação real.
