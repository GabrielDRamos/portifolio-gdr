---
name: portfolio-bootstrap
description: >-
  Use this skill when scaffolding or resetting the initial Angular 22
  Mobile-First structure for portifolio-gdr.
---

# Portfolio Angular Bootstrap

Runbook para inicializar ou recriar o scaffold do projeto `portifolio-gdr` em Angular 22 + Tailwind CSS v4.

## Verificação do Ambiente

- `node -v` (Angular 22+ suporta `^22.22.3`, `^24.15.0` ou `>=26.0.0`)

## Passos

1. **Gerar projeto Angular 22 (`frontend/`)**
   - `npx -y @angular/cli@latest new frontend --directory frontend --routing --style=css --strict --skip-git --defaults`

2. **Configurar Tailwind CSS v4**
   - Instalar: `npm install tailwindcss @tailwindcss/postcss postcss` em `frontend/`.
   - Criar `frontend/.postcssrc.json` com `@tailwindcss/postcss`.
   - Adicionar `@import 'tailwindcss';` em `frontend/src/styles.css` (nunca criar `tailwind.config.js`).

3. **Estruturar camadas e layout Mobile-First**
   - `frontend/src/app/core/` (`models/`, `data/`, `services/`)
   - `frontend/src/app/shared/components/` (`navbar/`)
   - `frontend/src/app/features/home/`

4. **Validação Final**
   - Executar `npm run build` em `frontend/` e confirmar build limpo.
