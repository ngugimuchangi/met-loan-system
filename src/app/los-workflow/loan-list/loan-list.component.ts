import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe, DatePipe, NgFor, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import { Loan, LoanStatus } from '../../model/loan';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';

@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [
    NgFor, CurrencyPipe, DatePipe, TitleCasePipe, FormsModule, MatButtonModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatFormFieldModule, MatSelectModule, MatDialogModule],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.scss'
})
export class LoanListComponent implements OnInit, AfterViewInit, OnDestroy {
  loans: Loan[] = [];
  loanStatus: LoanStatus[] = ['approved', 'pending', 'rejected'];
  dataSource!: MatTableDataSource<Loan>;
  displayColumns: string[] = [
    'id', 'applicantName', 'amount', 'status', 'applicationDate',
    'disbursementDate', 'dueDate', 'actions'
  ];
  selectedStatus = '';

  private destroy$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(activateRoute: ActivatedRoute, private dialogService: MatDialog) {
    this.loans = activateRoute.snapshot.data['loansList'];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.loans);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  applyFilter(filter: string): void {
    const loans = filter ? this.loans.filter(loan => loan.loanDetails.status.toLowerCase() === filter.toLowerCase()) : this.loans;
    this.dataSource = new MatTableDataSource(loans);
    this.dataSource.paginator = this.paginator;
  }

  viewLoanDetails(loan: Loan): void {
    const dialogConfig: MatDialogConfig = {
      width: 'auto',
      maxHeight: '80vh',
      panelClass: 'dialog',
      data: loan
    }
    const dialog = this.dialogService.open(LoanDetailsComponent, dialogConfig);
    const loanDetailsComponent = dialog.componentInstance;
    const loanStatusChangeSub = loanDetailsComponent.loanStatusChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.applyFilter(this.selectedStatus);
      loanStatusChangeSub.unsubscribe();
    }
    );
  }
}
