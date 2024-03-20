import { v4 as uuid } from 'uuid'

export type LoanStatus = 'pending' | 'rejected' | 'approved';

export type LoanDownPaymentSource = 'savings' | 'loan' | 'savings' | 'investment' | 'other';

export type EmploymentStatus = 'employed' | 'unemployed' | 'self-employed' | 'student';

export interface LoanDetails {
    id?: string,
    applicantDetails: {
        id: string
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string
        dob: Date
        gender: 'male' | 'female' | 'other',
        country: string,
        region: string,
        city: string,
        zipCode: string,
        addressLine1: string,
        addressLine2: string
    }
    employmentDetails: {
        currentEmploymentStatus: EmploymentStatus
        employerName: string,
        jobTitle: string,
        workAddress: string,
        monthlyIncome: number,
        employmentDuration: number
    },

    loanDetails: {
        amount: number,
        purpose: string,
        sourceOfDownPayment: LoanDownPaymentSource,
        loanTerm: number,
        status: LoanStatus
        applicationDate: Date,
        disbursementDate: Date | null,
        dueDate: Date | null
    }
}


export class Loan {
    id: string;
    applicantDetails: LoanDetails['applicantDetails'];
    employmentDetails: LoanDetails['employmentDetails'];
    loanDetails: LoanDetails['loanDetails'];


    constructor(loanDetails: LoanDetails) {
        this.id = loanDetails.id || 'LN' + uuid();
        this.applicantDetails = loanDetails.applicantDetails;
        this.employmentDetails = loanDetails.employmentDetails;
        this.loanDetails = loanDetails.loanDetails;
    }
}
