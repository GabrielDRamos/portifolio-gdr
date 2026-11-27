import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal';
import { SectionHeadingComponent } from './section-heading';

@Component({
  selector: 'app-technologies-section',
  imports: [SectionHeadingComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="tecnologias" aria-labelledby="tecnologias-title" class="border-t border-line py-16 md:py-24">
      <app-section-heading
        appReveal
        index="05"
        label="Tecnologias"
        headingId="tecnologias-title"
        title="Ferramentas que uso para entregar."
      />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
        @for (group of skillGroups(); track group.category; let i = $index) {
          <div
            appReveal
            [revealDelay]="i * 80"
            class="rounded-2xl border border-line bg-surface p-5 ui-transition duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-6"
          >
            <p class="font-mono text-xs text-ink-muted">{{ group.label }}</p>
            <h3 class="mt-2 font-display text-2xl font-semibold">{{ group.title }}</h3>
            <ul class="mt-5 flex flex-wrap gap-2">
              @for (skill of group.items; track skill) {
                <li
                  class="rounded-md bg-surface-2 px-2.5 py-1.5 text-[13px] text-ink-soft ui-transition hover:bg-line-strong hover:text-ink"
                >
                  {{ skill }}
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
})
export class TechnologiesSectionComponent {
  protected readonly skillGroups = inject(PortfolioService).skillGroups;
}
