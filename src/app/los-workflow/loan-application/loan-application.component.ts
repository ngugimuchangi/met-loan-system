import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, } from '@angular/material/datepicker'
import { provideNativeDateAdapter } from '@angular/material/core';
import { GenderOptions, User } from '../../model/user';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, TitleCasePipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import moment from 'moment';
import swal from 'sweetalert2';

import { LoanDetails } from '../../model/loan';
import { AuthService } from '../../auth/auth.service';
import { loanReasons, genderOpt, locations, employmentStatus, downPaymentOpt } from '../../shared/data/options.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [
    NgFor, TitleCasePipe, ReactiveFormsModule, MatFormFieldModule, MatInput, MatButtonModule,
    MatDatepickerModule, MatSelectModule
  ],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss',
  providers: [provideNativeDateAdapter()]
})

export class LoanApplicationComponent implements OnInit, OnDestroy {
  loanApplicationForm!: FormGroup;
  genderOptions: GenderOptions[] = genderOpt;
  locationOptions = locations;
  loanPurposes = loanReasons;
  employmentStatusOptions = employmentStatus;
  downPaymentOptions = downPaymentOpt;
  selectedCountry = '' as keyof typeof this.locationOptions['cities'];
  minDate = moment().add(1, 'month').toDate();

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder, private router: Router, private loanService: LoanService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    const currentUser = this.authService.currentUser as User;
    this.loanApplicationForm = this.fb.group({
      applicantDetails: this.fb.group({
        id: [currentUser.id],
        firstName: [{ value: currentUser.firstName, disabled: true }],
        lastName: [{ value: currentUser.lastName, disabled: true }],
        gender: [{ value: currentUser.gender, disabled: true }],
        email: [{ value: currentUser.email, disabled: true }],
        phoneNumber: [{ value: currentUser.phoneNumber, disabled: true }],
        dob: [{ value: currentUser.dob, disabled: true }],
        country: ['', Validators.required],
        region: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
        addressLine1: [{ value: currentUser.addressLine1, disabled: true }, Validators.required],
        addressLine2: [{ value: currentUser.addressLine2, disabled: true }, Validators.required]
      }),
      employmentDetails: this.fb.group({
        currentEmploymentStatus: ['', Validators.required],
        employerName: ['', Validators.required],
        jobTitle: ['', Validators.required],
        workAddress: ['', Validators.required],
        monthlyIncome: ['', [Validators.required, Validators.min(0)]],
        employmentDuration: ['', [Validators.required, Validators.min(0)]]
      }),
      loanDetails: this.fb.group({
        amount: [1, [Validators.required, Validators.min(1)]],
        purpose: ['', Validators.required],
        sourceOfDownPayment: ['', Validators.required],
        dueDate: [null, Validators.required],
      }
      ),
    });

    const applicantDetailsControl = this.loanApplicationForm.controls['applicantDetails'];
    applicantDetailsControl.get('country')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((country) => {
      this.selectedCountry = country;
      applicantDetailsControl.get('region')?.setValue('');
      applicantDetailsControl.get('city')?.setValue('');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  submitLoanApplication() {
    const loanDetails = this.loanApplicationForm.getRawValue() as LoanDetails;
    const applicationDate = moment();
    const loanTerm = moment(loanDetails.loanDetails.dueDate).diff(applicationDate, 'months');

    loanDetails.loanDetails.applicationDate = applicationDate.toDate();
    loanDetails.loanDetails.loanTerm = loanTerm
    loanDetails.loanDetails.status = 'pending';

    swal.fire({
      text: 'Submitting loan application...',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
    })

    setTimeout(() => {
      this.loanService.createLoan(loanDetails);
      swal.close();
      this.router.navigateByUrl('');
    }, 3000);
  }

  async canDeactivate() {
    if (this.loanApplicationForm.pristine) return Promise.resolve(true);

    return swal.fire({
      title: ' Are you sure?',
      text: 'Your loan application will not be saved',
      icon: 'question',
      showCancelButton: true,
      customClass: {
        title: 'poppins',
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-cancel'
      },
      confirmButtonText: 'Yes, leave',
      cancelButtonText: 'No, stay'
    }).then((result) => result.isConfirmed);
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
