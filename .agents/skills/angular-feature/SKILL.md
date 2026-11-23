---
name: angular-feature
description: >-
  Use this skill when creating or refactoring a feature, page, section, or UI
  component in the Angular frontend of portifolio-gdr.
---

# Angular Feature Workflow

Procedimento padrão para implementar novas features em `frontend/` (Angular 22+, TypeScript estrito, Standalone, Signals, Tailwind CSS v4, Mobile-First).

## Pré-requisitos

- Consultar a skill oficial `angular-developer` para boas práticas atualizadas do Angular 22.
- Consultar [docs/ARCHITECTURE.md](../../../docs/ARCHITECTURE.md) e [docs/DESIGN_SYSTEM.md](../../../docs/DESIGN_SYSTEM.md).

## Passos

1. **Definir modelos tipados**
   - Criar ou atualizar interfaces TypeScript em `frontend/src/app/core/models/`.

2. **Atualizar dados / serviço**
   - Adicionar ou atualizar dados em `frontend/src/app/core/data/` e expor estado derivado via `signal` / `computed` em `frontend/src/app/core/services/`.

3. **Criar componente(s) Mobile-First**
   - Estrutura em `frontend/src/app/features/<feature>/` ou `frontend/src/app/shared/components/<component>/`.
   - Usar Standalone Component com `ChangeDetectionStrategy.OnPush`.
   - Usar `signal`, `computed`, `input()`, `output()` e `inject()`.
   - Usar `@if`, `@for` (com `track`), `@switch` nos templates.
   - Estilizar primeiro para mobile (`360px+`, alvos de toque `>= 44px`) e expandir com `sm:`, `md:`, `lg:`.

4. **Registrar rota (se for página)**
   - Adicionar rota lazy-loaded (`loadComponent`) em `frontend/src/app/app.routes.ts`.

5. **Validação**
   - Executar no diretório `frontend/`:
     - `npm run build` (garantir zero erros de TypeScript/template/CSS).
