import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { loansResolver } from './los-workflow/loans.resolver';
import { loanApplicationGuard } from './los-workflow/loan-application/loan-application.guard';


export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./los-workflow/loan-list/loan-list.component').then(m => m.LoanListComponent),
                resolve: { loansList: loansResolver }
            },
            {
                path: 'profile',
                loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
            },
            {
                path: 'apply-loan',
                loadComponent: () => import('./los-workflow/loan-application/loan-application.component').then(m => m.LoanApplicationComponent),
                canDeactivate: [loanApplicationGuard]
            }
        ]
    }
];
