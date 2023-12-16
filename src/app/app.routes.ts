import { Routes } from '@angular/router';
import { DashboardComponent, LayoutComponent } from './components';
import { ListUsersComponent } from './components/dashboard/components';
import { DetailComponent } from './components/dashboard/components/detail';

export const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: ListUsersComponent },
      {
        path: 'user/:id',
        component: DetailComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'layout', pathMatch: 'full' },
];
