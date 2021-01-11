import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageErrorComponent } from './page-error/page-error/page-error.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageErrorComponent,
  }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
