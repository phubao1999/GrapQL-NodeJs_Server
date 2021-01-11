import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const routes: Routes = [
    {
        path: '', component: UserComponent,
    }
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(routes);
