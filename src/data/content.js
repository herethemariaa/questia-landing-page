/**
 * content.js — Narrativa institucional autêntica do Questia
 * 
 * Baseada estritamente nos dados de pesquisa dos slides do Hacktudo 2026
 * (TIC Kids Online Brasil 2025 e Relatório OCDE PISA) e no protótipo funcional.
 */

export const PLATFORM_URL = 'https://questia-mvp.netlify.app';

export const NAV_LINKS = [
  { label: 'Início',          href: '#inicio' },
  { label: 'O Dilema Real',   href: '#problema' },
  { label: 'A Proposta',      href: '#solucao' },
  { label: 'As 5 Estações',   href: '#metodologia' },
  { label: 'Painel Docente',  href: '#professor' },
  { label: 'Módulos SOS',     href: '#modulos' },
  { label: 'Conexão Lamarr',  href: '#equipe' },
];

export const HERO = {
  badge: 'Hacktudo 2026 · Equipe Conexão Lamarr',
  tagline: 'Uma jornada de aprendizado sem barreiras',
  titlePrimary: 'O celular já está na sala de aula.',
  titleHighlight: 'A questão é: ele vai distrair ou vai ensinar?',
  description:
    'Em vez de uma guerra diária para proibir o smartphone, o Questia canaliza a curiosidade do estudante em missões ativas de 15 a 25 minutos com recuperação de conceitos em Matemática e Leitura.',
  ctaPrimary: { label: 'Conhecer a proposta', href: '#solucao' },
  ctaSecondary: { label: 'Como a Metodologia Funciona', href: '#metodologia' },
  badges: [
    'Sem leitura passiva',
    'Ciclo de 5 estações',
    'Apoio direto ao docente'
  ]
};

export const PROBLEM = {
  badge: 'O Diagnóstico Real',
  title: 'A atenção fragmentada em sala não se resolve apenas com proibições.',
  lead:
    'Os dados mostram um cenário claro: o smartphone já é o principal meio de acesso do jovem brasileiro. O desafio educacional contemporâneo é transformar o tempo de tela passivo em prática intelectual com propósito.',
  
  stats: [
    {
      value: '92%',
      label: 'dos brasileiros de 9 a 17 anos são usuários de internet',
      detail: '78% acessam através do telefone celular várias vezes ao dia.',
      source: 'TIC Kids Online Brasil 2025',
    },
    {
      value: '3,4h',
      label: 'por dia em telas apenas para lazer nos países da OCDE',
      detail: 'Mais 3 horas diárias para estudos, gerando sobrecarga de estímulos rápidos.',
      source: 'Relatório OCDE PISA 2025',
    },
    {
      value: '81%',
      label: 'pesquisaram na internet para fazer trabalhos escolares',
      detail: 'O estudante já usa o aparelho para estudar, mas sem método de fixação.',
      source: 'TIC Kids Online Brasil 2025',
    },
  ],

  ocdeQuote: {
    quote:
      '“As notas em leitura, matemática e ciências atingiram seus níveis mais baixos desde que os dados começaram a ser coletados, em 2000. Também estamos observando uma leitura mais apressada, com os alunos percorrendo o texto às pressas e dando respostas erradas rapidamente.”',
    author: 'Mathias Cormann, Secretário-Geral da OCDE',
    source: 'Agência Brasil sobre pesquisa OCDE PISA 2025',
  },

  whoSuffers: [
    {
      target: 'Alunos',
      title: 'Leitura apressada e estresse',
      items: [
        'Menor retenção de conteúdo na memória de longo prazo.',
        'Saúde mental abalada pela constante sobrecarga de estímulos digitais.'
      ]
    },
    {
      target: 'Professores',
      title: 'Disputa contra algoritmos',
      items: [
        'Desgaste diário tentando competir com notificações e vídeos curtos.',
        'Necessidade urgente de ferramentas que tornem a prática em aula dinâmica.'
      ]
    },
    {
      target: 'Escolas',
      title: 'Defasagem persistente',
      items: [
        'Queda nos índices nacionais de leitura e raciocínio lógico.',
        'Dificuldade de orientar o uso saudável de telas na comunidade escolar.'
      ]
    }
  ]
};

export const SHIFT = {
  question: 'E se fosse possível mudar essa realidade sem confiscar o aparelho?',
  description:
    'A plataforma Questia foi desenhada para sair da abordagem punitiva e criar um ambiente incentivador de aprendizagem ativa, conectando alunos e professores.',
  from: {
    label: 'A resposta convencional',
    text: '“Como restringir e recolher o celular para que o aluno não se distraia?”'
  },
  to: {
    label: 'A resposta do Questia',
    text: '“Como guiar o celular em missões de 15 minutos que fazem sentido pedagógico?”'
  }
};

export const METHODOLOGY = {
  badge: 'Metodologia Pedagógica',
  title: 'Aprender é um processo. Cada estação importa.',
  subtitle:
    'Inspirada no ciclo cognitivo ativo, cada aula no Questia é uma jornada organizada em cinco estações progressivas:',
  stations: [
    {
      num: '01',
      name: 'Explorar',
      focus: 'Curiosidade',
      description: 'Contato inicial contextualizado com o tema, conectando o assunto com vivências reais do estudante.',
    },
    {
      num: '02',
      name: 'Praticar',
      focus: 'Desenvolvimento',
      description: 'Resolução de desafios graduais com feedback imediato para desenvolver o raciocínio sem medo de errar.',
    },
    {
      num: '03',
      name: 'Aplicar',
      focus: 'Vida Real',
      description: 'Aplicação prática do conhecimento em situações cotidianas (descontos, receitas, gráficos de notícias).',
    },
    {
      num: '04',
      name: 'Explicar',
      focus: 'Efeito Feynman',
      description: 'O aluno organiza as próprias ideias e comunica o raciocínio com suas palavras para fixar o aprendizado.',
    },
    {
      num: '05',
      name: 'Revisar',
      focus: 'Repetição Espaçada',
      description: 'Retomada periódica de conteúdos em intervalos calculados, identificando dúvidas antes que se tornem defasagens.',
    },
  ],
  scientificPillar: {
    title: 'Dinamismo Antidistração & Retenção Científica',
    description:
      'Para evitar a fadiga mental que leva o jovem a abandonar aplicativos educativos tradicionais, o Questia utiliza a Prática Intercalada (alternando tipos de exercícios) e a Prática de Recuperação, substituindo a leitura passiva pela resolução ativa.',
  }
};

