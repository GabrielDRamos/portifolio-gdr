import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { AboutSectionComponent } from './sections/about';
import { ContactSectionComponent } from './sections/contact';
import { EducationSectionComponent } from './sections/education';
import { ExperienceSectionComponent } from './sections/experience';
import { HeroSectionComponent } from './sections/hero';
import { ProjectsSectionComponent } from './sections/projects';
import { TechnologiesSectionComponent } from './sections/technologies';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ProjectsSectionComponent,
    TechnologiesSectionComponent,
    ContactSectionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-dvh bg-canvas text-ink">
      <a
        href="#conteudo"
        class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:text-canvas"
      >
        Pular para o conteúdo
      </a>

      <app-navbar [brand]="profile().brand" [brandSuffix]="profile().brandSuffix" [email]="profile().email" />

      <main id="conteudo" class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-hero-section />
        <app-about-section />
        <app-experience-section />
        <app-education-section />
        <app-projects-section />
        <app-technologies-section />
        <app-contact-section />
      </main>

      <footer class="border-t border-line">
        <div
          class="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-sm text-ink-muted sm:flex-row sm:justify-between sm:px-8"
        >
          <p>© {{ currentYear }} {{ profile().fullName }}</p>
          <p class="font-mono text-[13px]">Feito com Angular + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  `,
})
export class HomeComponent {
  protected readonly profile = inject(PortfolioService).profile;
  protected readonly currentYear = new Date().getFullYear();
}
