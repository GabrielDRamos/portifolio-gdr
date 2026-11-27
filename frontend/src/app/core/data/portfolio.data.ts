import { Education, Experience, Profile, Project, SkillGroup } from '../models/portfolio.model';

export const PORTFOLIO_PROFILE: Profile = {
  fullName: 'Gabriel Duarte Ramos',
  brand: 'gabriel',
  brandSuffix: '.dev',
  role: 'Desenvolvedor Fullstack',
  intro:
    'Construo produtos de ponta a ponta: interfaces web com Angular, APIs e regras de negócio com Spring Boot e PL/SQL sobre OracleDB, e aplicativos mobile com React Native e Flutter.',
  coreStack: [
    { layer: 'front-end web', name: 'Angular', language: 'TypeScript' },
    { layer: 'back-end & APIs', name: 'Spring Boot', language: 'Java' },
    { layer: 'mobile', name: 'React Native', language: 'TypeScript' },
    { layer: 'banco de dados', name: 'OracleDB', language: 'PL/SQL' },
  ],
  aboutTitle: 'Do banco de dados à tela do celular.',
  bio: [
    'Sou desenvolvedor fullstack na Basis Tecnologia da Informação, onde trabalho remotamente na manutenção e no desenvolvimento de sistemas para o Ministério do Meio Ambiente, com Angular e TypeScript no front-end e Java com Spring Boot e PostgreSQL no back-end. Antes, como analista de sistemas na Unimed JP, atuei da análise de requisitos à implementação: aplicativo de beneficiários em React Native, sistema de agendamento online em Angular e Spring Boot e relatórios corporativos — sempre sobre a arquitetura MVC.',
    'Comecei em 2017 como estagiário na SS Digital, onde passei por suporte e infraestrutura até chegar ao desenvolvimento. Essa trajetória me ensinou a entender a regra de negócio e quem usa o sistema antes de escrever código. Sou formado em Análise e Desenvolvimento de Sistemas (UNIPÊ) e pós-graduado em Fullstack Web Development (UNIESP).',
  ],
  facts: [
    { label: 'Atuação', value: 'Fullstack · Web + Mobile' },
    { label: 'Localização', value: 'João Pessoa · PB · Remoto' },
    { label: 'Em TI desde', value: '2017' },
  ],
  availability: 'Disponível para novas oportunidades',
  contactMessage: 'Estou aberto a vagas fullstack, front-end ou mobile.',
  email: 'gduarter21@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/GabrielDRamos', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gabrieldramos', icon: 'linkedin' },
  ],
};

