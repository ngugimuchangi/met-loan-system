import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe, NgFor, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { Loan, LoanStatus } from '../../model/loan';

@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [
    NgFor, DatePipe, TitleCasePipe, MatButtonModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.scss'
})
export class LoanListComponent implements OnInit, AfterViewInit {
  loans: Loan[] = [];
  loanStatus: LoanStatus[] = ['approved', 'pending', 'rejected'];
  dataSource!: MatTableDataSource<Loan>;
  displayColumns: string[] = [
    'id', 'applicantName', 'amount', 'status', 'applicationDate',
    'disbursementDate', 'dueDate', 'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(activateRoute: ActivatedRoute) {
    this.loans = activateRoute.snapshot.data['loansList'];
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.loans);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filter: string): void {

    const loans = filter ? this.loans.filter(loan => loan.loanDetails.status.toLowerCase() === filter.toLowerCase()) : this.loans;
    this.dataSource = new MatTableDataSource(loans);
    this.dataSource.paginator = this.paginator;
  }
}
