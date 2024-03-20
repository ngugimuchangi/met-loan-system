import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LoanService } from './loan.service';
import { AuthService } from '../auth/auth.service';
import { Loan } from '../model/loan';

export const loansResolver: ResolveFn<Loan[] | Loan | null> = (_route, _state) => {
  const loanService = inject(LoanService);
  const authService = inject(AuthService);
  const currentUser = authService.currentUser;

  if (currentUser?.role === 'user') return loanService.getCurrentUserLoans();
  if (currentUser?.role === 'admin') return loanService.loans;
  return [];
};
