import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Cross-fades between routes via the native View Transitions API (no-op where unsupported).
    provideRouter(routes, withViewTransitions({ skipInitialTransition: true })),
  ],
};
