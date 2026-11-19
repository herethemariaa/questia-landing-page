# Questia — Arquitetura da Landing Page

> Documentação da estrutura, organização e diretrizes de desenvolvimento da página institucional do Questia.

## 1. Sobre o projeto

O **Questia** é uma plataforma educacional idealizada pela equipe Conexão Lamarr, inicialmente desenvolvida durante o Hacktudo 2026.

A iniciativa surgiu a partir do desafio de promover o uso consciente de smartphones no ambiente escolar, buscando aproximar tecnologia, metodologias educacionais e bem-estar dos estudantes.

A proposta é transformar a tecnologia em uma ferramenta de aprendizagem, incentivando a participação ativa dos alunos e oferecendo experiências educacionais mais acessíveis, dinâmicas e inclusivas.

## 2. Objetivo da landing page

A landing page será a porta de entrada institucional do Questia.

Seu objetivo é apresentar a plataforma, comunicar seu propósito, explicar como funciona sua proposta pedagógica e demonstrar seu potencial de transformação no ambiente escolar.

A página deverá:

- Apresentar a identidade e a proposta do Questia.
- Comunicar o problema educacional que motivou sua criação.
- Explicar como a plataforma funciona.
- Apresentar seus principais recursos e diferenciais.
- Demonstrar os benefícios para estudantes e professores.
- Direcionar os visitantes para a plataforma.

## 3. Público-alvo

A comunicação será direcionada aos diferentes participantes do ambiente educacional:

- **Estudantes:** usuários que terão contato direto com as experiências de aprendizagem.
- **Professores:** profissionais que poderão utilizar a plataforma como apoio às atividades pedagógicas.
- **Escolas e instituições:** possíveis adotantes da solução.
- **Gestores e parceiros educacionais:** interessados na proposta e na aplicação da tecnologia na educação.

## 4. Estrutura da página

A landing page será organizada em seções independentes, com uma hierarquia visual e narrativa que conduza o visitante desde a apresentação do problema até o entendimento da solução.

### 4.1. Header e navegação

Responsável pela navegação principal da página.

Elementos previstos:
- Logotipo do Questia.
- Links de navegação para as seções.
- Botão de acesso à plataforma.
- Menu adaptado para dispositivos móveis.

### 4.2. Hero section

Primeira seção visual da página.

Deverá apresentar:
- Nome e identidade do Questia.
- Mensagem principal de posicionamento.
- Breve descrição da proposta.
- Chamada para ação (CTA).
- Elemento visual que represente a experiência da plataforma.

### 4.3. O problema

Apresentação do contexto que motivou a criação do Questia.

A seção deverá abordar a relação entre o uso de smartphones, a atenção, o engajamento e os desafios da aprendizagem no ambiente escolar.

### 4.4. A solução

Explicação de como o Questia propõe transformar o uso da tecnologia em uma experiência educacional produtiva.

Deverá apresentar a proposta pedagógica, a experiência de aprendizagem e a forma como a plataforma se integra ao cotidiano escolar.

### 4.5. Experiência de aprendizagem

Apresentação da metodologia organizada em cinco etapas:

1. **Explorar:** contato inicial com o conteúdo.
2. **Praticar:** realização de atividades para desenvolver conhecimentos.
3. **Aplicar:** utilização do que foi aprendido em situações práticas.
4. **Explicar:** desenvolvimento da capacidade de organizar e comunicar o conhecimento.
5. **Revisar:** retomada dos conteúdos e identificação de dificuldades.

### 4.6. Recursos e funcionalidades

Apresentação dos principais recursos da plataforma, como:

- Experiências de aprendizagem interativas.
- SOS Matemática.
- SOS Leitura.
- Recursos de acessibilidade.
- Experiências adaptadas às necessidades dos estudantes.

A apresentação deverá diferenciar funcionalidades já implementadas de recursos planejados para versões futuras.

### 4.7. Experiência dos professores

Apresentação da perspectiva docente e de como o Questia poderá apoiar o planejamento e a condução de atividades educacionais.

Essa seção poderá apresentar o conceito visual da área do professor, sem pressupor que todas as funcionalidades já estejam implementadas.

### 4.8. Benefícios e impacto

Demonstração dos resultados que a solução pretende promover:

- Maior engajamento dos estudantes.
- Uso mais consciente da tecnologia.
- Apoio ao processo de aprendizagem.
- Inclusão e acessibilidade.
- Apoio ao trabalho pedagógico dos professores.

### 4.9. Chamada final e footer

Encerramento da experiência de navegação, reforçando a proposta do Questia e direcionando o visitante para conhecer ou acessar a plataforma.

## 5. Diretrizes de arquitetura

A implementação deverá priorizar:

- Separação de responsabilidades entre estrutura, apresentação e comportamento.
- Componentização das seções reutilizáveis.
- Organização clara dos arquivos e diretórios.
- Responsividade para computadores, tablets e smartphones.
- Acessibilidade e semântica HTML.
- Reutilização de elementos visuais.
- Facilidade de manutenção e expansão.

A landing page deverá permanecer independente dos módulos internos da aplicação, permitindo que sua evolução aconteça sem comprometer as funcionalidades da plataforma.

## 6. Diretrizes de interface e experiência (UI/UX)

A interface deverá refletir a identidade tecnológica e educacional do Questia.

Princípios:
- Navegação intuitiva.
- Hierarquia visual clara.
- Linguagem acessível e objetiva.
- Consistência entre cores, tipografia, ícones e componentes.
- Boa experiência em diferentes tamanhos de tela.
- Chamadas para ação bem posicionadas.
- Elementos visuais que comuniquem educação, tecnologia e colaboração.

## 7. Arquitetura técnica

A arquitetura técnica será definida de acordo com as tecnologias utilizadas no projeto.

A documentação deverá contemplar:

- Estrutura de diretórios.
- Componentes e suas responsabilidades.
- Organização de estilos.
- Gerenciamento de assets.
- Navegação entre páginas.
- Integração com a aplicação principal.
- Integrações externas, quando existentes.
- Estratégias de responsividade e acessibilidade.

**Observação:** a estrutura definitiva dos diretórios e os detalhes de implementação deverão refletir o código real do repositório, evitando documentar funcionalidades ou tecnologias que ainda não foram implementadas.

## 8. Evolução e manutenção

A landing page deverá ser construída de maneira modular, permitindo:

- Adicionar novas seções.
- Atualizar conteúdos institucionais.
- Apresentar novas funcionalidades do Questia.
- Incorporar melhorias visuais.
- Integrar novos pontos de acesso à plataforma.

## 9. Relação com a aplicação principal

A landing page e a aplicação Questia possuem responsabilidades distintas:

| Landing page | Aplicação Questia |
|---|---|
| Apresentação institucional | Experiência de aprendizagem |
| Comunicação da proposta | Execução das funcionalidades |
| Divulgação dos recursos | Interação dos usuários |
| Direcionamento para acesso | Operação da plataforma |

A landing page funcionará como camada de apresentação e comunicação, enquanto a aplicação será responsável pela experiência funcional dos usuários.

## 10. Status do desenvolvimento

Este documento representa a arquitetura conceitual e as diretrizes iniciais da landing page.

Os detalhes técnicos, componentes, integrações e estrutura definitiva serão atualizados conforme a implementação evoluir.

---

**Projeto:** Questia  
**Equipe:** Conexão Lamarr  
**Documento:** Arquitetura da Landing Page  
**Versão:** 1.0