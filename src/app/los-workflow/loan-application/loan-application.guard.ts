import { CanDeactivateFn } from '@angular/router';

interface T {
  canDeactivate: () => Promise<boolean>;
}

export const loanApplicationGuard: CanDeactivateFn<T> = (component, _currentRoute, _currentState, _nextState) => {
  return component.canDeactivate();
};
