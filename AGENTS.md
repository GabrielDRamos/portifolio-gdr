# AGENTS.md — portifolio-gdr

Diretrizes técnicas e operacionais para agentes atuando no repositório **portifolio-gdr**.

## Visão Geral do Projeto

Portfólio pessoal desenvolvido 100% em **Angular 22+** (TypeScript estrito, Standalone Components, Signals, Tailwind CSS v4), com foco em **Mobile-First** e dados tipados localmente:

- `frontend/`: Aplicação web Angular 22+ rodando em Node.js 26+.
- `docs/`: Especificações técnicas, arquitetura e design system.
- `.agents/skills/`: Skills sob demanda com procedimentos específicos de Angular e design.

### Escopo Funcional (MVP)

Portfólio de **Desenvolvedor Fullstack** (Angular · Spring Boot · Flutter), página única nesta ordem:

- Início (hero com cargo, stack principal e CTAs de contato)
- Sobre (bio, fatos rápidos, links sociais)
- Experiência profissional e formação (cartões com conquistas e stack)
- Projetos (mini case studies com filtro por tecnologia)
- Tecnologias (agrupadas em Front-end, Back-end, Mobile e Ferramentas)
- Contato (e-mail) e footer

## Convenções Gerais

- **Idioma**:
  - Código (classes, variáveis, interfaces, arquivos, commits): **inglês**.
  - Documentação (`docs/`, `README.md`) e conteúdo visível ao usuário (UI): **português (PT-BR)**.
- **Commits**: Seguir [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`).
- **Mobile-First**: Projetar primeiro para telas pequenas (`360px`–`430px`) com alvos de toque confortáveis (`>= 44px`), evoluindo progressivamente com breakpoints Tailwind (`sm:`, `md:`, `lg:`).
- **Documentação viva**: Ao alterar modelos de dados, rotas ou estrutura de pastas, atualizar [ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Regras de Frontend (`frontend/`)

- Usar exclusivamente **Standalone Components** (sem `NgModule`).
- Preferir **Signals** (`signal`, `computed`, `input`, `output`) para estado local e reatividade.
- Usar a nova sintaxe de template (`@if`, `@for` com `track`, `@switch`, `@defer`) em vez de `*ngIf`/`*ngFor`.
- Injeção de dependências via função `inject()` (evitar injeção via construtor).
- Usar `ChangeDetectionStrategy.OnPush` nos componentes.
- Estilização com **Tailwind CSS v4** (`@import 'tailwindcss';`, sem `tailwind.config.js`).
- Tipagem estrita (`strict: true`); nunca usar `any`.
- Separar camadas por responsabilidade: `core/` (modelos, dados, serviços), `shared/` (componentes reutilizáveis) e `features/` (páginas/seções).

## Referências

- Stack e versões: [docs/TECH_STACK.md](docs/TECH_STACK.md)
- Arquitetura e modelos: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Design System: [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)
