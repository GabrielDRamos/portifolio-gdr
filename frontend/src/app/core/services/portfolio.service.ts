import { Injectable, computed, signal } from '@angular/core';
import {
  PORTFOLIO_EXPERIENCES,
  PORTFOLIO_PROFILE,
  PORTFOLIO_PROJECTS,
  PORTFOLIO_SKILLS,
} from '../data/portfolio.data';
import { Experience, Profile, Project, SkillGroup } from '../models/portfolio.model';

export const ALL_PROJECTS_TAG = 'Todos';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly profile = signal<Profile>(PORTFOLIO_PROFILE).asReadonly();
  readonly experiences = signal<Experience[]>(PORTFOLIO_EXPERIENCES).asReadonly();
  readonly projects = signal<Project[]>(PORTFOLIO_PROJECTS).asReadonly();
  readonly skillGroups = signal<SkillGroup[]>(PORTFOLIO_SKILLS).asReadonly();

  private readonly selectedTagState = signal<string>(ALL_PROJECTS_TAG);
  readonly selectedTag = this.selectedTagState.asReadonly();

  /** Filter options: core stack first (in profile order), then the remaining project technologies. */
  readonly projectTags = computed(() => {
    const used = new Set(this.projects().flatMap((project) => project.stack));
    const core = this.profile()
      .coreStack.map((tech) => tech.name)
      .filter((name) => used.has(name));
    const rest = [...used].filter((tag) => !core.includes(tag));
    return [ALL_PROJECTS_TAG, ...core, ...rest];
  });

  readonly filteredProjects = computed(() => {
    const tag = this.selectedTag();
    const projects = this.projects();
    return tag === ALL_PROJECTS_TAG ? projects : projects.filter((project) => project.stack.includes(tag));
  });

  selectTag(tag: string): void {
    this.selectedTagState.set(tag);
  }
}
