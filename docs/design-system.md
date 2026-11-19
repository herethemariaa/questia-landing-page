# Design System — Questia

Este documento consolida a identidade visual, padrões de estilização e tokens utilizados na construção da landing page do **Questia**.

---

## 1. Cores e Paleta

A paleta de cores combina tons institucionais de azul profundo com a energia e o dinamismo do laranja/âmbar, representando a fusão entre educação formal e tecnologia engajadora.

### Cores Principais

| Token CSS | Hex / Valor | Uso |
|---|---|---|
| `--color-blue-dark` | `#1B3A6E` | Fundo principal da Hero, Navbar, Features e Footer |
| `--color-blue-mid` | `#2563A8` | Seções secundárias e gradientes |
| `--color-blue-section` | `#4A90D9` | Destaques sutis |
| `--color-orange` | `#F97316` | Destaque, botões secundários, ícones e CTA Final |
| `--color-orange-dark` | `#EA580C` | Gradientes e sombras de acento |
| `--color-amber` | `#F59E0B` | Botão primário de CTA, detalhes e estrelas |
| `--color-amber-light` | `#FCD34D` | Rótulos (badges) e badges iluminados |
| `--color-white` | `#FFFFFF` | Textos em superfícies escuras, cartões e superfícies limpas |
| `--color-navy-text` | `#1B3A6E` | Texto principal em fundos claros |

---

## 2. Tipografia

- **Família:** `Nunito, sans-serif` (Google Fonts)
- **Pesos utilizados:** 400 (Regular), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold), 900 (Black).

### Escala Modular

- `--text-xs`: `0.75rem` (12px)
- `--text-sm`: `0.875rem` (14px)
- `--text-base`: `1rem` (16px)
- `--text-lg`: `1.125rem` (18px)
- `--text-xl`: `1.25rem` (20px)
- `--text-2xl`: `1.5rem` (24px)
- `--text-3xl`: `1.875rem` (30px)
- `--text-4xl`: `2.25rem` (36px)
- `--text-5xl`: `3rem` (48px)

---

## 3. Espaçamentos e Layout

- **Container Máximo:** `1200px` (`--container-max`)
- **Padding Lateral Padrão:** `1.5rem` (`--container-padding`)
- **Altura da Navbar:** `72px` (`--navbar-height`)

---

## 4. Bordas e Elevação

- `--radius-sm`: `8px`
- `--radius-md`: `12px`
- `--radius-lg`: `16px`
- `--radius-xl`: `24px`
- `--radius-full`: `9999px` (Pills e botões arredondados)

### Sombras
- `--shadow-card`: `0 4px 24px rgba(0, 0, 0, 0.14)`
- `--shadow-nav`: `0 2px 20px rgba(0, 0, 0, 0.18)`
- `--shadow-btn`: `0 8px 24px rgba(249, 115, 22, 0.35)`

---

## 5. Diretrizes de Acessibilidade (A11y)

- Elemento de salto de navegação (`.skip-link`) para usuários de teclado.
- Foco visível padronizado com `outline: 3px solid var(--color-amber)`.
- Contraste de texto validado para leitura sobre fundos claros (`#1B3A6E`, `#4B5563`) e escuros (`#FFFFFF`, `rgba(255, 255, 255, 0.85)`).
- Suporte a leitor de telas (`.sr-only`, `aria-label`, `role="banner"`, `role="contentinfo"`).
