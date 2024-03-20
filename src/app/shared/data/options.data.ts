import { EmploymentStatus, LoanDownPaymentSource } from '../../model/loan';
import { GenderOptions } from '../../model/user';

export const genderOpt: GenderOptions[] = ['male', 'female', 'other'];
export const employmentStatus: EmploymentStatus[] = ['employed', 'unemployed', 'self-employed', 'student'];
export const downPaymentOpt: LoanDownPaymentSource[] = ['savings', 'loan', 'savings', 'investment', 'other'];

export const locations = {
    countries: ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Uganda'],
    regions: ['North', 'South', 'East', 'West', 'Central'],
    cities: {
        'Nigeria': ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan'],
        'Ghana': ['Accra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Cape Coast'],
        'Kenya': ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
        'South Africa': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
        'Uganda': ['Kampala', 'Gulu', 'Lira', 'Jinja', 'Mbale']
    },
}

export const loanReasons = [
    'Unexpected medical expenses',
    'Home repairs or renovations',
    'Consolidating high - interest debts',
    'Financing education or vocational training',
    'Starting or expanding a business',
    'Purchasing a vehicle',
    'Funding a special event like a wedding or vacation',
    'Covering temporary loss of income',
    'Investing in real estate or other assets',
    'Emergency expenses such as unexpected car repairs or appliance replacements'
]
