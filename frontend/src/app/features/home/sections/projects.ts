import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal';
import { SectionHeadingComponent } from './section-heading';

@Component({
  selector: 'app-projects-section',
  imports: [SectionHeadingComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projetos" aria-labelledby="projetos-title" class="border-t border-line py-16 md:py-24">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <app-section-heading
          appReveal
          index="04"
          label="Projetos"
          headingId="projetos-title"
          title="O que já coloquei de pé."
        />

        <!-- Filtro com rolagem horizontal no mobile -->
        <div
          appReveal
          [revealDelay]="100"
          role="group"
          aria-label="Filtrar projetos por tecnologia"
          class="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:justify-end"
        >
          @for (tag of tags(); track tag) {
            <button
              type="button"
              (click)="selectTag(tag)"
              [attr.aria-pressed]="selectedTag() === tag"
              class="min-h-11 shrink-0 rounded-lg border px-4 text-sm font-medium ui-transition ui-press"
              [class]="
                selectedTag() === tag
                  ? 'border-accent bg-accent text-canvas'
                  : 'border-line-strong text-ink-soft hover:border-ink-muted hover:bg-surface hover:text-ink'
              "
            >
              {{ tag }}
            </button>
          }
        </div>
      </div>

      <ul class="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <!-- Keyed by the active filter so every card re-enters (staggered) when the filter changes. -->
        @for (project of projects(); track selectedTag() + ':' + project.slug; let i = $index) {
          <li
            appReveal
            [revealDelay]="(i % 3) * 80"
            class="flex flex-col rounded-2xl border border-line bg-surface p-5 ui-transition duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-6"
          >
            <div class="flex items-center justify-between gap-3 font-mono text-xs">
              <span class="text-accent">{{ project.kind }}</span>
              @if (project.year) {
                <span class="text-ink-muted">{{ project.year }}</span>
              }
            </div>

            <h3 class="mt-3 font-display text-xl font-semibold sm:text-[22px]">{{ project.title }}</h3>
            <p class="mt-3 text-[15px] leading-relaxed text-ink-soft">{{ project.description }}</p>

            <ul class="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-ink-muted">
              @for (item of project.highlights; track $index) {
                <li class="flex gap-2.5">
                  <span class="text-accent" aria-hidden="true">→</span>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>

            <ul class="mt-5 mb-6 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
              @for (tech of project.stack; track tech) {
                <li
                  class="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs ui-transition"
                  [class]="tech === selectedTag() ? 'text-accent' : 'text-ink-soft'"
                >
                  {{ tech }}
                </li>
              }
            </ul>

            @if (project.repoUrl || project.liveUrl) {
              <div class="mt-auto flex flex-wrap gap-x-5 border-t border-line pt-3">
                @if (project.repoUrl) {
                  <a
                    [href]="project.repoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink ui-transition ui-press hover:text-accent"
                  >
                    Código
                    <span class="sr-only">de {{ project.title }}</span>
                    <span
                      class="inline-block ui-transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                      >↗</span
                    >
                  </a>
                }
                @if (project.liveUrl) {
                  <a
                    [href]="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink ui-transition ui-press hover:text-accent"
                  >
                    Ver online
                    <span class="sr-only">— {{ project.title }}</span>
                    <span
                      class="inline-block ui-transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                      >↗</span
                    >
                  </a>
                }
              </div>
            }
          </li>
        } @empty {
          <li appReveal class="col-span-full rounded-2xl border border-line p-6 text-sm text-ink-muted">
            Nenhum projeto com essa tecnologia ainda.
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsSectionComponent {
  private readonly portfolio = inject(PortfolioService);

  protected readonly projects = this.portfolio.filteredProjects;
  protected readonly tags = this.portfolio.projectTags;
  protected readonly selectedTag = this.portfolio.selectedTag;

  protected selectTag(tag: string): void {
    this.portfolio.selectTag(tag);
  }
}
