import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CurrencyPipe, DatePipe, NgIf, TitleCasePipe } from '@angular/common';

import { LoanService } from '../loan.service';
import { Loan } from '../../model/loan';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-loan-details',
  standalone: true,
  imports: [NgIf, CurrencyPipe, DatePipe, TitleCasePipe, MatButtonModule, MatIconModule],
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.scss'
})
export class LoanDetailsComponent {

  loan: Loan = inject(MAT_DIALOG_DATA);
  dialogRef: MatDialogRef<LoanDetailsComponent> = inject(MatDialogRef);

  @Output() loanStatusChange = new EventEmitter<boolean>();


  constructor(private loanService: LoanService, private authService: AuthService) { }

  canChangeStatus() {
    return this.authService.isAdmin() && this.loan.loanDetails.status === 'pending'
  }
  approveLoan() {
    this.loanService.approveLoan(this.loan);
    this.loanStatusChange.emit(true);
    this.close();
  }

  rejectLoan() {
    this.loanService.rejectLoan(this.loan);
    this.loanStatusChange.emit(true);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
