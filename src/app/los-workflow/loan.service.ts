import { Injectable } from '@angular/core';

import { Loan, LoanDetails } from '../model/loan';
import { AuthService } from '../auth/auth.service';
import { loans } from '../shared/data/loan.data';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private authService: AuthService) { }


  get loans() {
    return loans.sort((a, b) => b.loanDetails.applicationDate.getTime() - a.loanDetails.applicationDate.getTime());
  }

  getLoan(id: string) {
    return this.loans.find(loan => loan.applicantDetails.id === id);
  }

  getLoansByUserId(id: string) {
    return this.loans.filter(loan => loan.applicantDetails.id === id);
  }


  getCurrentUserLoans() {
    const user = this.authService.currentUser;
    return this.getLoansByUserId(user?.id || '');
  }

  getLoanById(id: string) {
    return loans.find(loan => loan.id === id);
  }

  createLoan(loanDetails: LoanDetails) {
    const loan = new Loan(loanDetails);
    loans.push(loan);
  }


  updateLoan(id: string, update: Partial<Loan>) {
    const index = loans.findIndex(loan => loan.id === id);
    const loan = loans[index];
    Object.assign(loan, update);
  }

  approveLoan(loan: Loan) {
    loan.loanDetails.status = 'approved';
    loan.loanDetails.disbursementDate = new Date();
  }

  rejectLoan(loan: Loan) {
    loan.loanDetails.status = 'rejected';
  }

}
