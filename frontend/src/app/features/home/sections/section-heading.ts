import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block min-w-0' },
  template: `
    <p class="font-mono text-[13px] text-accent">{{ index() }} — {{ label() }}</p>
    <h2
      [id]="headingId()"
      class="mt-3 font-display text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-4xl"
    >
      {{ title() }}
    </h2>
  `,
})
export class SectionHeadingComponent {
  readonly index = input.required<string>();
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
}
