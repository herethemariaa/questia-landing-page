# Componentes — Questia

Documentação técnica dos componentes reutilizáveis da landing page Questia.

---

## 1. Navbar

**Arquivo:** `src/components/Navbar/Navbar.jsx`  
**Estilo:** `src/components/Navbar/Navbar.module.css`

**Responsabilidade:**  
Apresentar a identidade do Questia, a afiliação à equipe Conexão Lamarr e prover navegação ágil e espaçosa entre as seções.

**Funcionalidades:**
- Exibe o logotipo oficial do Questia acompanhado da **Estrela Solar de 12 Pontas**.
- Barra com altura confortável (56px interno + padding responsivo).
- Links diretos com tipografia nítida (15px, peso 700) e sublinhado animado no hover.
- Botão de ação direto para o aplicativo (`Acessar Plataforma`).
- Menu mobile em gaveta lateral espaçosa com fechamento por overlay.
- Efeito de desfoque de fundo (`backdrop-filter: blur(16px)`) dinâmico no scroll.

---

## 2. Star12

**Arquivo:** `src/components/Star12/Star12.jsx`

**Responsabilidade:**  
Renderizar com precisão matemática a **Estrela Solar de 12 Pontas** característica do logotipo oficial do Questia (Slide 1 do protótipo).

**Props:**
- `size` (number): dimensão em pixels (largura e altura).
- `color` (string): cor de preenchimento vetorial SVG.
- `className` (string, opcional): classes adicionais.

---

## 3. FeatureCard

**Arquivo:** `src/components/FeatureCard/FeatureCard.jsx`  
**Estilo:** `src/components/FeatureCard/FeatureCard.module.css`

**Responsabilidade:**  
Apresentar os recursos em formato de **ficha de estudo escolar** com abas de categorização, tipografia expandida (15.5px) para leitura confortável e selos de status.

**Props:**
- `icon` (Componente Lucide): ícone vetorial temático do módulo.
- `tag` (string): identificador da área de conhecimento (ex.: "Cálculo & Lógica", "Fluência & Linguagem").
- `title` (string): nome do módulo (ex.: "SOS Matemática").
- `description` (string): detalhamento do impacto pedagógico com entrelinha expandida.
- `status` (string, opcional): selo indicativo (ex.: "Disponível no MVP", "Interface Protótipo").
- `highlight` (string, opcional): exemplo prático com tempo de execução.

---

## 4. Button

**Arquivo:** `src/components/Button/Button.jsx`  
**Estilo:** `src/components/Button/Button.module.css`

**Responsabilidade:**  
Padronizar chamadas para ação (CTAs) com gradientes equilibrados e suporte a ícones.

**Props:**
- `children` (ReactNode): rótulo do botão.
- `variant` ('primary' | 'outline' | 'dark' | 'ghost'): estilo visual do botão.
- `href` (string, opcional): se fornecido, renderiza tag `<a>` com abertura segura para links externos.
- `icon` (Componente Lucide, opcional): ícone vetorial dinâmico.
- `iconPosition` ('left' | 'right', opcional): posição do ícone.
- `onClick` (function, opcional): manipulador de evento.
