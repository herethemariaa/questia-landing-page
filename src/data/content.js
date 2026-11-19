/**
 * content.js — Conteúdo centralizado da landing page Questia
 *
 * Todos os textos, dados e links são definidos aqui para facilitar
 * atualizações sem precisar editar os componentes individualmente.
 */

export const PLATFORM_URL = 'https://questia-mvp.netlify.app';

/* ---- Navegação ---- */
export const NAV_LINKS = [
  { label: 'Início',          href: '#inicio' },
  { label: 'O Problema',      href: '#problema' },
  { label: 'A Solução',       href: '#solucao' },
  { label: 'Como Funciona',   href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
];

/* ---- Hero ---- */
export const HERO = {
  tagline:     'Uma jornada de aprendizado sem barreiras',
  title:       'A tecnologia pode ser parte da aprendizagem, não uma distração.',
  description:
    'O Questia transforma o uso da tecnologia em uma experiência de aprendizagem mais interativa, acessível e significativa, conectando estudantes, professores e conhecimento.',
  ctaPrimary:   { label: 'Conheça o Questia',  href: PLATFORM_URL },
  ctaSecondary: { label: 'Como funciona',       href: '#como-funciona' },
};

/* ---- O Problema ---- */
export const PROBLEM = {
  title:
    'A escola mudou. A forma de aprender também precisa evoluir.',
  description:
    'Os smartphones fazem parte do cotidiano dos estudantes. O desafio é transformar essa presença em uma oportunidade de aprendizagem, aproximando a tecnologia da realidade escolar.',
  stats: [
    {
      value:  '92%',
      label:  'dos brasileiros de 9 a 17 anos são usuários de internet',
      source: 'TIC Kids Online Brasil 2025',
    },
    {
      value:  '3,4h',
      label:  'por dia em dispositivos digitais para lazer nos países da OCDE',
      source: 'OCDE 2025',
    },
    {
      value:  '81%',
      label:  'pesquisaram para fazer trabalhos escolares',
      source: 'TIC Kids Online Brasil 2025',
    },
  ],
  impacts: [
    {
      title:       'Atenção',
      description: 'Lidar com os diversos estímulos digitais no ambiente escolar.',
    },
    {
      title:       'Engajamento',
      description: 'Aproximar os conteúdos da realidade dos alunos.',
    },
    {
      title:       'Inclusão',
      description: 'Reconhecer diferentes ritmos e formas de aprender.',
    },
  ],
  whoSuffers: [
    {
      group: 'Alunos',
      items: ['Menor retenção de conteúdo', 'Saúde mental abalada'],
    },
    {
      group: 'Professores',
      items: ['Precisam buscar novas formas de manter a atenção dos alunos'],
    },
    {
      group: 'Escolas',
      items: ['Resultados que afetam a reputação da instituição'],
    },
  ],
};

/* ---- A Solução ---- */
export const SOLUTION = {
  title:
    'E se a tecnologia se tornasse uma aliada da aprendizagem?',
  description:
    'O Questia é uma plataforma educacional que busca criar experiências de aprendizagem mais dinâmicas, participativas e acessíveis. Por meio de atividades interativas, incentiva a curiosidade, a autonomia dos estudantes e apoia o trabalho dos professores.',
};

/* ---- Como Funciona (5 etapas) ---- */
export const HOW_IT_WORKS = {
  title: 'Aprender é um processo. Cada etapa importa.',
  steps: [
    {
      number:      '01',
      name:        'Explorar',
      description: 'Despertar a curiosidade e descobrir novos conteúdos.',
    },
    {
      number:      '02',
      name:        'Praticar',
      description: 'Desenvolver conhecimentos por meio de atividades e desafios.',
    },
    {
      number:      '03',
      name:        'Aplicar',
      description: 'Utilizar o que foi aprendido em situações práticas.',
    },
    {
      number:      '04',
      name:        'Explicar',
      description: 'Organizar ideias e compartilhar o conhecimento.',
    },
    {
      number:      '05',
      name:        'Revisar',
      description: 'Retomar conteúdos, reconhecer avanços e identificar dificuldades.',
    },
  ],
};

/* ---- Funcionalidades ---- */
export const FEATURES = {
  title: 'Recursos que aproximam o conhecimento dos estudantes.',
  items: [
    {
      icon:        '📐',
      title:       'SOS Matemática',
      description:
        'Trilha adaptativa para cada aluno, com apoio para explorar conceitos, praticar exercícios e desenvolver o raciocínio lógico.',
      available: true,
    },
    {
      icon:        '📚',
      title:       'SOS Leitura',
      description:
        'Incentivo à leitura com acompanhamento, interpretação de textos e desenvolvimento de habilidades de linguagem.',
      available: true,
    },
    {
      icon:        '♿',
      title:       'Acessibilidade',
      description:
        'Recursos para ampliar as possibilidades de participação, respeitando diferentes ritmos e formas de aprender.',
      available: true,
    },
    {
      icon:        '🎯',
      title:       'Aprendizagem Interativa',
      description:
        'Atividades e desafios que estimulam a experimentação, a construção do conhecimento e a autonomia dos estudantes.',
      available: true,
    },
  ],
};

/* ---- Para quem é ---- */
export const AUDIENCE = {
  title: 'Uma experiência que conecta diferentes pessoas da educação.',
  groups: [
    {
      icon:        '🎓',
      title:       'Estudantes',
      description: 'Incentivo à autonomia, curiosidade e participação ativa no próprio processo de aprendizagem.',
    },
    {
      icon:        '👩‍🏫',
      title:       'Professores',
      description: 'Apoio para tornar as atividades pedagógicas mais dinâmicas, com acompanhamento do progresso da turma.',
    },
    {
      icon:        '🏫',
      title:       'Escolas',
      description: 'Uma proposta que conecta inovação, inclusão e aprendizagem ao cotidiano institucional.',
    },
  ],
};

/* ---- Visão e Impacto ---- */
export const IMPACT = {
  title:
    'Não queremos substituir a educação. Queremos ampliar suas possibilidades.',
  description:
    'O Questia acredita que a tecnologia deve estar a serviço das pessoas e do conhecimento. Seu propósito é contribuir para uma educação conectada à realidade dos estudantes, que respeite diferentes formas de aprender e valorize o papel dos professores.',
};

/* ---- CTA Final ---- */
export const CTA_FINAL = {
  title:       'O futuro da aprendizagem começa com novas possibilidades.',
  description: 'Conheça o Questia e descubra uma nova maneira de conectar tecnologia e educação.',
  button:      { label: 'Conheça o Questia', href: PLATFORM_URL },
};

/* ---- Footer ---- */
export const FOOTER = {
  tagline: 'Tecnologia com propósito. Aprendizagem com significado.',
  links: [
    { label: 'Início',          href: '#inicio' },
    { label: 'O Problema',      href: '#problema' },
    { label: 'A Solução',       href: '#solucao' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
  ],
  contact: 'contato@questia.com.br',
  credits: 'Desenvolvido pela equipe Conexão Lamarr',
  year:    2026,
};
