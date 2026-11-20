# Design System — Questia

Este documento consolida a identidade visual, padrões de estilização e tokens utilizados na construção da landing page institucional do **Questia**, combinando a paleta de cores original dos slides com padrões modernos de design editorial e de produto.

---

## 1. Cores e Paleta Oficial (Slides)

| Token CSS | Hex / Valor | Uso |
|---|---|---|
| `--color-blue-dark` | `#0E1E38` | Fundo principal da Hero, Navbar e Seção da Equipe |
| `--color-blue-deep` | `#0A172B` | Azul profundo para estados de interação |
| `--color-blue-navy` | `#16325C` | Azul institucional para títulos e gradientes |
| `--color-blue-royal` | `#1D4ED8` | Azul de apoio para links, ícones e badges |
| `--color-blue-soft` | `#F0F6FF` | Fundo azul suave |
| `--color-orange` | `#EA580C` | Laranja para botões e marcadores de foco |
| `--color-orange-soft` | `#F97316` | Laranja solar para acentos |
| `--color-orange-tint` | `#FFF7ED` | Fundo laranja suave |
| `--color-amber-gold` | `#F59E0B` | Âmbar dourado dos botões de ação e ícones |
| `--color-amber-light`| `#FEF3C7` | Amarelo suave para realces em fundos escuros |
| `--color-paper` | `#F9FAFB` | Fundo off-white para leitura |
| `--color-paper-warm` | `#F3F4F6` | Fundo secundário para cartões e blocos |
| `--color-paper-card` | `#FFFFFF` | Superfície dos cartões |
| `--color-line` | `#E2E8F0` | Linhas divisórias |
| `--color-ink` | `#0F172A` | Cor de texto primária em fundos claros |
| `--color-ink-soft` | `#475569` | Cor de texto secundária para descrições |

---

## 2. Tipografia

- **Títulos (`h1`, `h2`, `h3`, `h4`):** `Bricolage Grotesque, sans-serif` (letter-spacing: `-0.025em`, line-height compacto e editorial).
- **Corpo de Texto & UI:** `Nunito, sans-serif` (alta legibilidade, amigável e acessível).

---

## 3. Movimento

- **Interações rápidas:** `220ms` com curva de desaceleração suave.
- **Interações de superfície:** `360ms` para hover, elevação e mudanças de estado.
- **Movimento reduzido:** animações e rolagem suave são desativadas quando solicitadas pelo sistema operacional.

## 4. Componentes de Estilização Recorrentes

### 3.1. Eyebrow com Linha Gradiente (`.eyebrow`)
Marcador de seção em caixa alta com linha de gradiente de 28px antes do texto:
```css
.eyebrow::before {
  content: "";
  width: 28px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-amber-light), var(--color-orange));
}
```

### 3.2. Pills de Cabeçalho (`.pill`, `.pillDark`, `.pillHighlight`)
Cápsulas arredondadas (`border-radius: 9999px`) no topo do Hero identificando a origem do projeto (*Hacktudo 2026*, *Conexão Lamarr*).

### 3.3. Mockup de Smartphone Isométrico (`.phone`)
Carcaça de smartphone realista com rotação sutil de 3° (`transform: rotate(3deg)`), borda de 42px e tela interna com a interface de estudo do Questia.

### 3.4. Bloco de Mudança de Paradigma (`.shiftCard`)
Cartão de contraste horizontal ligando o *"Como a escola reage hoje"* à proposta *"Com o Questia"* por meio de uma seta de transição.

### 3.5. Indicador Segmentado (`.segmentBar`)
Barras com divisões discretas para demonstrar progresso e retenção em cenários de uso.

### 3.6. Ícones Padronizados
Todos os ícones utilizam `lucide-react` com dimensões padronizadas e sem uso de emojis soltos.
