import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  inject,
  input,
  signal,
} from '@angular/core';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
  template: `
    <header
      class="sticky top-0 z-40 border-b backdrop-blur-md ui-transition duration-300"
      [class]="scrolled() || mobileMenuOpen() ? 'border-line bg-canvas/90' : 'border-transparent bg-canvas/60'"
    >
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          class="group inline-flex min-h-11 items-center font-mono text-base font-medium text-ink ui-transition ui-press"
        >
          {{ brand()
          }}<span class="inline-block text-accent ui-transition group-hover:translate-x-0.5">{{ brandSuffix() }}</span>
        </a>

        <!-- Navegação desktop -->
        <nav aria-label="Navegação principal" class="hidden items-center gap-1 md:flex">
          @for (item of navItems; track item.href) {
            <a
              [href]="item.href"
              [attr.aria-current]="activeHref() === item.href ? 'location' : null"
              class="relative inline-flex min-h-11 items-center px-2 text-sm ui-transition after:absolute after:inset-x-2 lg:px-3 lg:after:inset-x-3 after:bottom-2 after:h-px after:origin-left after:bg-accent after:ui-transition after:duration-300 hover:text-ink hover:after:scale-x-100"
              [class]="activeHref() === item.href ? 'text-ink after:scale-x-100' : 'text-ink-muted after:scale-x-0'"
            >
              {{ item.label }}
            </a>
          }
          <a
            [href]="'mailto:' + email()"
            class="ml-2 inline-flex min-h-11 items-center rounded-lg border border-line-strong px-4 text-sm font-medium text-ink ui-transition ui-press hover:border-accent hover:text-accent"
          >
            Contato
          </a>
        </nav>

        <!-- Botão menu mobile (alvo de toque >= 44px) -->
        <button
          type="button"
          class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line text-ink ui-transition ui-press hover:bg-surface md:hidden"
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
              <path animate.enter="icon-swap" d="M6 18 18 6M6 6l12 12" />
            } @else {
              <path animate.enter="icon-swap" d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      <!-- Menu mobile expansível -->
      @if (mobileMenuOpen()) {
        <nav
          id="mobile-nav"
          aria-label="Navegação mobile"
          class="border-t border-line px-5 py-3 md:hidden"
          animate.enter="menu-enter"
          animate.leave="menu-leave"
        >
          <ul class="flex flex-col gap-1">
            @for (item of navItems; track item.href; let i = $index) {
              <li animate.enter="menu-item-enter" [style.--i]="i">
                <a
                  [href]="item.href"
                  (click)="closeMenu()"
                  [attr.aria-current]="activeHref() === item.href ? 'location' : null"
                  class="flex min-h-12 items-center gap-3 rounded-lg px-3 text-base ui-transition ui-press hover:bg-surface hover:text-ink"
                  [class]="activeHref() === item.href ? 'bg-surface text-ink' : 'text-ink-soft'"
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full bg-accent ui-transition"
                    [class]="activeHref() === item.href ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
                    aria-hidden="true"
                  ></span>
                  {{ item.label }}
                </a>
              </li>
            }
            <li class="pt-2" animate.enter="menu-item-enter" [style.--i]="navItems.length">
              <a
                [href]="'mailto:' + email()"
                (click)="closeMenu()"
                class="flex min-h-12 items-center justify-center rounded-lg bg-accent px-3 text-base font-semibold text-canvas ui-transition ui-press hover:bg-accent-strong"
              >
                Entrar em contato
              </a>
            </li>
          </ul>
        </nav>
      }

      <!-- Progresso de leitura (scroll-driven animation, sem JS) -->
      <div class="scroll-progress" aria-hidden="true"></div>
    </header>
  `,
})
export class NavbarComponent {
  readonly brand = input.required<string>();
  readonly brandSuffix = input<string>('');
  readonly email = input.required<string>();

  protected readonly mobileMenuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeHref = signal('#inicio');

  protected readonly navItems: NavItem[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Tecnologias', href: '#tecnologias' },
  ];

  private readonly document = inject(DOCUMENT);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const view = this.document.defaultView;
      if (!view) {
        return;
      }

      // Header gains its border/background once the page leaves the top.
      const onScroll = (): void => this.scrolled.set(view.scrollY > 8);
      onScroll();
      view.addEventListener('scroll', onScroll, { passive: true });
      destroyRef.onDestroy(() => view.removeEventListener('scroll', onScroll));

      // Scroll-spy: highlight the link of the section crossing the middle of the viewport.
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeHref.set(`#${entry.target.id}`);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
      );
      for (const item of this.navItems) {
        const section = this.document.getElementById(item.href.slice(1));
        if (section) {
          observer.observe(section);
        }
      }
      // Contact sits below the last nav item; clear the highlight there.
      const contact = this.document.getElementById('contato');
      if (contact) {
        observer.observe(contact);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
