// Sample data for loan application`

import { Loan, LoanDetails } from '../../model/loan';

const loanDetails: LoanDetails[] = [
    {
        id: 'LN-251ae0d4-3360-426b-87bf-f02406bfa117',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 133325,
            sourceOfDownPayment: 'savings',
            purpose: 'Consolidating high-interest debts',
            loanTerm: 12,
            status: 'pending',
            applicationDate: new Date('2021-02-14T16:04:46.147Z'),
            disbursementDate: new Date('2023-02-20T06:56:31.236Z'),
            dueDate: new Date('2020-12-04T22:09:15.471Z')
        }
    },
    {
        id: 'LN-22bb1926-2bfd-42f0-a3b2-d373e6b7acbd',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 262400,
            sourceOfDownPayment: 'investment',
            purpose: 'Consolidating high-interest debts',
            loanTerm: 8,
            status: 'pending',
            applicationDate: new Date('2020-05-21T14:57:42.175Z'),
            disbursementDate: new Date('2023-09-07T16:41:43.451Z'),
            dueDate: new Date('2022-04-29T19:59:59.204Z')
        }
    },
    {
        id: 'LN-d2594148-f7a3-4a71-95b5-1a03cf429f21',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 132294,
            sourceOfDownPayment: 'savings',
            purpose: 'Emergency expenses such as unexpected car repairs or appliance replacements',
            loanTerm: 10,
            status: 'rejected',
            applicationDate: new Date('2020-09-17T10:22:14.123Z'),
            disbursementDate: new Date('2021-09-11T07:31:03.020Z'),
            dueDate: new Date('2026-01-03T08:01:59.194Z')
        }
    },
    {
        id: 'LN-ec2a48e3-384b-4e6d-8ec3-31183c114e4c',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 187612,
            sourceOfDownPayment: 'investment',
            purpose: 'Home repairs or renovations',
            loanTerm: 9,
            status: 'rejected',
            applicationDate: new Date('2021-01-02T12:36:57.067Z'),
            disbursementDate: new Date('2023-04-20T23:13:36.075Z'),
            dueDate: new Date('2024-02-14T21:21:32.490Z')
        }
    },
    {
        id: 'LN-d72378ac-d553-4713-b461-57d89c10be5a',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 71354,
            sourceOfDownPayment: 'investment',
            purpose: 'Purchasing a vehicle',
            loanTerm: 4,
            status: 'pending',
            applicationDate: new Date('2020-10-17T16:51:21.266Z'),
            disbursementDate: new Date('2023-11-02T12:13:50.497Z'),
            dueDate: new Date('2023-03-25T02:20:32.275Z')
        }
    },
    {
        id: 'LN-8e0690ca-5c74-4c1a-84c2-2f790777538f',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 77448,
            sourceOfDownPayment: 'savings',
            purpose: 'Consolidating high-interest debts',
            loanTerm: 3,
            status: 'approved',
            applicationDate: new Date('2020-01-30T16:47:50.171Z'),
            disbursementDate: new Date('2022-02-14T19:07:50.441Z'),
            dueDate: new Date('2020-10-05T01:06:45.477Z')
        }
    },
    {
        id: 'LN-5ab90703-527c-4e7f-be99-1b918ee279fa',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 178058,
            sourceOfDownPayment: 'loan',
            purpose: 'Unexpected medical expenses',
            loanTerm: 12,
            status: 'approved',
            applicationDate: new Date('2021-01-12T20:20:38.179Z'),
            disbursementDate: new Date('2023-05-05T01:10:44.185Z'),
            dueDate: new Date('2020-08-15T21:48:02.837Z')
        }
    },
    {
        id: 'LN-618b6dc6-4a9d-4d57-8ce0-84d9e3effeb4',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 462299,
            sourceOfDownPayment: 'investment',
            purpose: 'Emergency expenses such as unexpected car repairs or appliance replacements',
            loanTerm: 18,
            status: 'rejected',
            applicationDate: new Date('2021-08-03T13:06:13.041Z'),
            disbursementDate: new Date('2023-01-06T18:07:42.241Z'),
            dueDate: new Date('2020-11-27T16:12:32.118Z')
        }
    },
    {
        id: 'LN-06d6dd2f-d3cc-40b3-a5a5-5f24f3ed9d1f',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 444746,
            sourceOfDownPayment: 'savings',
            purpose: 'Unexpected medical expenses',
            loanTerm: 24,
            status: 'pending',
            applicationDate: new Date('2023-11-28T00:19:10.268Z'),
            disbursementDate: new Date('2020-02-12T20:58:45.567Z'),
            dueDate: new Date('2024-01-16T13:56:43.848Z')
        }
    },
    {
        id: 'LN-3aac2321-9038-4240-9aa9-09b3462cab8f',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 172961,
            sourceOfDownPayment: 'savings',
            purpose: 'Starting or expanding a business',
            loanTerm: 10,
            status: 'approved',
            applicationDate: new Date('2022-04-23T04:34:43.678Z'),
            disbursementDate: new Date('2023-03-15T19:20:34.352Z'),
            dueDate: new Date('2020-07-21T12:21:16.246Z')
        }
    },
    {
        id: 'LN-ef718d95-86ee-4b19-9147-2336343d2020',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 492489,
            sourceOfDownPayment: 'loan',
            purpose: 'Consolidating high-interest debts',
            loanTerm: 18,
            status: 'approved',
            applicationDate: new Date('2021-07-12T21:23:43.492Z'),
            disbursementDate: new Date('2022-02-16T21:54:04.448Z'),
            dueDate: new Date('2023-01-27T11:37:39.417Z')
        }
    },
    {
        id: 'LN-4074a2fa-217c-4310-b40f-89390124f618',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 205983,
            sourceOfDownPayment: 'loan',
            purpose: 'Purchasing a vehicle',
            loanTerm: 6,
            status: 'approved',
            applicationDate: new Date('2020-03-21T08:28:29.800Z'),
            disbursementDate: new Date('2022-10-17T16:44:01.100Z'),
            dueDate: new Date('2021-11-11T12:22:48.984Z')
        }
    },
    {
        id: 'LN-6703b911-065d-4a34-8a18-3a37fad86a8f',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 219845,
            sourceOfDownPayment: 'savings',
            purpose: 'Financing education or vocational training',
            loanTerm: 7,
            status: 'pending',
            applicationDate: new Date('2023-01-23T19:21:21.915Z'),
            disbursementDate: new Date('2022-02-20T12:28:54.786Z'),
            dueDate: new Date('2024-02-28T13:52:08.746Z')
        }
    },
    {
        id: 'LN-a77fddd8-a9ca-436b-89f9-b72ec495c0ba',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 189814,
            sourceOfDownPayment: 'loan',
            purpose: 'Emergency expenses such as unexpected car repairs or appliance replacements',
            loanTerm: 7,
            status: 'approved',
            applicationDate: new Date('2020-06-03T00:33:56.889Z'),
            disbursementDate: new Date('2022-11-28T09:56:30.940Z'),
            dueDate: new Date('2021-08-26T13:30:08.239Z')
        }
    },
    {
        id: 'LN-a92fe6dd-12a5-4851-b938-572503dd8139',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 26025,
            sourceOfDownPayment: 'investment',
            purpose: 'Home repairs or renovations',
            loanTerm: 1,
            status: 'rejected',
            applicationDate: new Date('2020-12-15T01:47:23.574Z'),
            disbursementDate: new Date('2021-07-31T05:04:35.057Z'),
            dueDate: new Date('2021-07-23T22:23:00.901Z')
        }
    },
    {
        id: 'LN-51fa547f-89a4-488f-b961-19b201835032',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 393249,
            sourceOfDownPayment: 'loan',
            purpose: 'Home repairs or renovations',
            loanTerm: 6,
            status: 'approved',
            applicationDate: new Date('2021-10-29T19:16:51.319Z'),
            disbursementDate: new Date('2021-09-10T00:57:06.413Z'),
            dueDate: new Date('2020-03-20T14:04:39.458Z')
        }
    },
    {
        id: 'LN-76919645-6db7-44e1-a502-1c262a97f610',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 320630,
            sourceOfDownPayment: 'investment',
            purpose: 'Unexpected medical expenses',
            loanTerm: 8,
            status: 'pending',
            applicationDate: new Date('2021-08-16T17:44:41.718Z'),
            disbursementDate: new Date('2020-11-01T19:12:15.473Z'),
            dueDate: new Date('2023-03-17T22:39:04.770Z')
        }
    },
    {
        id: 'LN-08721e7d-e8ea-4378-a06a-f7fa1d59a414',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 132235,
            sourceOfDownPayment: 'investment',
            purpose: 'Emergency expenses such as unexpected car repairs or appliance replacements',
            loanTerm: 5,
            status: 'pending',
            applicationDate: new Date('2021-05-31T04:11:09.585Z'),
            disbursementDate: new Date('2020-12-08T23:06:22.354Z'),
            dueDate: new Date('2022-12-20T15:51:07.733Z')
        }
    },
    {
        id: 'LN-5e246f6c-8a27-472a-8b62-8d681076d71d',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 103655,
            sourceOfDownPayment: 'savings',
            purpose: 'Emergency expenses such as unexpected car repairs or appliance replacements',
            loanTerm: 13,
            status: 'approved',
            applicationDate: new Date('2023-02-16T22:49:29.845Z'),
            disbursementDate: new Date('2022-10-21T01:31:03.253Z'),
            dueDate: new Date('2023-04-24T07:12:55.612Z')
        }
    },
    {
        id: 'LN-448c607b-3e0d-4b67-84d7-804dfb0a909d',
        applicantDetails: {
            id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            phoneNumber: '(254) 723-567 432',
            dob: new Date('1990-01-01T00:00:00.000Z'),
            gender: 'male',
            country: 'Kenya',
            region: 'Nairobi',
            city: 'Nairobi',
            zipCode: '94117',
            addressLine1: "34158 Pouros Valley",
            addressLine2: "44498 Predovic Hills"
        },
        employmentDetails: {
            currentEmploymentStatus: 'employed',
            employerName: 'Metropol',
            jobTitle: 'Software Engineer',
            workAddress: 'Kenya Road, Upper Hill, Nairobi-Kenya',
            monthlyIncome: 400000,
            employmentDuration: 5
        },
        loanDetails: {
            amount: 109063,
            sourceOfDownPayment: 'loan',
            purpose: 'Purchasing a vehicle',
            loanTerm: 12,
            status: 'approved',
            applicationDate: new Date('2020-04-11T05:25:39.928Z'),
            disbursementDate: new Date('2023-08-06T00:20:30.387Z'),
            dueDate: new Date('2026-02-08T20:53:28.761Z')
        }
    },
    {
        id: 'LN-ddb0ffd3-954e-47d1-81ed-bf984311ed1a',
        applicantDetails: {
            id: 'USR-b7d8dceb-7581-491c-b345-c71806b5f170',
            firstName: 'Janessa',
            lastName: 'Brakus',
            email: 'Junius_Kautzer@yahoo.com',
            phoneNumber: 'string',
            dob: new Date('2006-11-07T07:53:43.494Z'),
            gender: 'female',
            country: 'Mali',
            region: 'Michigan',
            city: 'Batzside',
            zipCode: '42859',
            addressLine1: '907 Iva Mission',
            addressLine2: '43277 Wyman Street'
        },
        employmentDetails: {
            currentEmploymentStatus: 'self-employed',
            employerName: 'Hermann Inc',
            jobTitle: 'Investor Operations Designer',
            workAddress: '7380 Stracke Rest',
            monthlyIncome: 670635,
            employmentDuration: 1
        },
        loanDetails: {
            amount: 2450989,
            sourceOfDownPayment: 'other',
            purpose: 'Starting or expanding a business',
            loanTerm: 36,
            status: 'approved',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-8299ea35-db7c-4a40-97da-40e4297c6369',
        applicantDetails: {
            id: 'USR-20b5d682-e201-4688-b275-16c5c6537f4a',
            firstName: 'Elmer',
            lastName: 'Brakus',
            email: 'Vita.Feil72@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('2012-07-30T06:39:57.291Z'),
            gender: 'male',
            country: 'Argentina',
            region: 'Wisconsin',
            city: 'San Francisco',
            zipCode: '32651-0892',
            addressLine1: '9240 Hoppe Falls',
            addressLine2: '9817 Ankunding Dam'
        },
        employmentDetails: {
            currentEmploymentStatus: 'self-employed',
            employerName: 'Bauch - Collins',
            jobTitle: 'Future Brand Associate',
            workAddress: '94911 Stone Shoals',
            monthlyIncome: 33588,
            employmentDuration: 3.2
        },
        loanDetails: {
            amount: 9525385,
            sourceOfDownPayment: 'investment',
            purpose: 'Home repairs or renovations',
            loanTerm: 19,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-8213fa1c-0266-4bf5-84b7-43028f35de3b',
        applicantDetails: {
            id: 'USR-220e14c3-9746-4f0d-b06a-1b8d1a0c0f47',
            firstName: 'Rosella',
            lastName: 'Klocko',
            email: 'Liliane_Goyette@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('1959-08-15T13:17:57.459Z'),
            gender: 'female',
            country: 'Burkina Faso',
            region: 'Kansas',
            city: 'Kutchborough',
            zipCode: '89241-1697',
            addressLine1: '273 Jettie Street',
            addressLine2: '170 Shanahan Ranch'
        },
        employmentDetails: {
            currentEmploymentStatus: 'unemployed',
            employerName: 'Predovic and Sons',
            jobTitle: 'Central Paradigm Agent',
            workAddress: '7405 Medhurst Estate',
            monthlyIncome: 381864,
            employmentDuration: 1.4
        },
        loanDetails: {
            amount: 7839747,
            sourceOfDownPayment: 'investment',
            purpose: 'Investing in real estate or other assets',
            loanTerm: 21,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-821a2591-7699-49a7-967e-b3658e0b869d',
        applicantDetails: {
            id: 'USR-748c0114-9730-44bd-b324-a4acbfceb654',
            firstName: 'Samanta',
            lastName: 'Grimes',
            email: 'Merlin.Kuphal84@gmail.com',
            phoneNumber: 'string',
            dob: new Date('2023-05-23T23:41:41.694Z'),
            gender: 'male',
            country: 'Palestine',
            region: 'Virginia',
            city: 'Fort Maxieboro',
            zipCode: '95344-8606',
            addressLine1: '9331 Murazik Tunnel',
            addressLine2: '13856 Anderson Port'
        },
        employmentDetails: {
            currentEmploymentStatus: 'self-employed',
            employerName: 'Medhurst - Lueilwitz',
            jobTitle: 'Human Assurance Director',
            workAddress: '422 Boehm Fords',
            monthlyIncome: 921710,
            employmentDuration: 2
        },
        loanDetails: {
            amount: 8640548,
            sourceOfDownPayment: 'savings',
            purpose: 'Investing in real estate or other assets',
            loanTerm: 30,
            status: 'approved',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-c2ef46b7-a40f-4907-a971-3a967a3dc4ff',
        applicantDetails: {
            id: 'USR-c4768f80-883c-43f8-bd7a-a05ffbaca7f4',
            firstName: 'Darrion',
            lastName: 'Mayer',
            email: 'Jonathan.Mills15@gmail.com',
            phoneNumber: 'string',
            dob: new Date('1984-09-01T02:51:55.754Z'),
            gender: 'female',
            country: 'Canada',
            region: 'Texas',
            city: 'Wisozkland',
            zipCode: '09190-9515',
            addressLine1: '71902 Rice Groves',
            addressLine2: '82203 Paolo Circles'
        },
        employmentDetails: {
            currentEmploymentStatus: 'student',
            employerName: 'Veum LLC',
            jobTitle: 'Chief Mobility Specialist',
            workAddress: '78523 Tabitha Terrace',
            monthlyIncome: 373753,
            employmentDuration: 0.5
        },
        loanDetails: {
            amount: 1761344,
            sourceOfDownPayment: 'loan',
            purpose: 'Purchasing a vehicle',
            loanTerm: 30,
            status: 'approved',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-432045f9-6d10-455c-a823-52e968c37080',
        applicantDetails: {
            id: 'USR-4ca78183-6bc0-4753-aa6d-158891e595e4',
            firstName: 'Josiane',
            lastName: 'Nolan',
            email: 'Cleo_Cole@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('2006-11-08T08:15:34.535Z'),
            gender: 'male',
            country: 'Republic of Korea',
            region: 'Wyoming',
            city: 'Ryanhaven',
            zipCode: '40925',
            addressLine1: '4048 Jamir Crest',
            addressLine2: '53896 Dickens Neck'
        },
        employmentDetails: {
            currentEmploymentStatus: 'self-employed',
            employerName: 'Grant - Raynor',
            jobTitle: 'Legacy Usability Representative',
            workAddress: '1686 Luis Shoal',
            monthlyIncome: 421599,
            employmentDuration: 4.2
        },
        loanDetails: {
            amount: 4235694,
            sourceOfDownPayment: 'loan',
            purpose: 'Funding a special event like a wedding or vacation',
            loanTerm: 11,
            status: 'approved',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-e3bd067c-bb96-43d2-b74e-92a6fd89e0e3',
        applicantDetails: {
            id: 'USR-23523e5c-1c53-4fe1-b261-dbeab58d166c',
            firstName: 'Archibald',
            lastName: 'Murazik',
            email: 'Marshall41@gmail.com',
            phoneNumber: 'string',
            dob: new Date('1971-01-10T14:58:40.575Z'),
            gender: 'other',
            country: 'Panama',
            region: 'Pennsylvania',
            city: 'East Edwinstad',
            zipCode: '20768',
            addressLine1: '3712 Erick Club',
            addressLine2: '803 Julia Corners'
        },
        employmentDetails: {
            currentEmploymentStatus: 'student',
            employerName: 'Price LLC',
            jobTitle: 'Direct Data Supervisor',
            workAddress: '11712 Georgiana Court',
            monthlyIncome: 908532,
            employmentDuration: 1.5
        },
        loanDetails: {
            amount: 5064711,
            sourceOfDownPayment: 'other',
            purpose: 'Unexpected medical expenses',
            loanTerm: 4,
            status: 'approved',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-6fd72b42-748a-4048-8867-63e0efd2a620',
        applicantDetails: {
            id: 'USR-658e6c3e-5241-4839-bf95-953583bf5c82',
            firstName: 'Cristal',
            lastName: 'Bode',
            email: 'Emilie_Schaden@gmail.com',
            phoneNumber: 'string',
            dob: new Date('2009-11-28T17:07:01.357Z'),
            gender: 'female',
            country: 'Norfolk Island',
            region: 'Connecticut',
            city: 'Fort Roy',
            zipCode: '89500-0056',
            addressLine1: '2724 Davis Forest',
            addressLine2: '9828 Metz Island'
        },
        employmentDetails: {
            currentEmploymentStatus: 'self-employed',
            employerName: 'Koelpin - Mueller',
            jobTitle: 'Chief Functionality Administrator',
            workAddress: '48242 Moises Mountains',
            monthlyIncome: 207844,
            employmentDuration: 4.3
        },
        loanDetails: {
            amount: 8221434,
            sourceOfDownPayment: 'other',
            purpose: 'Starting or expanding a business',
            loanTerm: 36,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-d1813d1e-de7b-4f29-a913-7cd20345457f',
        applicantDetails: {
            id: 'USR-eaa49f33-ae50-4869-8b05-97ccd9e5af79',
            firstName: 'Ellen',
            lastName: 'Hessel',
            email: 'Sheldon_Blick@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('1965-08-16T16:54:28.793Z'),
            gender: 'other',
            country: 'Mozambique',
            region: 'California',
            city: 'Joelbury',
            zipCode: '41245-9933',
            addressLine1: '91845 Nico Junctions',
            addressLine2: '2710 Nitzsche Mount'
        },
        employmentDetails: {
            currentEmploymentStatus: 'self-employed',
            employerName: 'VonRueden, Purdy and Ratke',
            jobTitle: 'Dynamic Security Developer',
            workAddress: '31143 Becker Hill',
            monthlyIncome: 255987,
            employmentDuration: 3.5
        },
        loanDetails: {
            amount: 9182276,
            sourceOfDownPayment: 'loan',
            purpose: 'Consolidating high-interest debts',
            loanTerm: 21,
            status: 'rejected',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-06be5b21-ed87-4d8e-aee2-96b4a4c85b4f',
        applicantDetails: {
            id: 'USR-c318ec67-fff1-44e1-ab08-d629c84d4569',
            firstName: 'Lucy',
            lastName: 'Bogisich',
            email: 'Amelia.Marvin59@gmail.com',
            phoneNumber: 'string',
            dob: new Date('1952-05-30T15:33:49.777Z'),
            gender: 'other',
            country: 'Mozambique',
            region: 'Vermont',
            city: 'Fort Damon',
            zipCode: '12499',
            addressLine1: '2458 Ed Unions',
            addressLine2: '9379 Stokes Bridge'
        },
        employmentDetails: {
            currentEmploymentStatus: 'student',
            employerName: 'Kuhn Group',
            jobTitle: 'Legacy Optimization Developer',
            workAddress: '111 Felicita Overpass',
            monthlyIncome: 351729,
            employmentDuration: 1.7
        },
        loanDetails: {
            amount: 609456,
            sourceOfDownPayment: 'other',
            purpose: 'Covering temporary loss of income',
            loanTerm: 42,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-b982f381-93d9-49e7-b6c4-fac213d12e85',
        applicantDetails: {
            id: 'USR-82523bfa-94fe-45fe-b6bb-d91a35a1e185',
            firstName: 'Royce',
            lastName: 'Abbott',
            email: 'Leif81@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('2016-07-05T01:19:07.472Z'),
            gender: 'male',
            country: 'Sweden',
            region: 'North Dakota',
            city: 'West Cynthia',
            zipCode: '59423-5287',
            addressLine1: '7501 Alivia Parks',
            addressLine2: '83682 Virgie Streets'
        },
        employmentDetails: {
            currentEmploymentStatus: 'self-employed',
            employerName: 'Mertz Inc',
            jobTitle: 'Legacy Research Specialist',
            workAddress: '2666 Sylvester Falls',
            monthlyIncome: 907298,
            employmentDuration: 1.2
        },
        loanDetails: {
            amount: 229760,
            sourceOfDownPayment: 'loan',
            purpose: 'Purchasing a vehicle',
            loanTerm: 37,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-c45404b1-8e84-474f-a3fa-f9ae872186f6',
        applicantDetails: {
            id: 'USR-b5111744-133d-4db7-a321-cc91b8a0eeee',
            firstName: 'Ruby',
            lastName: 'Lehner',
            email: 'Icie.Schoen80@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('1989-03-27T23:38:21.432Z'),
            gender: 'other',
            country: 'Holy See (Vatican City State)',
            region: 'Rhode Island',
            city: 'Warwick',
            zipCode: '43855',
            addressLine1: '1036 Summer Meadow',
            addressLine2: '7111 Jimmie Loop'
        },
        employmentDetails: {
            currentEmploymentStatus: 'unemployed',
            employerName: 'Lind - MacGyver',
            jobTitle: 'Central Directives Developer',
            workAddress: '881 Wendell Crossroad',
            monthlyIncome: 585833,
            employmentDuration: 2.3
        },
        loanDetails: {
            amount: 2532271,
            sourceOfDownPayment: 'loan',
            purpose: 'Investing in real estate or other assets',
            loanTerm: 21,
            status: 'rejected',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-0cd59614-32ef-4d3b-99d2-ede28cfcf5f0',
        applicantDetails: {
            id: 'USR-a5ddd36e-8116-4814-abed-4a19bd114324',
            firstName: 'Ferne',
            lastName: 'Wisozk',
            email: 'Halle_Howe@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('1956-06-08T14:01:01.655Z'),
            gender: 'female',
            country: 'Malta',
            region: 'Nevada',
            city: 'Heathcoteborough',
            zipCode: '26084-4740',
            addressLine1: '2334 Piper Rest',
            addressLine2: '2849 Melba Radial'
        },
        employmentDetails: {
            currentEmploymentStatus: 'unemployed',
            employerName: 'McGlynn and Sons',
            jobTitle: 'Legacy Directives Analyst',
            workAddress: '3305 Neil Corners',
            monthlyIncome: 903380,
            employmentDuration: 4.5
        },
        loanDetails: {
            amount: 9863735,
            sourceOfDownPayment: 'savings',
            purpose: 'Purchasing a vehicle',
            loanTerm: 5,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-83bc26df-2700-433a-b4fa-b6a51081169c',
        applicantDetails: {
            id: 'USR-bf1a6536-2609-4f86-948a-9eb7d8927b69',
            firstName: 'Rowan',
            lastName: 'Beier',
            email: 'Danial50@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('1962-11-25T06:38:49.658Z'),
            gender: 'male',
            country: 'Eritrea',
            region: 'Wisconsin',
            city: 'Clearwater',
            zipCode: '14351-7004',
            addressLine1: '7250 Rau Forges',
            addressLine2: '17915 Alexandro Pass'
        },
        employmentDetails: {
            currentEmploymentStatus: 'student',
            employerName: 'Leuschke - Maggio',
            jobTitle: 'Principal Program Coordinator',
            workAddress: '60182 Russel Way',
            monthlyIncome: 431178,
            employmentDuration: 2.3
        },
        loanDetails: {
            amount: 2424016,
            sourceOfDownPayment: 'loan',
            purpose: 'Purchasing a vehicle',
            loanTerm: 20,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    },
    {
        id: 'LN-d4d8ada9-5642-40e5-8605-d4ea6419818e',
        applicantDetails: {
            id: 'USR-046b6acf-a6ec-4474-adea-ddaa4dba7df7',
            firstName: 'Raoul',
            lastName: 'Bins',
            email: 'Jayden30@hotmail.com',
            phoneNumber: 'string',
            dob: new Date('2016-06-07T18:40:43.915Z'),
            gender: 'female',
            country: 'Bangladesh',
            region: 'Kentucky',
            city: 'Buena Park',
            zipCode: '19473',
            addressLine1: '959 Jakubowski Harbors',
            addressLine2: '21406 Schaden Lock'
        },
        employmentDetails: {
            currentEmploymentStatus: 'student',
            employerName: 'Hickle - Hackett',
            jobTitle: 'Direct Directives Coordinator',
            workAddress: '5735 Ova Landing',
            monthlyIncome: 846492,
            employmentDuration: 3.2
        },
        loanDetails: {
            amount: 1503993,
            sourceOfDownPayment: 'investment',
            purpose: 'Investing in real estate or other assets',
            loanTerm: 28,
            status: 'pending',
            applicationDate: new Date('2023-12-01T00:00:00.000Z'),
            disbursementDate: new Date('2023-12-01T00:00:00.000Z'),
            dueDate: new Date('2023-12-01T00:00:00.000Z')
        }
    }
]

export const loans: Loan[] = loanDetails.map(loanDetails => new Loan(loanDetails));
