import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal';
import { SectionHeadingComponent } from './section-heading';

@Component({
  selector: 'app-education-section',
  imports: [SectionHeadingComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="formacao" aria-labelledby="formacao-title" class="border-t border-line py-16 md:py-24">
      <app-section-heading
        appReveal
        index="03"
        label="Formação"
        headingId="formacao-title"
        title="Base acadêmica e estudo contínuo."
      />

      <ul class="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        @for (item of education(); track item.id; let i = $index) {
          <li
            appReveal
            [revealDelay]="i * 80"
            class="flex flex-col rounded-2xl border border-line bg-surface p-5 ui-transition duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-6"
          >
            <div class="flex items-center justify-between gap-3 font-mono text-xs">
              <span class="text-ink-muted">{{ item.level }}</span>
              <span
                class="rounded-full border px-2.5 py-0.5"
                [class]="item.status === 'Concluída' ? 'border-online/40 text-online' : 'border-line-strong text-ink-soft'"
              >
                {{ item.status }}
              </span>
            </div>

            <h3 class="mt-3 font-display text-xl font-semibold sm:text-[22px]">{{ item.title }}</h3>
            <p class="mt-1 text-[15px] text-accent">{{ item.institution }}</p>

            <ul class="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-ink-soft">
              @for (highlight of item.highlights; track $index) {
                <li class="flex gap-2.5">
                  <span class="text-accent" aria-hidden="true">→</span>
                  <span>{{ highlight }}</span>
                </li>
              }
            </ul>

            @if (item.tags.length > 0) {
              <ul class="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias estudadas">
                @for (tag of item.tags; track tag) {
                  <li
                    class="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-soft ui-transition hover:bg-line-strong hover:text-ink"
                  >
                    {{ tag }}
                  </li>
                }
              </ul>
            }
          </li>
        }
      </ul>
    </section>
  `,
})
export class EducationSectionComponent {
  protected readonly education = inject(PortfolioService).education;
}
