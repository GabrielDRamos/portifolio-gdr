<img src="assets/icon.svg" width="64" height="64" alt="">

# portifolio-gdr

Portfólio pessoal desenvolvido 100% em **Angular 22+** (TypeScript + Tailwind CSS v4, Node.js 26+) com foco em **Mobile-First**.

## Como Rodar Localmente

```bash
cd frontend
npm install
npm start
```

Acesse `http://localhost:4200`.

## Deploy na Vercel

O build, a pasta de saída e o fallback de rotas já estão em [`frontend/vercel.json`](frontend/vercel.json), e a versão do Node em `engines` no `package.json`.

1. Envie o repositório para o GitHub.
2. Na Vercel: **Add New → Project** → importe o repositório.
3. Em **Root Directory**, escolha `frontend` (único ajuste manual — o app não fica na raiz).
4. Clique em **Deploy**.

A cada push na branch de produção o site é atualizado; cada pull request ganha uma URL de prévia.

Alternativa pela linha de comando (dentro de `frontend/`): `npx vercel` para prévia e `npx vercel --prod` para produção.

## Documentação Técnica

- [AGENTS.md](AGENTS.md) — Regras, convenções de código e diretrizes para agentes no repositório.
- [docs/TECH_STACK.md](docs/TECH_STACK.md) — Stack tecnológica, versões alvo e comandos principais.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — Arquitetura do projeto, estrutura de pastas e modelo de dados.
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) — Diretrizes visuais, paleta, tipografia e abordagem Mobile-First.

## Skills do Workspace

Localizadas em `.agents/skills/` (carregadas sob demanda pelo agente):

**Angular & Arquitetura**
- [`angular-developer`](.agents/skills/angular-developer/SKILL.md) — Boas práticas oficiais de Angular moderno e TypeScript (`angular/angular`).
- [`portfolio-bootstrap`](.agents/skills/portfolio-bootstrap/SKILL.md) — Runbook para gerar/recriar o scaffold Angular + Tailwind v4.
- [`angular-feature`](.agents/skills/angular-feature/SKILL.md) — Fluxo padrão para criar features e componentes Mobile-First.

**Design & Frontend UI**
- [`frontend-design`](.agents/skills/frontend-design/SKILL.md) — Direção estética e criação de interfaces frontend (`anthropics/skills`).
- [`web-design-guidelines`](.agents/skills/web-design-guidelines/SKILL.md) — Diretrizes de UI, acessibilidade e revisão de interface (`vercel-labs/agent-skills`).
- [`emil-design-eng`](.agents/skills/emil-design-eng/SKILL.md) — Princípios de Design Engineering e microinterações (`emilkowalski/skills`).
- [`design-critique`](.agents/skills/design-critique/SKILL.md) — Crítica estruturada de design e hierarquia visual (`anthropics/knowledge-work-plugins`).
- [`landing-page-design`](.agents/skills/landing-page-design/SKILL.md) — Estrutura e narrativa visual de landing pages/portfólio (`inference-sh/skills`).