export const MODULES = {
  badge: 'Recursos do Protótipo',
  title: 'Módulos desenhados para as maiores defasagens da Educação Básica',
  items: [
    {
      id: 'math',
      tag: 'Cálculo & Lógica',
      title: 'SOS Matemática',
      description:
        'Trilha adaptativa para cada aluno, com apoio para explorar conceitos fundamentais: frações no cotidiano, potenciação, geometria das formas e raciocínio lógico.',
      status: 'Disponível no MVP',
      highlight: 'Exemplo: Frações no dia a dia (25 min)'
    },
    {
      id: 'reading',
      tag: 'Fluência & Linguagem',
      title: 'SOS Leitura',
      description:
        'Incentivo à leitura e interpretação sem pressão excessiva. O aluno acompanha metas individuais, lê trechos selecionados e treina a compreensão crítica.',
      status: 'Disponível no MVP',
      highlight: 'Exemplo: Interpretação de contos e notícias'
    },
    {
      id: 'teacher',
      tag: 'Painel Docente',
      title: 'Área do Professor',
      description:
        'Acompanhamento do andamento da turma (atividades entregues, alunos ativos e livros lidos) com alertas para intervenções pedagógicas pontuais.',
      status: 'Interface Protótipo',
      highlight: 'Visão por turma (ex.: 7º Ano C) e BNCC'
    },
    {
      id: 'a11y',
      tag: 'Equidade & Acesso',
      title: 'Acessibilidade & Estudo Saudável',
      description:
        'Abordagem colaborativa em vez de punitiva: check-in emocional do estudante no início da sessão e suporte a diferentes ritmos de aprendizagem.',
      status: 'Diretriz Central',
      highlight: 'Alinhado aos ODS 3, 4 e 10 da ONU'
    }
  ]
};

export const AUDIENCE = {
  badge: 'Impacto Coletivo',
  title: 'Uma plataforma de estudos que auxilia tanto alunos quanto professores',
  cards: [
    {
      target: 'Para o Aluno',
      role: 'Protagonismo & Autonomia',
      description: 'O estudante estuda sem a sensação de estar sendo vigiado ou punido. As sessões têm início, meio e fim claros, com comemoração real de cada conquista.',
      bullets: [
        'Check-in de energia antes de iniciar',
        'Jornadas em 5 passos com tempo estimado',
        'Histórico de foco individual, sem ranking tóxico'
      ]
    },
    {
      target: 'Para o Professor',
      role: 'Apoio ao Trabalho Pedagógico',
      description: 'O professor deixa de gastar energia brigando contra a tela e ganha um aliado para engajar a turma em atividades com sentido.',
      bullets: [
        'Mapa visual de habilidades da turma',
        'Identificação rápida de defasagens comuns',
        'Sugestões de intervenção em sala'
      ]
    },
    {
      target: 'Para a Escola',
      role: 'Uso Saudável da Tecnologia',
      description: 'Uma resposta pedagógica consistente para o dilema do celular, alinhada aos padrões de educação inclusiva e de qualidade.',
      bullets: [
        'Tecnologia como aliada do currículo',
        'Redução do atrito disciplinar',
        'Alinhamento com diretrizes da BNCC'
      ]
    }
  ]
};

export const TEAM = {
  badge: 'Origem & Propósito',
  title: 'Conexão Lamarr',
  subtitle: 'Projeto idealizado e desenvolvido durante o Hacktudo 2026',
  story:
    'Nossa equipe nasceu com um propósito bem delimitado: responder ao desafio de promover o uso consciente e saudável de smartphones nas escolas brasileiras.',
  hedyLamarr: {
    title: 'Por que o nome “Conexão Lamarr”?',
    description:
      'Prestamos homenagem a Hedy Lamarr (1914–2000), inventora extraordinária e atriz que desenvolveu o sistema de salto de frequência no rádio — a base tecnológica para o Wi-Fi, Bluetooth e GPS. Seu legado prova que imaginação e ciência caminham juntas para conectar o mundo.',
  },
  ods: [
    { num: '03', label: 'Saúde e Bem-Estar', color: '#4C9F38' },
    { num: '04', label: 'Educação de Qualidade', color: '#C5192D' },
    { num: '10', label: 'Redução das Desigualdades', color: '#E11484' }
  ]
};

export const CTA_FINAL = {
  badge: 'Aprendizagem com propósito',
  title: 'O próximo passo é transformar curiosidade em conhecimento.',
  description:
    'Descubra como o Questia conecta tecnologia, autonomia dos estudantes e apoio ao trabalho pedagógico.',
  button: { label: 'Explorar a metodologia', href: '#metodologia' }
};

export const FOOTER = {
  brand: 'QUESTIA',
  tagline: 'Uma jornada de aprendizado sem barreiras.',
  credits: 'Equipe Conexão Lamarr · Hacktudo 2026',
  contact: 'contato@questia.com.br',
  year: 2026,
};
