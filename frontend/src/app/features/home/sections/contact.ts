import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal';

@Component({
  selector: 'app-contact-section',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="contato"
      aria-labelledby="contato-title"
      class="flex flex-col gap-8 border-t border-line py-16 md:flex-row md:items-center md:justify-between md:py-24"
    >
      <div appReveal class="min-w-0">
        <h2
          id="contato-title"
          class="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-[40px]"
        >
          Vamos construir algo juntos?
        </h2>
        <p class="mt-3 text-[17px] text-ink-muted">{{ profile().contactMessage }}</p>
      </div>
      <a
        appReveal
        [revealDelay]="120"
        [href]="'mailto:' + profile().email"
        class="group inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-base font-semibold break-all text-canvas ui-transition ui-press hover:bg-accent-strong"
      >
        {{ profile().email }}
        <span class="inline-block ui-transition group-hover:translate-x-1" aria-hidden="true">→</span>
      </a>
    </section>
  `,
})
export class ContactSectionComponent {
  protected readonly profile = inject(PortfolioService).profile;
}
