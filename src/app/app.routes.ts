import { Routes } from '@angular/router';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path : '',
        component : DashboardComponent
    },
    {
        path : 'terms',
        component : TermsAndConditionsComponent
    }
];
