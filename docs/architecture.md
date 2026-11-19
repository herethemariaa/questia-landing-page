# Arquitetura da Landing Page — Questia

> Documentação técnica atualizada da estrutura, organização e fluxo de renderização da página institucional do Questia.

## 1. Sobre o Projeto

O **Questia** é uma plataforma educacional idealizada pela equipe Conexão Lamarr durante o **Hacktudo 2026**.  
O projeto foi desenvolvido para enfrentar o desafio do uso de smartphones no ambiente escolar, transformando o aparelho de fonte de dispersão em um instrumento de estudo ativo e estruturado.

## 2. Tecnologias & Dependências

- **React 18:** Construção declarativa da interface com componentes funcionais e hooks.
- **Vite 5:** Bundler ultrarrápido com Hot Module Replacement (HMR).
- **CSS Modules:** Estilização isolada por componente e seção, garantindo zero colisão de classes.
- **Lucide React:** Biblioteca de ícones vetoriais padronizados e semânticos.
- **Google Fonts:** Tipografia combinada de *Bricolage Grotesque* (títulos de impacto) e *Nunito* (corpo de texto de alta legibilidade).

## 3. Organização de Diretórios

```
questia-landing-page/
├── public/
│   ├── icon-questia.png        # Favicon e imagem pública do app
│   ├── prototipo-prof.png      # Tela real do dashboard do professor
│   └── prototipo-prof1.png     # Tela real de gestão de turma e BNCC
├── src/
│   ├── assets/
│   │   ├── icon-questia.png    # Ícone do aplicativo
│   │   ├── prototipo-prof.png  # Tela real do dashboard do professor
│   │   └── prototipo-prof1.png # Tela real de gestão de turma e BNCC
│   ├── components/
│   │   ├── Button/             # Botões primário, outline e dark com suporte a ícones
│   │   ├── FeatureCard/        # Fichas pautadas de estudo com abas e selos
│   │   ├── Navbar/             # Barra fixa com blur, marca e menu responsivo
│   │   └── Star12/             # Estrela solar de 12 pontas característica do Questia
│   ├── sections/
│   │   ├── HeroSection/        # Apresentação do dilema real e mockup 3D do aluno
│   │   ├── ProblemSection/     # Diagnóstico com dados da TIC Kids 2025 e OCDE PISA
│   │   ├── SolutionSection/    # A virada pedagógica (pergunta reflexiva do Slide 5)
│   │   ├── HowItWorksSection/  # A jornada em 5 estações (Explorar ao Revisar)
│   │   ├── TeacherSection/     # A Visão do Educador: Telas reais do protótipo com abas interativas
│   │   ├── FeaturesSection/    # Módulos SOS Matemática e SOS Leitura
│   │   ├── AudienceSection/    # Valor para Alunos, Professores e Escolas
│   │   ├── TeamSection/        # Conexão Lamarr, Hacktudo 2026 e ODS da ONU
│   │   ├── CtaSection/         # Chamada de conversão direta para o MVP
│   │   └── Footer/             # Rodapé institucional limpo
│   ├── layouts/
│   │   └── MainLayout.jsx      # Layout estrutural com skip link de acessibilidade
│   ├── pages/
│   │   └── LandingPage.jsx     # Orquestração ordenada das seções narrativas
│   ├── data/
│   │   └── content.js          # Textos, dados de pesquisa e links centralizados
│   ├── styles/
│   │   └── global.css          # Design tokens, cores dos slides, texturas e reset
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 4. Fluxo de Renderização

```
main.jsx ➔ App.jsx ➔ MainLayout (Skip Link + Navbar)
               └── LandingPage
                     ├── HeroSection
                     ├── ProblemSection
                     ├── SolutionSection
                     ├── HowItWorksSection
                     ├── TeacherSection (Dashboard & BNCC)
                     ├── FeaturesSection
                     ├── AudienceSection
                     ├── TeamSection
                     ├── CtaSection
                     └── Footer
```