export const PORTFOLIO_EXPERIENCES: Experience[] = [
  {
    id: 'exp-basis',
    role: 'Desenvolvedor Fullstack',
    company: 'Basis Tecnologia da Informação S.A.',
    period: 'jun/2026 — Atual',
    location: 'Remoto',
    current: true,
    highlights: [
      'Manutenção e desenvolvimento de sistemas para o Ministério do Meio Ambiente.',
      'Atuação fullstack: front-end em Angular com TypeScript e back-end em Java com Spring Boot, com dados em PostgreSQL.',
    ],
    stack: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL'],
  },
  {
    id: 'exp-unimed-jp',
    role: 'Analista de Sistemas Júnior',
    company: 'Unimed JP',
    period: 'fev/2025 — mai/2026',
    location: 'João Pessoa · PB',
    current: false,
    highlights: [
      'Aplicativo Unimed JP (React Native + PL/SQL): desenvolvimento de novas telas e funcionalidades e manutenção do back-end, integrando experiência do usuário e regras de negócio.',
      'Sistema de Agendamento Online (Angular, Thymeleaf e Spring Boot): manutenção e evolução de funcionalidades críticas, com foco em desempenho e usabilidade.',
      'Relatórios corporativos no Jasper Studio com Java e SQL, fornecendo informações para a tomada de decisão.',
      'Novo aplicativo interno para colaboradores em Flutter, com arquitetura MVC e práticas de desenvolvimento multiplataforma.',
    ],
    stack: [
      'React Native',
      'TypeScript',
      'Angular',
      'Spring Boot',
      'Thymeleaf',
      'Flutter',
      'PL/SQL',
      'OracleDB',
      'APEX',
      'Jasper Studio',
      'GitLab',
      'Scrum',
    ],
  },
  {
    id: 'exp-ss-digital-dev',
    role: 'Desenvolvedor de Sistemas',
    company: 'SS Digital',
    period: 'dez/2024 — jan/2025',
    location: 'Paraíba',
    current: false,
    highlights: [
      'Telas front-end e back-end para sistemas de pedidos, veículos e corretores de imóveis.',
      'Participação no planejamento das regras de negócio e na criação de layouts alinhados às necessidades do cliente.',
      'Capacitação de novos funcionários nos processos e funcionalidades do sistema.',
    ],
    stack: ['PHP', 'jQuery', 'Bootstrap', 'AdminLTE', 'PostgreSQL', 'Docker', 'Linux', 'Scrum & Kanban'],
  },
  {
    id: 'exp-ss-digital-tech',
    role: 'Técnico de Informática',
    company: 'SS Digital',
    period: 'dez/2019 — nov/2024',
    location: 'Paraíba',
    current: false,
    highlights: [
      'Entrei como estagiário em 2017 e fui efetivado como técnico no fim de 2019, após processo seletivo.',
      'Suporte remoto e presencial a usuários e sistemas, cadastro de usuários e chamados.',
      'Treinamento de novas ferramentas, manuais do usuário e fluxogramas de processos.',
      'Manutenção de hardware, software, redes e impressoras; soluções low-code com Adianti Framework (PHP).',
    ],
    stack: ['Windows', 'Linux', 'Redes', 'WordPress', 'Adianti Framework'],
  },
];

export const PORTFOLIO_EDUCATION: Education[] = [
  {
    id: 'edu-uniesp',
    level: 'Pós-graduação',
    title: 'Fullstack Web Development',
    institution: 'UNIESP',
    status: 'Concluída',
    highlights: ['Especialização em desenvolvimento web de ponta a ponta, do front-end ao back-end.'],
    tags: [],
  },
  {
    id: 'edu-unipe',
    level: 'Graduação',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UNIPÊ',
    status: 'Concluída',
    highlights: ['Graduação tecnológica com base em engenharia de software, programação e bancos de dados.'],
    tags: [],
  },
  {
    id: 'edu-certificates',
    level: 'Cursos livres',
    title: 'Certificações',
    institution: 'Alura · DevMedia · Curso em Vídeo · TakeBlip',
    status: 'Complementar',
    highlights: [
      'Formação Flutter (Alura) e Bootcamp Web Developer (TakeBlip).',
      'DevMedia: MVC, Node.js, JavaScript, Java e Kotlin.',
      'Curso em Vídeo: JavaScript, Git e Linux.',
    ],
    tags: ['Flutter', 'Node.js', 'JavaScript', 'Java', 'Kotlin', 'Git', 'Linux'],
  },
];

