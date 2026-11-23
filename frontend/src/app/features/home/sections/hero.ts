import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SocialIconComponent } from '../../../shared/components/social-icon/social-icon';

interface IntroSegment {
  text: string;
  highlight: boolean;
}

@Component({
  selector: 'app-hero-section',
  imports: [SocialIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="inicio"
      aria-labelledby="hero-title"
      class="flex flex-col gap-12 pt-14 pb-16 sm:pt-20 md:pb-24 lg:flex-row lg:items-center lg:gap-14 lg:pt-28"
    >
      <div class="min-w-0 flex-[1.6]">
        <p
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[13px] text-ink-soft"
        >
          <span class="h-2 w-2 rounded-full bg-online" aria-hidden="true"></span>
          {{ profile().availability }}
        </p>

        <p class="mb-3 font-mono text-sm text-accent">Olá, eu sou {{ profile().fullName }}</p>

        <h1
          id="hero-title"
          class="font-display text-[2.6rem] leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {{ profile().role }}.
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          @for (segment of introSegments(); track $index) {
            @if (segment.highlight) {
              <strong class="font-semibold text-ink">{{ segment.text }}</strong>
            } @else {
              {{ segment.text }}
            }
          }
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            [href]="'mailto:' + profile().email"
            class="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-[15px] font-semibold text-canvas hover:bg-accent-strong motion-safe:transition-colors"
          >
            Entrar em contato
          </a>
          <a
            href="#experiencia"
            class="inline-flex min-h-12 items-center justify-center rounded-lg border border-line-strong px-6 text-[15px] font-medium text-ink hover:border-ink-muted motion-safe:transition-colors"
          >
            Ver experiência
          </a>
          <div class="flex gap-3">
            @for (social of profile().socials; track social.label) {
              <a
                [href]="social.url"
                target="_blank"
                rel="noopener noreferrer"
                [attr.aria-label]="social.label"
                class="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line-strong text-ink hover:border-accent hover:text-accent motion-safe:transition-colors"
              >
                <app-social-icon [icon]="social.icon" />
              </a>
            }
          </div>
        </div>
      </div>

      <!-- Cartão de stack principal -->
      <div class="min-w-0 flex-1 overflow-hidden rounded-2xl border border-line bg-surface">
        <div class="flex items-center justify-between border-b border-line px-5 py-3.5 font-mono text-[13px] text-ink-muted">
          <span>stack.yml</span>
          <span class="text-xs">fullstack</span>
        </div>
        <ul>
          @for (tech of profile().coreStack; track tech.name; let i = $index) {
            <li class="flex items-center justify-between gap-4 border-b border-line px-5 py-5 last:border-b-0">
              <div>
                <p class="font-mono text-xs text-ink-muted">0{{ i + 1 }} · {{ tech.layer }}</p>
                <p class="mt-1.5 font-display text-[22px] font-semibold">{{ tech.name }}</p>
              </div>
              <span class="font-mono text-xs text-accent">{{ tech.language }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  protected readonly profile = inject(PortfolioService).profile;

  /** Splits the intro so each core technology name can be emphasized. */
  protected readonly introSegments = computed<IntroSegment[]>(() => {
    const { intro, coreStack } = this.profile();
    const names = coreStack.map((tech) => tech.name);
    if (names.length === 0) {
      return [{ text: intro, highlight: false }];
    }
    const escaped = names.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`(${escaped.join('|')})`);
    return intro
      .split(pattern)
      .filter((text) => text.length > 0)
      .map((text) => ({ text, highlight: names.includes(text) }));
  });
}
