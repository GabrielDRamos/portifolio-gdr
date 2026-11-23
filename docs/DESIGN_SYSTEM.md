# Design System — portifolio-gdr

Diretrizes visuais para manter consistência, legibilidade e excelente experiência **Mobile-First** usando **Tailwind CSS v4**.

Referência visual: canvas de design no Claude — [Portfólio GDR — Redesign](https://claude.ai/artifact/EYCTYnLwaXB1xLWnhCyBda) (artboards Desktop 1440 e Mobile 390).

## Princípios (padrão valorizado por recrutadores)

- **Entender em segundos**: nome, cargo (**Desenvolvedor Fullstack**) e stack principal (**Angular · Spring Boot · Flutter**) visíveis acima da dobra, sem precisar rolar.
- **Escaneável**: seções numeradas, títulos curtos, listas com marcador `→` e tags de tecnologia em cada experiência.
- **Contato sempre a um toque**: CTA de e-mail no hero, botão "Contato" fixo na navbar e bloco de contato ao final.
- **Leve e rápido**: sem animações decorativas, imagens pesadas ou efeitos de gradiente; site estático com Lighthouse alto.
- **Conteúdo real**: nada de números inventados — placeholders entre colchetes (`[Empresa]`) até serem preenchidos.

## Direção Visual

- **Estilo**: Editorial técnico escuro, com detalhes em fonte mono que remetem a código (`stack.yml`, `01 — Sobre`).
- **Tema**: Dark mode único.

| Token (`@theme`) | Valor | Uso |
| --- | --- | --- |
| `--color-canvas` | `#0b0b0d` | Fundo base |
| `--color-surface` | `#131316` | Cartões e superfícies elevadas |
| `--color-surface-2` | `#1c1c21` | Tags dentro de cartões |
| `--color-line` | `#24242a` | Bordas e divisórias |
| `--color-line-strong` | `#3f3f46` | Bordas de botões secundários e tags |
| `--color-ink` | `#f4f4f5` | Texto principal |
| `--color-ink-soft` | `#d4d4d8` | Texto de leitura |
| `--color-ink-muted` | `#a1a1aa` | Texto secundário / metadados |
| `--color-accent` | `#f5a524` | Acento único (âmbar): CTAs, foco, rótulos de seção |
| `--color-accent-strong` | `#ffb940` | Hover do CTA principal |
| `--color-online` | `#4ade80` | Indicador "disponível" / experiência atual |

## Tipografia

- **Display (títulos)**: `Space Grotesk` 600–700 (`font-display`).
- **Sans (UI e corpo)**: `Inter` 400–600 (`font-sans`).
- **Mono (metadados técnicos)**: `JetBrains Mono` 400–500 (`font-mono`).
- Comprimento de linha de leitura limitado a `max-w-xl` / `max-w-2xl`.

## Layout

- Container `max-w-6xl mx-auto`, padding `px-5` → `sm:px-8`.
- Seções separadas por `border-t border-line` e `py-16` → `md:py-24`.
- Alvos de toque mínimos de `44px` (`min-h-11`); CTAs principais com `48px` (`min-h-12`).

## Seções (nesta ordem)

1. **Navbar**: marca `gabriel.dev`, links Início / Sobre / Experiência / Projetos / Tecnologias e botão "Contato"; menu hambúrguer acessível no mobile (`aria-expanded`).
2. **Início (Hero)**: status de disponibilidade, saudação, cargo em destaque, resumo com as tecnologias em negrito, CTAs (contato, experiência, GitHub, LinkedIn) e cartão `stack.yml` com as três camadas (Web / Back-end / Mobile).
3. **01 — Sobre**: título de impacto, bio em dois parágrafos e grade de fatos rápidos (atuação, localização, status).
4. **02 — Experiência**: cartões com período, local, selo "Atual", cargo, empresa, conquistas e tags de stack.
5. **03 — Projetos**: filtro por tecnologia (Todos / Angular / Spring Boot / Flutter…) e cartões em formato de mini case study — tipo, ano, problema/solução, conquistas, stack e links de código/demo.
6. **04 — Tecnologias**: quatro grupos (Front-end, Back-end, Mobile, Ferramentas) com a tecnologia âncora em destaque.
7. **Contato + Footer**: chamada final com e-mail e rodapé enxuto.

A ordem segue o fluxo de leitura de um recrutador: quem é → contexto → onde já trabalhou → o que já construiu → detalhamento técnico → como falar com você.

## Acessibilidade & Movimento

- Contraste mínimo **WCAG AA** (todo texto ≥ 4.5:1 sobre o fundo).
- Link "Pular para o conteúdo" e foco visível por teclado (contorno âmbar).
- Transições apenas com `motion-safe:`; `prefers-reduced-motion` desativa a rolagem suave.
