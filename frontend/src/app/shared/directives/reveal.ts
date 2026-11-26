import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input, signal } from '@angular/core';

/**
 * Fades and slides the host element in the first time it enters the viewport.
 * Styling lives in `styles.css` (`.reveal` / `.is-revealed`) and is skipped
 * entirely when the user prefers reduced motion.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.is-revealed]': 'revealed()',
    '[style.--reveal-delay]': "revealDelay() + 'ms'",
  },
})
export class RevealDirective {
  /** Delay in milliseconds, used to stagger sibling elements. */
  readonly revealDelay = input(0);

  protected readonly revealed = signal(false);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        this.revealed.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            this.revealed.set(true);
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0 },
      );

      observer.observe(this.host.nativeElement);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
