import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal';
import { SectionHeadingComponent } from './section-heading';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeadingComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      class="flex flex-col gap-10 border-t border-line py-16 md:py-24 lg:flex-row"
    >
      <app-section-heading
        appReveal
        class="lg:flex-1"
        index="01"
        label="Sobre"
        headingId="sobre-title"
        [title]="profile().aboutTitle"
      />

      <div class="flex min-w-0 flex-col gap-8 lg:flex-[2]">
        <div appReveal [revealDelay]="100" class="flex max-w-2xl flex-col gap-4">
          @for (paragraph of profile().bio; track $index; let first = $first) {
            <p class="text-[17px] leading-relaxed" [class]="first ? 'text-ink-soft' : 'text-ink-muted'">
              {{ paragraph }}
            </p>
          }
        </div>

        <dl
          appReveal
          [revealDelay]="180"
          class="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
        >
          @for (fact of profile().facts; track fact.label) {
            <div class="bg-canvas p-4 ui-transition hover:bg-surface sm:p-5">
              <dt class="font-mono text-xs text-ink-muted">{{ fact.label }}</dt>
              <dd class="mt-1.5 text-[15px] font-medium">{{ fact.value }}</dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  protected readonly profile = inject(PortfolioService).profile;
}
