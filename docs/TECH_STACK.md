# Stack Técnica — portifolio-gdr

Este documento define as tecnologias, versões alvo e ferramentas escolhidas para o projeto (100% Frontend em Angular).

## Resumo da Stack

| Camada | Tecnologia | Versão Alvo | Papel no Projeto |
| :--- | :--- | :--- | :--- |
| **Framework** | Angular | 22.x (`22.3+`) | SPA com TypeScript, Standalone Components, Signals e roteamento lazy |
| **Linguagem** | TypeScript | 5.8+ (nativo do Angular 22) | Tipagem estrita (`strict: true`) |
| **Estilização** | Tailwind CSS | 4.x (`@tailwindcss/postcss`) | Design system utilitário com abordagem Mobile-First |
| **Runtime Local** | Node.js / npm | Node 26+ / npm 11+ | Execução do Angular CLI e build |
| **Dados** | TypeScript Data Modules | Local (`core/data/`) | Conteúdo estruturado e tipado, zero dependência de servidor externo |

## Por que 100% Angular?

- **Simplicidade e velocidade**: Sem necessidade de manter servidor backend ou banco de dados para conteúdo estático de portfólio.
- **Deploy gratuito e rápido**: O build estático (`frontend/dist/`) pode ser publicado facilmente em Vercel, Netlify, GitHub Pages ou Cloudflare Pages.
- **Angular 22 + Node 26**: Compatibilidade nativa (`engines.node: ">=26.0.0"`), com reatividade baseada em Signals e Tailwind CSS v4.

## Pré-requisitos de Ambiente Local

1. **Node.js 26+** (`>=26.0.0`, ou `^22.22.3` / `^24.15.0`) e **npm 11+**.

## Comandos Principais (dentro de `frontend/`)

- Instalar dependências: `npm install`
- Servidor de desenvolvimento: `npm start` (`http://localhost:4200`)
- Build de produção: `npm run build`
- Testes unitários: `npm test`
