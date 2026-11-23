import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionHeadingComponent } from './section-heading';

@Component({
  selector: 'app-experience-section',
  imports: [SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experiencia" aria-labelledby="experiencia-title" class="border-t border-line py-16 md:py-24">
      <app-section-heading
        index="02"
        label="Experiência"
        headingId="experiencia-title"
        title="Onde tenho construído."
      />

      <ol class="mt-10 flex flex-col gap-4 md:mt-12">
        @for (exp of experiences(); track exp.id) {
          <li
            class="flex flex-col gap-5 rounded-2xl border border-line p-5 sm:p-7 md:flex-row md:gap-6"
            [class.bg-surface]="exp.current"
          >
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 md:w-52 md:shrink-0 md:flex-col md:items-start">
              <p class="font-mono text-[13px] text-ink-soft">{{ exp.period }}</p>
              <p class="text-sm text-ink-muted">{{ exp.location }}</p>
              @if (exp.current) {
                <span class="rounded-full bg-online px-2.5 py-0.5 text-xs font-medium text-canvas md:mt-2">
                  Atual
                </span>
              }
            </div>

            <div class="min-w-0 flex-1">
              <h3 class="font-display text-xl font-semibold sm:text-[22px]">{{ exp.role }}</h3>
              <p class="mt-1 text-[15px] text-accent">{{ exp.company }}</p>

              <ul class="mt-4 flex flex-col gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                @for (item of exp.highlights; track $index) {
                  <li class="flex gap-2.5">
                    <span class="text-accent" aria-hidden="true">→</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>

              <ul class="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                @for (tech of exp.stack; track tech) {
                  <li class="rounded-md border border-line-strong px-2.5 py-1 font-mono text-xs text-ink-soft">
                    {{ tech }}
                  </li>
                }
              </ul>
            </div>
          </li>
        }
      </ol>
    </section>
  `,
})
export class ExperienceSectionComponent {
  protected readonly experiences = inject(PortfolioService).experiences;
}