/**
 * Mini case studies taken from the résumé: the problem, what was built, and the result.
 * `year`, `repoUrl` and `liveUrl` are optional — the card hides them when missing.
 * The first item of `stack` is the project's primary technology and becomes a filter button.
 */
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    slug: 'moises-lyric-writer',
    title: 'Moises Lyric-Writer',
    kind: 'Mobile',
    year: '2024',
    description:
      'Aplicativo Android nativo para compor letras de música: o usuário digita uma palavra e recebe sugestões de palavras e frases complementares.',
    highlights: [
      'Sugestões automáticas com tom ou humor personalizável pelo usuário.',
      'Desenvolvido em parceria com a Moises: meu grupo foi um dos dois que entregaram o produto final, com feedback positivo da empresa.',
      'RecyclerView com padrão Adapter, Activities e Fragments e chamadas à API com Retrofit e coroutines.',
    ],
    stack: ['Kotlin', 'Android SDK', 'Retrofit', 'Coroutines'],
    repoUrl: 'https://github.com/GabrielDRamos/Projeto-Moises',
  },
  {
    slug: 'portifolio-gdr',
    title: 'Portfólio Pessoal',
    kind: 'Web',
    year: '2026',
    description:
      'Este site: SPA em Angular com Standalone Components, Signals e Tailwind CSS v4, pensado primeiro para o celular.',
    highlights: [
      'Conteúdo tipado em TypeScript estrito e separado da interface.',
      'Animações só com CSS, respeitando prefers-reduced-motion; acessível por teclado e com contraste WCAG AA.',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/GabrielDRamos/portifolio-gdr',
    liveUrl: 'https://portifolio-gdr.vercel.app',
  },
  {
    slug: 'api-restful-alunos',
    title: 'API Restful com Deploy',
    kind: 'Fullstack',
    year: '2023',
    description:
      'CRUD completo para gerenciar informações de alunos: API em Node.js com Express e MySQL, com front-end em HTML, CSS e JavaScript puro.',
    highlights: [
      'Endpoints REST para criar, listar, atualizar e excluir registros.',
      'Deploy em servidor Linux na Digital Ocean, com acesso via SSH e envio de arquivos por SFTP (FileZilla).',
    ],
    stack: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'Digital Ocean'],
    repoUrl: 'https://github.com/GabrielDRamos/api-alunosunipe',
  },
  {
    slug: 'gdgallery',
    title: 'GDGallery',
    kind: 'Fullstack',
    year: '2024',
    description:
      'Aplicação de upload de imagens: o usuário envia arquivos ao servidor e eles são listados em uma galeria renderizada com Blade.',
    highlights: [
      'Imagens em armazenamento local para recuperação rápida, com a URL registrada no banco de dados.',
      'Exclusão direto do servidor, com atualização imediata da lista exibida na página.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'HTML & CSS'],
    repoUrl: 'https://github.com/GabrielDRamos/GDGallery',
  },
  {
    slug: 'gerenciador-de-tarefas',
    title: 'Gerenciador de Tarefas',
    kind: 'Web',
    year: '2022',
    description:
      'App para organizar tarefas do dia a dia, consumindo a API JSONPlaceholder para exibir tarefas fictícias.',
    highlights: [
      'Criar, excluir e marcar tarefas como concluídas.',
      'Tela de detalhes da tarefa com navegação via React Router e requisições com Axios.',
    ],
    stack: ['React', 'JavaScript', 'Axios', 'React Router'],
    repoUrl: 'https://github.com/GabrielDRamos/TaskList-Exemplo',
  },
  {
    slug: 'consulta-clima',
    title: 'Consulta de Clima',
    kind: 'Web',
    year: '2023',
    description: 'Tela que exibe as condições do clima da cidade buscada pelo usuário, consumindo uma API climática.',
    highlights: ['Busca por cidade com exibição do resultado na mesma tela.', 'Consumo de API externa com JavaScript puro, sem frameworks.'],
    stack: ['JavaScript', 'HTML & CSS', 'API REST'],
    repoUrl: 'https://github.com/GabrielDRamos/api-clima-js',
  },
];

export const PORTFOLIO_SKILLS: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Front-end',
    title: 'Angular',
    items: ['TypeScript', 'JavaScript', 'HTML & CSS', 'React', 'jQuery', 'Bootstrap', 'Thymeleaf'],
  },
  {
    category: 'backend',
    label: 'Back-end & Dados',
    title: 'Spring Boot',
    items: [
      'Java',
      'PL/SQL & OracleDB',
      'PostgreSQL',
      'MySQL',
      'Oracle APEX',
      'Node.js & Express',
      'PHP & Laravel',
      'APIs REST',
    ],
  },
  {
    category: 'mobile',
    label: 'Mobile',
    title: 'React Native',
    items: ['Flutter', 'Kotlin · Android SDK', 'Consumo de APIs'],
  },
  {
    category: 'tools',
    label: 'Ferramentas',
    title: 'Dia a dia',
    items: ['Git, GitHub & GitLab', 'Docker', 'Linux', 'Jasper Studio', 'Padrão MVC', 'Scrum & Kanban'],
  },
];
