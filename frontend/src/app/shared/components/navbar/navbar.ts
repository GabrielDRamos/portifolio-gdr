import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          class="inline-flex min-h-11 items-center font-mono text-base font-medium text-ink"
        >
          {{ brand() }}<span class="text-accent">{{ brandSuffix() }}</span>
        </a>

        <!-- Navegação desktop -->
        <nav aria-label="Navegação principal" class="hidden items-center gap-1 md:flex">
          @for (item of navItems; track item.href) {
            <a
              [href]="item.href"
              class="inline-flex min-h-11 items-center px-3 text-sm text-ink-muted hover:text-ink motion-safe:transition-colors"
            >
              {{ item.label }}
            </a>
          }
          <a
            [href]="'mailto:' + email()"
            class="ml-2 inline-flex min-h-11 items-center rounded-lg border border-line-strong px-4 text-sm font-medium text-ink hover:border-accent hover:text-accent motion-safe:transition-colors"
          >
            Contato
          </a>
        </nav>

        <!-- Botão menu mobile (alvo de toque >= 44px) -->
        <button
          type="button"
          class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line text-ink hover:bg-surface md:hidden"
          [attr.aria-expanded]="mobileMenuOpen()"
          aria-controls="mobile-nav"
          [attr.aria-label]="mobileMenuOpen() ? 'Fechar menu' : 'Abrir menu'"
          (click)="toggleMenu()"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            @if (mobileMenuOpen()) {
              <path d="M6 18 18 6M6 6l12 12" />
            } @else {
              <path d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      <!-- Menu mobile expansível -->
      @if (mobileMenuOpen()) {
        <nav id="mobile-nav" aria-label="Navegação mobile" class="border-t border-line px-5 py-3 md:hidden">
          <ul class="flex flex-col gap-1">
            @for (item of navItems; track item.href) {
              <li>
                <a
                  [href]="item.href"
                  (click)="closeMenu()"
                  class="flex min-h-12 items-center rounded-lg px-3 text-base text-ink-soft hover:bg-surface hover:text-ink"
                >
                  {{ item.label }}
                </a>
              </li>
            }
            <li class="pt-2">
              <a
                [href]="'mailto:' + email()"
                (click)="closeMenu()"
                class="flex min-h-12 items-center justify-center rounded-lg bg-accent px-3 text-base font-semibold text-canvas"
              >
                Entrar em contato
              </a>
            </li>
          </ul>
        </nav>
      }
    </header>
  `,
})
export class NavbarComponent {
  readonly brand = input.required<string>();
  readonly brandSuffix = input<string>('');
  readonly email = input.required<string>();

  protected readonly mobileMenuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Tecnologias', href: '#tecnologias' },
  ];

  protected toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
