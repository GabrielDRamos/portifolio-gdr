import { Experience, Profile, Project, SkillGroup } from '../models/portfolio.model';

export const PORTFOLIO_PROFILE: Profile = {
  fullName: 'Gabriel Duarte',
  brand: 'gabriel',
  brandSuffix: '.dev',
  role: 'Desenvolvedor Fullstack',
  intro:
    'Construo produtos de ponta a ponta: interfaces web com Angular, APIs robustas com Spring Boot e aplicativos multiplataforma com Flutter.',
  coreStack: [
    { layer: 'front-end web', name: 'Angular', language: 'TypeScript' },
    { layer: 'back-end & APIs', name: 'Spring Boot', language: 'Java' },
    { layer: 'mobile', name: 'Flutter', language: 'Dart' },
  ],
  aboutTitle: 'Do banco de dados à tela do celular.',
  bio: [
    'Sou desenvolvedor fullstack e gosto de entender o problema inteiro: da modelagem dos dados e das regras de negócio no back-end até a experiência de quem usa o produto no navegador ou no celular.',
    'No dia a dia trabalho com Angular no front-end, Spring Boot para APIs REST seguras e Flutter para apps Android e iOS a partir de uma única base de código — sempre com foco em código legível, testável e fácil de manter.',
  ],
  facts: [
    { label: 'Atuação', value: 'Web + Mobile' },
    { label: 'Localização', value: 'Brasil · Remoto' },
    { label: 'Status', value: 'Aberto a vagas' },
  ],
  availability: 'Disponível para novas oportunidades',
  contactMessage: 'Estou aberto a vagas fullstack, front-end ou mobile.',
  email: 'contato@exemplo.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  ],
};

export const PORTFOLIO_EXPERIENCES: Experience[] = [
  {
    id: 'exp-fullstack',
    role: 'Desenvolvedor Fullstack',
    company: '[Empresa / Projetos Independentes]',
    period: '2025 — Atual',
    location: 'Remoto',
    current: true,
    highlights: [
      'Desenvolvimento de interfaces web em Angular consumindo APIs REST próprias.',
      'Criação de APIs com Spring Boot, autenticação e persistência de dados.',
      'Aplicativo mobile em Flutter compartilhando o mesmo back-end.',
    ],
    stack: ['Angular', 'Spring Boot', 'Flutter'],
  },
  {
    id: 'exp-education',
    role: 'Formação em Desenvolvimento de Software',
    company: '[Instituição / Curso]',
    period: '2023 — 2025',
    location: 'Brasil',
    current: false,
    highlights: [
      'Fundamentos de engenharia de software, orientação a objetos e bancos de dados.',
      'Projetos práticos com Java, TypeScript e Dart.',
    ],
    stack: ['Java', 'TypeScript', 'Dart'],
  },
];

/**
 * Recruiters value real projects described as mini case studies:
 * the problem, what you built, and the result. Replace the bracketed placeholders.
 */
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    slug: 'projeto-fullstack',
    title: '[Nome do Projeto Fullstack]',
    kind: 'Fullstack',
    year: '2026',
    description:
      '[Qual problema o sistema resolve e para quem.] Aplicação web em Angular integrada a uma API REST em Spring Boot.',
    highlights: [
      '[O que você construiu: ex. autenticação, painel administrativo, integração com pagamentos.]',
      '[Resultado ou aprendizado: ex. tempo de resposta, usuários atendidos, cobertura de testes.]',
    ],
    stack: ['Angular', 'Spring Boot', 'Java', 'SQL'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'app-mobile',
    title: '[Nome do App Mobile]',
    kind: 'Mobile',
    year: '2025',
    description:
      '[Qual problema o app resolve e para quem.] App Android e iOS em Flutter consumindo uma API própria.',
    highlights: [
      '[Funcionalidade principal do app.]',
      '[Resultado ou aprendizado.]',
    ],
    stack: ['Flutter', 'Dart', 'Spring Boot'],
    repoUrl: 'https://github.com',
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
      'Acessível por teclado, contraste WCAG AA e bundle inicial de ~63 kB.',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com',
  },
];

export const PORTFOLIO_SKILLS: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Front-end',
    title: 'Angular',
    items: ['TypeScript', 'RxJS & Signals', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    category: 'backend',
    label: 'Back-end',
    title: 'Spring Boot',
    items: ['Java', 'APIs REST', 'Spring Security', 'JPA / Hibernate', 'SQL'],
  },
  {
    category: 'mobile',
    label: 'Mobile',
    title: 'Flutter',
    items: ['Dart', 'Android & iOS', 'Consumo de APIs'],
  },
  {
    category: 'tools',
    label: 'Ferramentas',
    title: 'Dia a dia',
    items: ['Git & GitHub', 'Testes unitários', 'Metodologias ágeis'],
  },
];
